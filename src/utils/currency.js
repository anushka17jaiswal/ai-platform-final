export const currencyRates = {
  USD: 1,
  INR: 85,
  EUR: 0.92,
};

export const currencySymbols = {
  USD: "$",
  INR: "₹",
  EUR: "€",
};

export function convertPrice(price, currency) {
  return Math.round(price * currencyRates[currency]);
}