export default function Footer() {
  return (
    <footer className="bg-[#172B36] border-t border-white/10 py-20">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-12">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold text-white">
            AI Platform
          </h2>

          <p className="mt-5 text-[#D9E8E2] leading-7">
            Build, automate and scale enterprise AI workflows with premium performance.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-semibold mb-5">
            Product
          </h3>

          <ul className="space-y-3 text-[#D9E8E2]">
            <li>Features</li>
            <li>Pricing</li>
            <li>Automation</li>
            <li>Security</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-5">
            Company
          </h3>

          <ul className="space-y-3 text-[#D9E8E2]">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-5">
            Stay Updated
          </h3>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-full px-5 py-3 bg-white/10 border border-white/10 text-white outline-none"
          />

          <button
  onClick={() =>
    window.open(
      "https://forms.gle/RNQd4HcF97iXY2kB6",
      "_blank"
    )
  }
  className="mt-4 w-full py-3 rounded-full bg-[#FFC801] text-[#172B36] font-semibold hover:scale-105 transition"
>
  Contact Us
</button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-[#D9E8E2]">

        <p>©️ 2026 AI Platform. All rights reserved.</p>

        <div className="flex gap-6 mt-5 md:mt-0">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Support</span>
        </div>

      </div>

    </footer>
  );
}