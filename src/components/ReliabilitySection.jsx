export default function ReliabilitySection() {
  const avatars = [
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
  ];
  
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            <h2 className="
max-w-xl
text-[2rem]
sm:text-5xl
lg:text-6xl
font-medium
leading-[0.95]
tracking-tight
text-[#0f172a]
">
              <span className="text-gray-400">
                Reliability you can
              </span>
              <br />
              Count on, every
              <br />
              second.
            </h2>

            {/* Users Card */}
            <div className="mt-10 rounded-[28px] border  border-gray-200 bg-white p-2 md:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition duration-500 hover:-translate-y-1">
              <div className="
flex
flex-col
sm:flex-row
items-start
sm:items-center
justify-between
gap-5
">
                <div className="flex">
                  {avatars.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt=""
                      className="
-first:ml-0
-ml-3
h-10
w-10
sm:h-12
sm:w-12
md:h-14
md:w-14
rounded-full
border-4
border-white
object-cover
"  />
                  ))}
                </div>

                <div>
                  <h3 className="
text-4xl
sm:text-5xl
md:text-6xl
font-semibold
leading-none
">
                    2M
                  </h3>
                  <p className="mt-1 mr-10 md:mr-0 md:text-lg  text-gray-500">
                    Active Users
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-8 max-w-md text-lg leading-relaxed text-gray-500">
              Our features sets us apart. For every transaction,
              there is a reassurance.
            </p>

            {/* Bottom Stats */}
            <div className="
mt-8
grid
grid-cols-1
sm:grid-cols-2
gap-5
">
              <div className="rounded-[28px] border border-gray-200 bg-white p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition duration-500 hover:-translate-y-1">
                <h3 className=" text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
                  99.99
                  <span className="">%</span>
                </h3>

                <p className="mt-4 text-lg text-gray-500">
                  Total Product Uptime
                </p>
              </div>

              <div className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition duration-500 hover:-translate-y-1">
                <h3 className=" text-3xl md:text-6xl font-semibold tracking-tight">
                  $0
                </h3>

                <p className="mt-4 text-lg text-gray-500">
                  Transaction fees
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col">
            <p className="
mb-6
max-w-sm
text-lg
sm:text-xl
lg:text-2xl
leading-tight
text-gray-500
">
              We certainly have perform beyond your
              expectations
            </p>

            <div className="
group
relative
overflow-hidden
rounded-[32px]
bg-gradient-to-b
from-[#1650e8]
to-[#3f6fe0]
p-6
sm:p-8
min-h-[420px]
lg:min-h-[620px]
text-white
transition
duration-500
hover:-translate-y-1
hover:shadow-2xl
">
              {/* Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]" />

              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  width="420"
                  height="420"
                  viewBox="0 0 420 420"
                  className="opacity-10"
                >
                  <path
                    d="M60 250
                    C100 250 100 170 140 170
                    C180 170 180 290 220 290
                    C260 290 260 170 300 170
                    C340 170 340 250 380 250"
                    fill="none"
                    stroke="white"
                    strokeWidth="28"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="relative z-10 flex h-full flex-col justify-between">
                <p className="max-w-sm text-2xl sm:text-3xl font-medium leading-tight">
                  We have active users with incredible
                  uptime across the world's continent
                </p>

                <div>
                  <h3 className="text-5xl
sm:text-6xl
lg:text-7xl font-semibold leading-none">
                    150+
                  </h3>

                  <p className="text-4xl
sm:text-5xl
lg:text-6xl font-medium">
                    Countries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}