function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF9F5]/90 backdrop-blur-md border-b border-[#F1E5DA]">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-black tracking-tight text-[#1F2937]">
            Sahay<span className="text-[#D98C3F]">AI</span>
          </h1>

          <p className="text-xs text-gray-500 mt-1">
            Government Benefits Assistant
          </p>
        </div>

        <ul className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
          <li>
            <a href="#hero" className="hover:text-[#D98C3F] transition">
              Home
            </a>
          </li>

          <li>
            <a href="#features" className="hover:text-[#D98C3F] transition">
              Features
            </a>
          </li>

          <li>
            <a href="#how-it-works" className="hover:text-[#D98C3F] transition">
              How It Works
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-[#D98C3F] transition">
              Contact
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;