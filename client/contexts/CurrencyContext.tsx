import React, { createContext, useContext, useEffect, useState } from "react";

interface CurrencyContextType {
  currency: string;
  setCurrency: (code: string) => void;
  convertPrice: (basePrice: number, fromCurrency?: string) => number;
  getSymbol: (code: string) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("selectedCurrency") || "USD";
    }
    return "USD";
  });

  useEffect(() => {
    localStorage.setItem("selectedCurrency", currency);
  }, [currency]);

  const conversionRates: Record<string, number> = {
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

  const getCurrencySymbol = (code: string): string => {
    const symbols: Record<string, string> = {
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
    return symbols[code] || code;
  };

  const convertPrice = (basePrice: number, fromCurrency = "USD"): number => {
    const baseRate = conversionRates[fromCurrency] || 1;
    const targetRate = conversionRates[currency] || 1;
    return (basePrice / baseRate) * targetRate;
  };

  const setCurrency = (code: string) => {
    setCurrencyState(code);
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        convertPrice,
        getSymbol: getCurrencySymbol,
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
