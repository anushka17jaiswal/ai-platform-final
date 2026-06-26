export default function LogoStrip() {
  const logos = [
    "OPENAI",
    "GOOGLE",
    "AWS",
    "MICROSOFT",
    "NVIDIA",
    "ANTHROPIC",
  ];

  return (
    <section
      className="py-16 border-y border-white/10"
      style={{
        background: "#172B36",
      }}
    >
      <div className="max-w-7xl mx-auto px-8">

        <p className="text-center font-mono uppercase tracking-[0.35em] text-[#FFC801] text-sm mb-10">
          Trusted Worldwide
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {logos.map((logo) => (
            <div
              key={logo}
              className="flex justify-center items-center text-[#D9E8E2] text-lg font-semibold hover:text-[#FFC801] transition"
            >
              {logo}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}