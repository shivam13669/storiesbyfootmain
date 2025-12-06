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
        const ratesWithMeta = data.rates as Record<string, number> & { _apiBase?: string };
        ratesWithMeta._apiBase = "exchangerate.host";
        return ratesWithMeta;
      }
    }
  } catch (error) {
    console.error("[PRIMARY API] Failed, trying fallback...", error);
  }

  try {
    const res = await fetch(
      `https://api.frankfurter.app/latest?from=${baseCurrency}`,
    );
    if (res.ok) {
      const data = await res.json();
      if (data.rates && typeof data.rates === "object") {
        console.log(
          `[FALLBACK API] Fallback rates fetched for base ${baseCurrency}:`,
          Object.keys(data.rates).length,
          "currencies",
        );
        console.log("[FALLBACK API] Full API Response:", data);
        console.log("[FALLBACK API] rates.KWD =", data.rates.KWD);
        console.log("[FALLBACK API] rates.INR =", data.rates.INR);
        const ratesWithMeta = data.rates as Record<string, number> & { _apiBase?: string };
        ratesWithMeta._apiBase = "frankfurter.app";
        return ratesWithMeta;
      }
    }
  } catch (error) {
    console.error("[FALLBACK API] Failed", error);
  }

  console.warn(`No exchange rates found for ${baseCurrency}, using fallback`);
  return { [baseCurrency]: 1, _apiBase: "fallback" };
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
    console.log("[RATES MAP] Built rates map from API base:", apiBase);
    console.log("[RATES MAP] Full rates map:", map);
    console.log("[RATES MAP] map.INR =", map.INR, "(should be 1)");
    console.log("[RATES MAP] map.KWD =", map.KWD, "(should be ~0.0036-0.0038 if INR-based)");
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

    // Debug logging
    if (process.env.NODE_ENV === "development") {
      console.log(
        `Convert ${basePrice} from ${fromCurrency} to ${currency}: ${fromRate} -> ${toRate} = ${result}`,
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
