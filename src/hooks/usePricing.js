import { useState } from "react";

export function usePricing() {
  const [billing, setBilling] = useState("monthly");
  const [currency, setCurrency] = useState("USD");

  return {
    billing,
    setBilling,
    currency,
    setCurrency,
  };
}