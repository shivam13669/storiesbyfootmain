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

async function fetchExchangeRates(baseCurrency: string): Promise<Record<string, number>> {
  try {
    const res = await fetch(
      `https://api.exchangerate.host/latest?base=${baseCurrency}`
    );
    if (res.ok) {
      const data = await res.json();
      if (data.rates && typeof data.rates === "object") {
        return data.rates as Record<string, number>;
      }
    }
  } catch (error) {
    console.error("Primary API failed, trying fallback...", error);
  }

  try {
    const res = await fetch(
      `https://api.frankfurter.app/latest?from=${baseCurrency}`
    );
    if (res.ok) {
      const data = await res.json();
      if (data.rates && typeof data.rates === "object") {
        return data.rates as Record<string, number>;
      }
    }
  } catch (error) {
    console.error("Fallback API failed", error);
  }

  return { [baseCurrency]: 1 };
}

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("selectedCurrency") || "USD";
    }
    return "USD";
  });

  const { data: rates = {}, isLoading } = useQuery({
    queryKey: ["exchangeRates", currency],
    queryFn: () => fetchExchangeRates(currency),
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchInterval: 1000 * 60 * 5, // Refresh every 5 minutes
    refetchOnWindowFocus: false,
  });

  const ratesMap = useMemo(() => {
    const map: Record<string, number> = { [currency]: 1 };
    if (rates && typeof rates === "object") {
      for (const [code, rate] of Object.entries(rates)) {
        if (typeof rate === "number" && rate > 0) {
          map[code] = rate;
        }
      }
    }
    return map;
  }, [rates, currency]);

  const convertPrice = (
    basePrice: number,
    fromCurrency: string = "USD"
  ): number => {
    if (!Number.isFinite(basePrice)) return 0;

    const fromRate = ratesMap[fromCurrency] ?? 1;
    const toRate = ratesMap[currency] ?? 1;

    return (basePrice / fromRate) * toRate;
  };

  const formatPrice = (
    basePrice: number,
    fromCurrency: string = "USD"
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
