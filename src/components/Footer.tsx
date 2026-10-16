const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between gap-8">

          <div>
            <h2 className="text-2xl font-bold">
              Dev<span className="text-pink-500">Stack</span>
            </h2>

            <p className="text-sm text-gray-400 mt-3 max-w-sm">
              Build your ideal development stack by exploring modern
              technologies and tools.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-sm text-gray-400">

              <a href="#" className="hover:text-white">
                Home
              </a>

              <a href="#technologies" className="hover:text-white">
                Technologies
              </a>

              <a href="#stack" className="hover:text-white">
                Your Stack
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-8 pt-5 text-sm text-gray-500 text-center">
          © 2026 DevStack. All rights reserved.
        </div>

      </div>

    </footer>
  )
}

export default Footer