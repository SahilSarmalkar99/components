export default function DriveLessSection() {
  return (
    <section className="w-full bg-[#f5f5f5] py-10 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Main Container */}
        <div className="relative bg-[#f5f5f5] rounded-[40px] min-h-[800px] overflow-hidden">

          {/* Background Road Lines */}
          <div className="absolute inset-0 opacity-30">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 800"
              fill="none"
            >
              <path
                d="M0 550 H450"
                stroke="#E5E5E5"
                strokeWidth="8"
              />
              <path
                d="M750 550 H1200"
                stroke="#E5E5E5"
                strokeWidth="8"
              />
              <path
                d="M600 550 V760"
                stroke="#E5E5E5"
                strokeWidth="8"
              />
              <path
                d="M450 550 C500 550 520 500 520 450"
                stroke="#E5E5E5"
                strokeWidth="8"
                fill="none"
              />
            </svg>
          </div>

          {/* Top Floating Review */}
          <div className="absolute left-1/2 -translate-x-1/2 top-5 z-20">
            <div className="bg-white rounded-xl shadow-md px-5 py-3 text-center">
              <p className="text-xs text-gray-500">Wonderful Experience</p>
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center pt-24 md:pt-20">
            <h1 className="font-bold leading-none text-[48px] md:text-[90px] tracking-tight">
              <span className="text-black">Drive Less</span>
              <span className="ml-2">🚗</span>
            </h1>

            <h2 className="font-bold leading-none text-[48px] md:text-[90px] tracking-tight mt-2">
              <span className="text-black">Earn</span>
              <span className="mx-2">💵</span>
              <span className="text-yellow-500">More</span>
            </h2>

            <p className="max-w-2xl mx-auto mt-6 text-gray-500 text-sm md:text-lg px-4">
              Install massage cushions in your car. Every ride becomes a
              premium experience that passengers pay for while you earn
              automatically.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <button className="bg-white px-8 py-3 rounded-xl shadow-sm font-medium">
                Learn More
              </button>

              <button className="bg-yellow-400 hover:bg-yellow-500 transition px-8 py-3 rounded-xl shadow-sm font-medium">
                Download App
              </button>
            </div>
          </div>

          {/* Left Card */}
          <div className="relative md:absolute md:left-12 md:top-[430px] mt-16 md:mt-0 mx-auto md:mx-0 w-full max-w-[320px]">
            <div className="bg-white rounded-[28px] shadow-lg p-6">
              <div className="inline-flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-yellow-400">
                  💰
                </div>

                <h3 className="font-semibold text-lg">
                  Automatic Earnings
                </h3>
              </div>

              <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                Passengers pay premium rates for comfort. You earn
                automatically from every ride.
              </p>
            </div>
          </div>

          {/* Center Logo */}
          <div className="relative flex justify-center my-16 md:my-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-16">
            <div className="relative">
              <div className="absolute inset-0 scale-[1.8] rounded-full border-8 border-white opacity-70"></div>
              <div className="absolute inset-0 scale-[1.45] rounded-full border-8 border-white opacity-80"></div>
              <div className="absolute inset-0 scale-[1.2] rounded-full border-8 border-white"></div>

              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-black flex items-center justify-center relative z-10 shadow-xl">
                <span className="text-7xl md:text-8xl font-bold">
                  <span className="text-white">m</span>
                  <span className="text-yellow-400">.</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative md:absolute md:right-12 md:top-[460px] mx-auto md:mx-0 w-full max-w-[280px]">
            <div className="bg-white rounded-[28px] shadow-lg p-6">
              <div className="flex gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
              </div>

              <h3 className="font-semibold text-lg">
                Easy Installation
              </h3>

              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                Install massage cushions in your car within minutes.
                No technical skills required.
              </p>
            </div>
          </div>

          {/* Car */}
          <div className="hidden md:block absolute left-10 bottom-20 text-5xl">
            🚘
          </div>

        </div>
      </div>
    </section>
  );
}