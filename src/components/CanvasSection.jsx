export default function CanvasSection() {
  return (
    <section
      className="py-28"
      style={{
        background:
          "linear-gradient(180deg,#172B36 0%,#114C5A 50%,#172B36 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-8">

        <p className="font-mono uppercase tracking-[0.35em] text-[#FFC801] text-sm mb-4">
          Infinite Visual Canvas
        </p>

        <h2 className="text-6xl font-bold text-[#F1F6F4] leading-tight max-w-3xl">
          Scale logic at enterprise level.
        </h2>

        <p className="mt-8 text-lg text-[#D9E8E2] max-w-2xl">
          Design, deploy and manage sophisticated AI workflows through an
          intuitive visual interface.
        </p>

        <div
          className="relative overflow-hidden mt-16 h-[520px] rounded-[32px] border border-white/10"
          style={{
            background: "rgba(241,246,244,0.05)",
            backdropFilter: "blur(16px)",
          }}
        >
          {/* Grid */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-[length:24px_24px]"></div>

          {/* Glow */}
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-[#FFC801]/10 blur-[120px]"></div>

          <div className="relative w-full h-full">

            {/* Email */}
            <div className="absolute top-16 left-12 bg-[#172B36]/80 border border-[#D9E8E2]/20 rounded-2xl px-5 py-4 w-52 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-widest text-[#FFC801] font-mono">
                Trigger
              </p>
              <h4 className="text-[#F1F6F4] font-semibold mt-2">
                Email Trigger
              </h4>
            </div>

            {/* AI */}
            <div className="absolute top-16 left-[340px] bg-[#172B36]/80 border border-[#D9E8E2]/20 rounded-2xl px-5 py-4 w-56 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-widest text-[#FFC801] font-mono">
                AI
              </p>
              <h4 className="text-[#F1F6F4] font-semibold mt-2">
                AI Agent
              </h4>
            </div>

            {/* Code */}
            <div className="absolute top-16 right-12 bg-[#172B36]/80 border border-[#D9E8E2]/20 rounded-2xl px-5 py-4 w-52 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-widest text-[#FFC801] font-mono">
                Logic
              </p>
              <h4 className="text-[#F1F6F4] font-semibold mt-2">
                Code Engine
              </h4>
            </div>

            {/* Telegram */}
            <div className="absolute bottom-16 left-[340px] bg-[#172B36]/80 border border-[#D9E8E2]/20 rounded-2xl px-5 py-4 w-56 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-widest text-[#FFC801] font-mono">
                Output
              </p>
              <h4 className="text-[#F1F6F4] font-semibold mt-2">
                Telegram
              </h4>
            </div>

            {/* Email Output */}
            <div className="absolute bottom-16 right-12 bg-[#172B36]/80 border border-[#D9E8E2]/20 rounded-2xl px-5 py-4 w-52 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-widest text-[#FFC801] font-mono">
                Action
              </p>
              <h4 className="text-[#F1F6F4] font-semibold mt-2">
                Send Email
              </h4>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}