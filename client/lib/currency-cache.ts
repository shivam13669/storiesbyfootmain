/**
 * IndexedDB cache for exchange rates
 * Provides offline fallback when APIs are unavailable
 */

const DB_NAME = "CurrencyCache";
const STORE_NAME = "rates";
const DB_VERSION = 1;

interface CachedRates {
  baseCurrency: string;
  rates: Record<string, number>;
  timestamp: number;
  source: "api" | "cache";
}

let dbPromise: Promise<IDBDatabase> | null = null;

function getDB(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise;

  dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "baseCurrency" });
      }
    };
  });

  return dbPromise;
}

export async function getCachedRates(
  baseCurrency: string,
): Promise<CachedRates | null> {
  try {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(baseCurrency);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || null);
    });
  } catch (error) {
    console.error("Failed to read from cache:", error);
    return null;
  }
}

export async function cacheRates(
  baseCurrency: string,
  rates: Record<string, number>,
): Promise<void> {
  try {
    const db = await getDB();
    const cached: CachedRates = {
      baseCurrency,
      rates,
      timestamp: Date.now(),
      source: "api",
    };

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(cached);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  } catch (error) {
    console.error("Failed to cache rates:", error);
  }
}

export async function getCacheAge(
  baseCurrency: string,
): Promise<number | null> {
  const cached = await getCachedRates(baseCurrency);
  if (!cached) return null;
  return Date.now() - cached.timestamp;
}

export async function isCacheStale(
  baseCurrency: string,
  maxAgeMs: number = 1000 * 60 * 60 * 24,
): Promise<boolean> {
  const age = await getCacheAge(baseCurrency);
  return age === null || age > maxAgeMs;
}
