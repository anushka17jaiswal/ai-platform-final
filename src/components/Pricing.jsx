import { pricingPlans } from "../data/pricing.js";
import { usePricing } from "../hooks/usePricing.js";
import { convertPrice, currencySymbols } from "../utils/currency.js";
import ArrowPathIcon from "../assets/svg/arrow-path.svg";

export default function Pricing() {
  const { billing, setBilling, currency, setCurrency } = usePricing();

  return (
    <section
  className="relative overflow-hidden py-28"
  style={{
    background:
      "linear-gradient(180deg,#172B36 0%,#114C5A 50%,#172B36 100%)",
  }}
>
  {/* Glow */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="absolute left-1/2 top-40 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-cyan-400/20 blur-[180px]" />
  <div className="absolute bottom-10 right-20 w-72 h-72 rounded-full bg-yellow-400/10 blur-[120px]" />
</div>

{/* Dot Grid */}
<div
  className="absolute inset-0 opacity-[0.08] pointer-events-none"
  style={{
    backgroundImage: "radial-gradient(#D9E8E2 1px, transparent 1px)",
    backgroundSize: "24px 24px",
  }}
/>
      <div className="relative z-10 max-w-7xl mx-auto px-8">

        <p className="font-mono uppercase tracking-[0.35em] text-[#FF9932] text-sm mb-4">
          Pricing
        </p>

       <h2 className="text-6xl font-black text-[#F1F6F4] drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
          Simple pricing.
        </h2>

        <p className="mt-6 text-lg text-[#D9E8E2]">
          Choose a plan that grows with your business.
        </p>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-4 mt-10">

          <button
            onClick={() => setBilling("monthly")}
            className={`px-6 py-3 rounded-full ${
              billing === "monthly"
                ? "bg-[#172B36] text-white"
                : "bg-[#D9E8E2]"
            }`}
          >
            Monthly
          </button>

          <button
            onClick={() => setBilling("yearly")}
            className={`px-6 py-3 rounded-full ${
              billing === "yearly"
                ? "bg-[#172B36] text-white"
                : "bg-[#D9E8E2]"
            }`}
          >
            Yearly
          </button>
<div className="flex items-center gap-3 ml-auto">
  <img
    src={ArrowPathIcon}
    alt="Currency"
    className="w-5 h-5"
  />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="ml-auto rounded-full px-5 py-3 border border-[#172B36]"
          >
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            <option value="EUR">EUR</option>
          </select>
</div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {pricingPlans.map((plan) => {

            const price =
              billing === "monthly"
                ? plan.monthly
                : plan.yearly;

            return (
              <div
                key={plan.id}
                className={`rounded-[32px] p-8 ${
                  plan.popular
                    ? "bg-[#172B36] text-white"
                    : "bg-white"
                } shadow-lg`}
              >

                {plan.popular && (
                  <span className="inline-block px-3 py-1 rounded-full bg-[#FFC801] text-[#172B36] text-xs font-bold mb-6">
                    MOST POPULAR
                  </span>
                )}

                <h3 className="text-3xl font-bold">
                  {plan.name}
                </h3>

                <div className="mt-6 text-5xl font-black">
                  {currencySymbols[currency]}
                  {convertPrice(price, currency)}
                </div>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      ✓ {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-10 w-full py-4 rounded-full font-semibold ${
                    plan.popular
                      ? "bg-[#FFC801] text-[#172B36]"
                      : "bg-[#172B36] text-white"
                  }`}
                >
                  Get Started
                </button>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}