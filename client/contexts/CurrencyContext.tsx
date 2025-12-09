import React, { createContext, useContext, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";

interface CurrencyContextType {
  currency: string;
  setCurrency: (code: string) => void;
  convertPrice: (basePrice: number, fromCurrency?: string) => number;
  getSymbol: (code: string) => string;
  formatPrice: (basePrice: number, fromCurrency?: string) => string;
  isLoading: boolean;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined,
);

const CURRENCY_SYMBOLS: Record<string, string> = {
  USD: "$",
  INR: "₹",
  EUR: "€",
  GBP: "£",
  AED: "د.إ",
  SGD: "S$",
  AUD: "A$",
  CAD: "C$",
  JPY: "¥",
  CNY: "¥",
  CHF: "CHF",
  HKD: "HK$",
  NZD: "NZ$",
  SEK: "kr",
  NOK: "kr",
  DKK: "kr",
  ZAR: "R",
  THB: "฿",
  MYR: "RM",
  IDR: "Rp",
  LKR: "Rs",
  BHD: "د.ب",
  QAR: "ر.ق",
  OMR: "ر.ع.",
  KWD: "د.ك",
};

// API Configuration - easily extensible for API keys
interface APIConfig {
  name: string;
  url: (baseCurrency: string, apiKey?: string) => string;
  parser: (data: any) => Record<string, number> | null;
  apiKey?: string;
  enabled?: boolean;
}

const API_CONFIGS: APIConfig[] = [
  {
    name: "exchangerate.host",
    url: (baseCurrency) =>
      `https://api.exchangerate.host/latest?base=${baseCurrency}`,
    parser: (data) =>
      data.rates && typeof data.rates === "object" ? data.rates : null,
    enabled: true,
  },
  {
    name: "open.er-api.com",
    url: (baseCurrency) =>
      `https://open.er-api.com/v6/latest/${baseCurrency}`,
    parser: (data) =>
      data.rates && typeof data.rates === "object" ? data.rates : null,
    enabled: true,
  },
];

interface CachedRatesData {
  rates: Record<string, number>;
  timestamp: number;
  apiSource: string;
}

const CACHE_KEY = "currency_rates_cache";
const CACHE_EXPIRY_MS = 1000 * 60 * 60; // 1 hour - rates become stale after 1 hour

function getCachedRates(): CachedRatesData | null {
  if (typeof window === "undefined") return null;

  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const data: CachedRatesData = JSON.parse(cached);
    const ageMs = Date.now() - data.timestamp;

    if (ageMs > CACHE_EXPIRY_MS) {
      console.log(
        `[CACHE] Rates expired (${Math.round(ageMs / 1000 / 60)} min old), will attempt fresh fetch`,
      );
      return null;
    }

    console.log(
      `[CACHE] Using cached rates from ${data.apiSource} (${Math.round(ageMs / 1000)} sec old)`,
    );
    return data;
  } catch {
    return null;
  }
}

function setCachedRates(
  rates: Record<string, number>,
  apiSource: string,
): void {
  if (typeof window === "undefined") return;

  try {
    const data: CachedRatesData = {
      rates,
      timestamp: Date.now(),
      apiSource,
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
    console.log(
      `[CACHE] Saved fresh rates from ${apiSource} at ${new Date().toISOString()}`,
    );
  } catch (error) {
    console.error("[CACHE] Failed to save rates:", error);
  }
}

async function fetchExchangeRates(
  baseCurrency: string,
): Promise<
  Record<string, number> & { _apiBase?: string; _isCached?: boolean }
> {
  // Try each API in order
  for (const config of API_CONFIGS) {
    if (!config.enabled) continue;

    try {
      console.log(`[API] Attempting ${config.name}...`);
      const url = config.url(baseCurrency, config.apiKey);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        const rates = config.parser(data);

        if (
          rates &&
          typeof rates === "object" &&
          Object.keys(rates).length > 0
        ) {
          console.log(
            `[API] ✓ ${config.name} succeeded for ${baseCurrency} (${Object.keys(rates).length} rates)`,
          );
          setCachedRates(rates, config.name);
          const ratesWithMeta = rates as Record<string, number> & {
            _apiBase?: string;
            _isCached?: boolean;
          };
          ratesWithMeta._apiBase = config.name;
          ratesWithMeta._isCached = false;
          return ratesWithMeta;
        }
      }
    } catch (error) {
      console.log(
        `[API] ✗ ${config.name} failed:`,
        error instanceof Error ? error.message : String(error),
      );
    }
  }

  // All live APIs failed - fallback to cache
  console.log("[API] All live APIs exhausted, checking cache...");
  const cached = getCachedRates();
  if (cached) {
    console.log(`[FALLBACK] Using cached rates from ${cached.apiSource}`);
    const ratesWithMeta = cached.rates as Record<string, number> & {
      _apiBase?: string;
      _isCached?: boolean;
    };
    ratesWithMeta._apiBase = `${cached.apiSource} (cached)`;
    ratesWithMeta._isCached = true;
    return ratesWithMeta;
  }

  // No cache and APIs failed - use hardcoded minimum fallback (safety net only)
  console.warn(
    "[FALLBACK] No APIs available and no cache - using hardcoded emergency rates",
  );
  const emergencyRates: Record<string, number> & {
    _apiBase?: string;
    _isCached?: boolean;
  } = {
    USD: 1,
    INR: 83.5,
    EUR: 0.93,
    GBP: 0.79,
    AED: 3.67,
    SGD: 1.36,
    AUD: 1.53,
    CAD: 1.37,
    JPY: 150,
    CNY: 7.25,
    CHF: 0.89,
    HKD: 7.83,
    NZD: 1.68,
    SEK: 10.6,
    NOK: 10.8,
    DKK: 6.92,
    ZAR: 18.6,
    THB: 36,
    MYR: 4.75,
    IDR: 16100,
    LKR: 330,
    BHD: 0.376,
    QAR: 3.64,
    OMR: 0.385,
    KWD: 0.305,
    _apiBase: "emergency-hardcoded",
    _isCached: true,
  };
  return emergencyRates;
}

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("selectedCurrency") || "INR";
    }
    return "INR";
  });

  const { data: rates = {}, isLoading } = useQuery({
    queryKey: ["exchangeRates"],
    queryFn: () => fetchExchangeRates("INR"),
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  const ratesMap = useMemo(() => {
    const map: Record<string, number> = { INR: 1 };
    if (rates && typeof rates === "object") {
      for (const [code, rate] of Object.entries(rates)) {
        if (typeof rate === "number" && rate > 0) {
          map[code] = rate;
        }
      }
    }
    const apiBase = (rates as any)?._apiBase || "unknown";
    const isCached = (rates as any)?._isCached ? "[CACHED]" : "";
    console.log(
      `[RATES MAP] ${isCached} Built from ${apiBase} | INR=${map.INR} USD=${map.USD}`,
    );
    return map;
  }, [rates]);

  const convertPrice = (
    basePrice: number,
    fromCurrency: string = "USD",
  ): number => {
    if (!Number.isFinite(basePrice)) return 0;

    const fromRate = ratesMap[fromCurrency] ?? 1;
    const toRate = ratesMap[currency] ?? 1;

    const result = (basePrice / fromRate) * toRate;

    if (process.env.NODE_ENV === "development") {
      console.log(
        `[CONVERSION] ${basePrice} ${fromCurrency} (rate: ${fromRate}) → ${currency} (rate: ${toRate}) = ${result}`,
      );
    }

    return result;
  };

  const formatPrice = (
    basePrice: number,
    fromCurrency: string = "USD",
  ): string => {
    const converted = convertPrice(basePrice, fromCurrency);
    const symbol = getSymbol(currency);
    const formatted = new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 0,
    }).format(Math.round(converted));
    return `${symbol} ${formatted}`;
  };

  const getSymbol = (code: string): string => {
    return CURRENCY_SYMBOLS[code] || code;
  };

  const setCurrency = (code: string) => {
    setCurrencyState(code);
    localStorage.setItem("selectedCurrency", code);
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        convertPrice,
        getSymbol,
        formatPrice,
        isLoading,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within CurrencyProvider");
  }
  return context;
}
