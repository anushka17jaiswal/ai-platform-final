import { useState } from "react";

const items = [
  {
    title: "AI Agents",
    content:
      "Deploy intelligent AI agents capable of automating customer support and workflows."
  },
  {
    title: "Analytics",
    content:
      "Track real-time metrics with enterprise dashboards and AI insights."
  },
  {
    title: "Automation",
    content:
      "Connect APIs and automate repetitive business operations."
  },
  {
    title: "Enterprise Security",
    content:
      "Enterprise-grade encryption with secure cloud infrastructure."
  }
];

export default function Accordion() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-24 bg-[#172B36]">
      <div className="max-w-5xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-white mb-12">
          Frequently Asked Questions
        </h2>

        {items.map((item, index) => (
          <div
            key={index}
            className="border-b border-white/10 py-6"
          >
            <button
              onClick={() => setOpen(open === index ? -1 : index)}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="text-2xl text-white font-semibold">
                {item.title}
              </h3>

              <span className="text-[#FFC801] text-3xl">
                {open === index ? "−" : "+"}
              </span>
            </button>

            {open === index && (
              <p className="mt-4 text-[#D9E8E2] leading-8">
                {item.content}
              </p>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}