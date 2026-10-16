import heroImage from "../assets/banner-stack.png"

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* LEFT SIDE */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              Build Your Ideal
              <br />

              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-6 text-gray-500 text-lg leading-8 max-w-xl">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits
              your next project.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#technologies"
                className="px-6 py-3 rounded-md text-white font-medium
                bg-gradient-to-r from-orange-500 to-pink-500
                hover:opacity-90 transition"
              >
                Explore Technologies
              </a>

              <button
                className="px-6 py-3 rounded-md border border-gray-300
                text-gray-600 hover:bg-gray-50 transition"
              >
                Learn More
              </button>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center md:justify-end">
            <img
              src={heroImage}
              alt="Development Stack"
              className="w-[280px] md:w-[340px] lg:w-[400px]"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero