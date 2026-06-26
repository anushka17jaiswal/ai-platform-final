export default function Hero() {
  return (
    <section
  className="relative min-h-screen overflow-hidden text-white"
  style={{
  background: `
    radial-gradient(circle at top right, rgba(255,200,1,0.08), transparent 35%),
    linear-gradient(180deg, #172B36 0%, #114C5A 45%, #172B36 100%)
  `,
}}
>
<div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#F6C344]/10 blur-[180px]"></div>

<div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[180px]"></div>
      {/* Background Blur */}
     

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-40">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div className="space-y-8">

  <p
    className="font-mono uppercase tracking-[0.35em] text-sm"
    style={{ color: "#FFC801" }}
  >
    ENTERPRISE AI PLATFORM
  </p>

  <h1
    className="font-['Inter'] text-7xl md:text-8xl font-bold leading-[0.85] tracking-[-0.06em]"
    style={{ color: "#F1F6F4" }}
  >
    Build Smarter
    <br />
    Automate Faster
    <br />
    Scale Effortlessly
  </h1>

  <p
    className="text-lg leading-8 max-w-xl"
    style={{ color: "#D9E8E2" }}
  >
    Empower your business with intelligent AI workflows,
    automation, analytics and enterprise-grade infrastructure.
  </p>

  <div className="flex flex-wrap gap-5">

    <button
      className="px-8 py-4 rounded-full font-semibold transition duration-300 hover:scale-105"
      style={{
        background: "#FFC801",
        color: "#172B36"
      }}
    >
      Start Building →
    </button>

    <button
      className="px-8 py-4 rounded-full border transition duration-300"
      style={{
        borderColor: "#FFC801",
        color: "#FFC801"
      }}
    >
      Watch Demo
    </button>

  </div>

</div>

          {/* Right */}
<div className="space-y-6">

  <div className="border-b border-white/10 py-5 group cursor-pointer flex items-center gap-6">
    <span className="text-white/30 text-sm font-mono">01</span>
    <h3 className="text-5xl font-bold text-white group-hover:text-[#F6C344] transition-all duration-300">
      AI Strategy
    </h3>
  </div>

  <div className="border-b border-white/10 py-5 group cursor-pointer flex items-center gap-6">
    <span className="text-white/30 text-sm font-mono">02</span>
    <h3 className="text-5xl font-bold text-white group-hover:text-[#F6C344] transition-all duration-300">
      Workflow Automation
    </h3>
  </div>

  <div className="border-b border-white/10 py-5 group cursor-pointer flex items-center gap-6">
    <span className="text-white/30 text-sm font-mono">03</span>
    <h3 className="text-5xl font-bold text-white group-hover:text-[#F6C344] transition-all duration-300">
      Predictive Analytics
    </h3>
  </div>

  <div className="border-b border-white/10 py-5 group cursor-pointer flex items-center gap-6">
    <span className="text-white/30 text-sm font-mono">04</span>
    <h3 className="text-5xl font-bold text-white group-hover:text-[#F6C344] transition-all duration-300">
      Enterprise Security
    </h3>
  </div>

</div>
</div>
</div>
</section>
  );
}

