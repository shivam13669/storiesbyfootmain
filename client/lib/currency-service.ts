const CACHE_KEY = 'currency_rates_cache';
const CACHE_EXPIRY_MS = 24 * 60 * 60 * 1000; // 24 hours

interface CachedRates {
  rates: Record<string, number>;
  timestamp: number;
  baseRate: string;
}

// Hardcoded rates as emergency fallback
const EMERGENCY_RATES: Record<string, number> = {
  USD: 1,
  INR: 83.12,
  EUR: 0.92,
  GBP: 0.79,
  AED: 3.67,
  SGD: 1.35,
  AUD: 1.53,
  CAD: 1.36,
  JPY: 149.5,
  CNY: 7.24,
  CHF: 0.88,
  HKD: 7.81,
  NZD: 1.67,
  SEK: 10.5,
  NOK: 10.6,
  DKK: 6.85,
  ZAR: 18.9,
  THB: 35.2,
  MYR: 4.7,
  IDR: 15650,
  LKR: 325,
  BHD: 0.376,
  QAR: 3.64,
  OMR: 0.385,
  KWD: 0.307,
};

function isCacheValid(cached: CachedRates): boolean {
  const now = Date.now();
  return now - cached.timestamp < CACHE_EXPIRY_MS;
}

function getCachedRates(): Record<string, number> | null {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsed: CachedRates = JSON.parse(cached);
      if (isCacheValid(parsed)) {
        return parsed.rates;
      }
    }
  } catch (error) {
    console.error('Error reading currency cache:', error);
  }
  return null;
}

function saveCachesRates(rates: Record<string, number>): void {
  try {
    const cacheData: CachedRates = {
      rates,
      timestamp: Date.now(),
      baseRate: 'USD',
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
  } catch (error) {
    console.error('Error saving currency cache:', error);
  }
}

async function fetchLiveRates(baseCurrency: string = 'USD'): Promise<Record<string, number> | null> {
  try {
    // Frankfurter API: https://api.frankfurter.app
    // Browser-safe, no API key required, no CORS restrictions
    const response = await fetch(
      `https://api.frankfurter.app/latest?from=${baseCurrency}`,
      {
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      console.error(`Frankfurter API error: ${response.status}`);
      return null;
    }

    const data = await response.json();
    
    // Frankfurter API response format:
    // { "amount": 1, "base": "USD", "date": "2024-01-01", "rates": { "EUR": 0.92, ... } }
    if (data.rates && typeof data.rates === 'object') {
      const rates: Record<string, number> = {
        [baseCurrency]: 1, // Base currency is always 1
        ...data.rates,
      };
      
      // Save to cache immediately on successful fetch
      saveCachesRates(rates);
      
      return rates;
    }

    return null;
  } catch (error) {
    console.error('Error fetching live exchange rates:', error);
    return null;
  }
}

export async function getExchangeRates(baseCurrency: string = 'USD'): Promise<Record<string, number>> {
  // First, try to get cached rates
  const cachedRates = getCachedRates();
  if (cachedRates) {
    return cachedRates;
  }

  // If no valid cache, try to fetch live rates
  const liveRates = await fetchLiveRates(baseCurrency);
  if (liveRates) {
    return liveRates;
  }

  // Fallback to emergency rates only if both cache and API fail
  console.warn('Using emergency hardcoded exchange rates');
  return EMERGENCY_RATES;
}

export function getCachedRatesSync(): Record<string, number> | null {
  return getCachedRates();
}
