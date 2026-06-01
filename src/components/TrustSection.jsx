export default function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa]  lg:py-28">
      {/* Background Blur */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-full px-4">
        {/* Top Content */}
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              Trust Indicator
            </div>

            <h2 className="max-w-xl text-4xl font-bold tracking-tight text-[#0f172a] md:text-5xl">
              Trusted by individuals &
              <br />
              businesses worldwide
            </h2>
          </div>

          <p className="max-w-md text-[17px] leading-relaxed text-gray-500">
            Track spending, plan budgets, and manage your money
            effortlessly with intelligent financial tools built for
            everyday use.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr_1fr]">
          {/* Card 1 */}
          <div className="group rounded-[32px] border border-gray-200 bg-[#f5f5f5] p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
              <span className="text-xl text-blue-600">🛡️</span>
            </div>

            <h3 className="text-3xl font-semibold text-[#111827]">
              Real-Time Conversion
            </h3>

            <p className="mt-2 text-gray-500">
              Live exchange rates instantly
            </p>

            {/* Inner Box */}
            <div className="mt-8 rounded-3xl bg-white p-5 shadow-sm">
              <h4 className="mb-4 font-semibold text-gray-900">
                Currency Details
              </h4>

              <div className="space-y-3">
                <div className="rounded-2xl border border-gray-100 p-3">
                  <p className="text-xs text-gray-400">From</p>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="font-semibold">1000.00</span>
                    <span className="text-sm text-gray-500">USD</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-100 p-3">
                  <p className="text-xs text-gray-400">To</p>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="font-semibold">121606.50</span>
                    <span className="text-sm text-gray-500">BDT</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span>Network Fees</span>
                <span>2.59 USD</span>
              </div>

              <button className="mt-5 w-full rounded-full bg-[#020817] py-3 font-medium text-white transition hover:opacity-90">
                Exchange Money
              </button>
            </div>
          </div>

          {/* Center Card */}
          <div className="group relative overflow-hidden rounded-[32px] bg-gradient-to-b from-[#010c3d] via-[#071c64] to-[#102c87] p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[100px]" />

            <div className="relative z-10">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md">
                <span className="text-white">👥</span>
              </div>

              <h3 className="text-3xl font-semibold text-white">
                30M+ Users Worldwide
              </h3>

              <p className="mt-2 max-w-xs text-blue-100/80">
                Send and receive money seamlessly across the globe.
              </p>

              <div className="mt-10 flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=800"
                  alt=""
                  className="h-[320px] w-full rounded-[26px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group rounded-[32px] border border-gray-200 bg-[#f5f5f5] p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
              <span className="text-xl text-blue-600">⚡</span>
            </div>

            <h3 className="text-3xl font-semibold text-[#111827]">
              Instant Transfers
            </h3>

            <p className="mt-2 text-gray-500">
              Real-time payments with zero delays
            </p>

            <div className="mt-8 rounded-3xl bg-white p-5 shadow-sm">
              <div className="flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-xl text-white">
                  ✓
                </div>
              </div>

              <h4 className="mt-4 text-center text-lg font-semibold">
                Transfer Success
              </h4>

              <p className="mt-1 text-center text-sm text-gray-500">
                Transfer has been successfully done
              </p>

              <div className="my-5 h-px bg-gray-100" />

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Date</span>
                  <span className="font-medium">25 DEC 2026</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Amount</span>
                  <span className="font-medium">$20,000</span>
                </div>
              </div>

              <button className="mt-6 w-full rounded-full bg-[#020817] py-3 font-medium text-white transition hover:opacity-90">
                Download receipt
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}