import Accordion from "./Accordion";
import CubeIcon from "../assets/svg/cube-16-solid.svg";
import ChartIcon from "../assets/svg/chart-pie.svg";
import CogIcon from "../assets/svg/cog-8-tooth.svg";
import TrendIcon from "../assets/svg/arrow-trending-up.svg";

export default function Features() {
  return (
    <section
      className="relative overflow-hidden py-28"
      style={{
        background: `
          radial-gradient(circle at 50% 30%, rgba(60,205,220,0.25), transparent 45%),
          linear-gradient(180deg,#172B36 0%,#114C5A 50%,#172B36 100%)
        `,
      }}
    >
      {/* Dot Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(241,246,244,0.35) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">

        <p className="font-mono uppercase tracking-[0.35em] text-[#FFC801] text-sm mb-4">
          FEATURES
        </p>

        <h2 className="text-6xl font-black leading-tight text-[#F1F6F4] max-w-3xl">
          Everything your AI team needs.
        </h2>

        <p className="mt-8 text-lg text-[#D9E8E2] max-w-2xl">
          Build, automate and scale enterprise AI workflows with speed,
          security and intelligence.
        </p>
<div className="hidden lg:grid lg:grid-cols-3 gap-6 mt-20"></div>
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* AI Agents */}
          <div className="lg:row-span-2 rounded-[32px] p-8 bg-[#172B36]/80 backdrop-blur-xl border border-white/10 text-[#F1F6F4] hover:-translate-y-2 transition-all duration-300">

            <p className="font-mono text-[#FFC801] uppercase text-xs tracking-[0.3em]">
              Automation
            </p>
            
<img
  src={CubeIcon}
  alt="AI Agents"
  className="w-10 h-10 mb-5"
/>
            <h3 className="text-3xl font-bold mt-4">
              AI Agents
            </h3>

            <p className="mt-5 text-[#D9E8E2] leading-7">
              Deploy intelligent AI agents capable of handling customer
              support, workflow automation and business operations.
            </p>

            <div className="mt-12 h-44 rounded-2xl bg-[#114C5A]/70 border border-white/10 flex items-center justify-center">
              <span className="text-[#FFC801] font-mono">
                AI FLOW
              </span>
            </div>

          </div>

          {/* Analytics */}
          <div className="rounded-[32px] p-8 bg-[#F1F6F4] hover:-translate-y-2 transition-all duration-300">

            <p className="font-mono text-[#FF9932] uppercase text-xs tracking-[0.3em]">
              Insights
            </p>
            <img
  src={ChartIcon}
  alt="Analytics"
  className="w-10 h-10 mb-5"
/>

            <h3 className="text-2xl font-bold text-[#172B36] mt-4">
              Analytics
            </h3>

            <p className="mt-4 text-[#114C5A]">
              Visual dashboards powered by real-time AI analytics.
            </p>

          </div>

          {/* Security */}
          <div className="rounded-[32px] p-8 bg-[#FFC801] hover:-translate-y-2 transition-all duration-300">

            <p className="font-mono uppercase text-xs tracking-[0.3em] text-[#172B36]">
              Security
            </p>
            <img
  src={TrendIcon}
  alt="Security"
  className="w-10 h-10 mb-5"
/>
            
            <h3 className="text-2xl font-bold text-[#172B36] mt-4">
              Enterprise Security
            </h3>

            <p className="mt-4 text-[#172B36]">
              End-to-end encryption and enterprise-grade compliance.
            </p>

          </div>

          {/* Workflow */}
          <div className="lg:col-span-2 rounded-[32px] p-8 bg-[#114C5A]/80 backdrop-blur-xl border border-white/10 text-white hover:-translate-y-2 transition-all duration-300">

            <p className="font-mono uppercase text-xs tracking-[0.3em] text-[#FFC801]">
              Workflow
            </p>
<img
  src={CogIcon}
  alt="Workflow"
  className="w-10 h-10 mb-5"
/>

            <h3 className="text-3xl font-bold mt-4">
              Workflow Automation
            </h3>

            <p className="mt-5 text-[#D9E8E2] max-w-2xl">
              Connect APIs, trigger events and automate complex business
              processes using AI-powered workflows.
            </p>

          </div>
          <div className="lg:hidden">
  <Accordion />
</div>

        </div>

      </div>
    </section>
  );
}