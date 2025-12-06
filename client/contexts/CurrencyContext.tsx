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

// Offline fallback rates relative to USD (1 USD = X local currency)
const OFFLINE_FALLBACK_RATES: Record<string, number> = {
  USD: 1,
  INR: 83.25,
  EUR: 0.92,
  GBP: 0.79,
  AED: 3.67,
  SGD: 1.35,
  AUD: 1.52,
  CAD: 1.36,
  JPY: 149.5,
  CNY: 7.24,
  CHF: 0.88,
  HKD: 7.81,
  NZD: 1.67,
  SEK: 10.5,
  NOK: 10.72,
  DKK: 6.86,
  ZAR: 18.5,
  THB: 35.8,
  MYR: 4.72,
  IDR: 16000,
  LKR: 329,
  BHD: 0.376,
  QAR: 3.64,
  OMR: 0.385,
  KWD: 0.305,
};

async function fetchExchangeRates(
  baseCurrency: string,
): Promise<Record<string, number> & { _apiBase?: string }> {
  try {
    const res = await fetch(
      `https://api.exchangerate.host/latest?base=${baseCurrency}`,
    );
    if (res.ok) {
      const data = await res.json();
      if (data.rates && typeof data.rates === "object") {
        console.log(
          `[PRIMARY API] Exchange rates fetched for base ${baseCurrency}:`,
          Object.keys(data.rates).length,
          "currencies",
        );
        console.log("[PRIMARY API] Full API Response:", data);
        console.log("[PRIMARY API] rates.KWD =", data.rates.KWD);
        console.log("[PRIMARY API] rates.INR =", data.rates.INR);
        const ratesWithMeta = data.rates as Record<string, number> & {
          _apiBase?: string;
        };
        ratesWithMeta._apiBase = "exchangerate.host";
        return ratesWithMeta;
      }
    }
  } catch (error) {
    console.error("[PRIMARY API] Failed:", error);
  }

  console.warn(
    `Exchange rates for ${baseCurrency} unavailable from API, using offline fallback`,
  );
  return { [baseCurrency]: 1, _apiBase: "offline-fallback" };
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
    console.log(
      `[RATES MAP] Built from ${apiBase} | INR=${map.INR} KWD=${map.KWD?.toFixed(6) || "N/A"}`,
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
