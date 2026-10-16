const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">

          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold">
            DS
          </div>

          <h1 className="text-xl font-bold text-slate-900">
            Dev<span className="text-pink-500">Stack</span>
          </h1>

        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">

          <a href="#" className="text-pink-500 font-medium">
            Home
          </a>

          <a href="#technologies" className="hover:text-pink-500">
            Technologies
          </a>

          <a href="#" className="hover:text-pink-500">
            Projects
          </a>

          <a href="#" className="hover:text-pink-500">
            About
          </a>

          <a href="#" className="hover:text-pink-500">
            Contact
          </a>

        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-5">

          <button className="text-sm text-slate-700">
            Sign In
          </button>

          <button className="bg-pink-500 hover:bg-pink-600 text-white text-sm px-5 py-2.5 rounded-full">
            Sign Up
          </button>

        </div>

      </div>

    </nav>
  )
}

export default Navbar