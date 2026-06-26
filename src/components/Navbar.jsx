export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-6">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center">
            <span className="text-black font-bold">⚡</span>
          </div>

          <h1 className="text-2xl font-bold tracking-[0.08em] text-white">
  <span className="text-[#F6C344]">AI</span>Platform
</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#" className="text-white/70 hover:text-[#F6C344] transition-all duration-300">Home</a>
          <a href="#" className="text-white/70 hover:text-[#F6C344] transition-all duration-300">Features</a>
          <a href="#" className="text-white/70 hover:text-[#F6C344] transition-all duration-300">Pricing</a>
          <a href="#" className="text-white/70 hover:text-[#F6C344] transition-all duration-300" >Contact</a>
        </nav>

        {/* Button */}
        <button className="hidden md:block px-6 py-2 rounded-full border border-[#F6C344]/50 text-[#F6C344] hover:bg-[#F6C344] hover:text-black transition-all duration-300">
          Get Started
        </button>

        {/* Mobile Menu */}
        <button className="md:hidden text-3xl">
          ☰
        </button>

      </div>
    </header>
  );
}