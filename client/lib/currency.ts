export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export const CURRENCIES: Currency[] = [
  // Commonly Used
  { code: "INR", name: "Indian Rupee", symbol: "₹" },
  { code: "USD", name: "United States Dollar", symbol: "$" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "GBP", name: "British Pound", symbol: "£" },
  { code: "AED", name: "United Arab Emirates Dirham", symbol: "د.إ" },
  { code: "SGD", name: "Singapore Dollar", symbol: "S$" },
  { code: "AUD", name: "Australian Dollar", symbol: "A$" },
  // All Other
  { code: "CAD", name: "Canadian Dollar", symbol: "C$" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥" },
  { code: "CNY", name: "Chinese Yuan", symbol: "¥" },
  { code: "CHF", name: "Swiss Franc", symbol: "CHF" },
  { code: "HKD", name: "Hong Kong Dollar", symbol: "HK$" },
  { code: "NZD", name: "New Zealand Dollar", symbol: "NZ$" },
  { code: "SEK", name: "Swedish Krona", symbol: "kr" },
  { code: "NOK", name: "Norwegian Krone", symbol: "kr" },
  { code: "DKK", name: "Danish Krone", symbol: "kr" },
  { code: "ZAR", name: "South African Rand", symbol: "R" },
  { code: "THB", name: "Thai Baht", symbol: "฿" },
  { code: "MYR", name: "Malaysian Ringgit", symbol: "RM" },
  { code: "IDR", name: "Indonesian Rupiah", symbol: "Rp" },
  { code: "LKR", name: "Sri Lankan Rupee", symbol: "Rs" },
  { code: "BHD", name: "Bahraini Dinar", symbol: "د.ب" },
  { code: "QAR", name: "Qatari Riyal", symbol: "ر.ق" },
  { code: "OMR", name: "Omani Rial", symbol: "ر.ع." },
];

export const COMMON_CODES = [
  "INR",
  "USD",
  "EUR",
  "GBP",
  "AED",
  "SGD",
  "AUD",
] as const;

export const FLAG_BY_CURRENCY: Record<string, string> = {
  INR: "IN",
  USD: "US",
  EUR: "EU",
  GBP: "GB",
  AED: "AE",
  SGD: "SG",
  AUD: "AU",
  CAD: "CA",
  JPY: "JP",
  CNY: "CN",
  CHF: "CH",
  HKD: "HK",
  NZD: "NZ",
  SEK: "SE",
  NOK: "NO",
  DKK: "DK",
  ZAR: "ZA",
  THB: "TH",
  MYR: "MY",
  IDR: "ID",
  LKR: "LK",
  BHD: "BH",
  QAR: "QA",
  OMR: "OM",
};

export function getCurrencyByCode(code: string): Currency {
  return (
    CURRENCIES.find((c) => c.code === code) || {
      code: "USD",
      name: "United States Dollar",
      symbol: "$",
    }
  );
}
