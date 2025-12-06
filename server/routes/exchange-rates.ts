import { RequestHandler } from "express";

interface ExchangeRatesResponse {
  rates: Record<string, number>;
  _apiBase: string;
}

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
): Promise<ExchangeRatesResponse> {
  try {
    const res = await fetch(
      `https://api.exchangerate.host/latest?base=${baseCurrency}`,
    );
    if (res.ok) {
      const data = await res.json();
      if (data.rates && typeof data.rates === "object") {
        return {
          rates: data.rates as Record<string, number>,
          _apiBase: "exchangerate.host",
        };
      }
    }
  } catch (error) {
    console.error("[EXCHANGE RATES] API fetch failed:", error);
  }

  // Build offline fallback rates relative to the selected base currency
  const fallbackRates: Record<string, number> = {};
  const baseRate = OFFLINE_FALLBACK_RATES[baseCurrency] || 1;

  for (const [code, rate] of Object.entries(OFFLINE_FALLBACK_RATES)) {
    fallbackRates[code] = rate / baseRate;
  }

  return {
    rates: fallbackRates,
    _apiBase: "offline-fallback",
  };
}

export const handleExchangeRates: RequestHandler = async (req, res) => {
  const baseCurrency = (req.query.base as string) || "INR";

  if (!baseCurrency.match(/^[A-Z]{3}$/)) {
    return res.status(400).json({ error: "Invalid currency code" });
  }

  const result = await fetchExchangeRates(baseCurrency);
  res.json(result);
};
