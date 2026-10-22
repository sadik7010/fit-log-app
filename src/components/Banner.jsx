import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="px-4 py-6 md:px-6 lg:px-8 pt-28 pb-28 ">
      <div
        className="
          mx-auto max-w-7xl
          overflow-hidden
          rounded-2xl
          border border-gray-800
          bg-[#15171c]
          px-6 py-10
          md:px-10 md:py-14
          lg:px-14 lg:py-16
          
        "
      >
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          {/* Left Content */}
          <div className="w-full text-center lg:w-3/5 lg:text-left">
            <p className="mb-5 text-sm font-bold tracking-wider text-lime-400">
              WORKOUT LIBRARY
            </p>

            <h1
              className="
                text-xl
                font-black
                uppercase
                leading-[0.95]
                text-white
                sm:text-5xl
                md:text-2xl
                lg:text-2xl
              "
            >
              Train with intent. Log
              <br className="hidden sm:block" />
              every set.
            </h1>

            <p
              className="
                mx-auto mt-6
                max-w-2xl
                text-base leading-7
                text-gray-400
                md:text-lg
                lg:mx-0
              "
            >
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
              into today's plan, and watch the week's work add up.
            </p>

            <Link
              href="/workouts"
              className="
                btn mt-8
                border-none
                bg-lime-400
                px-8
                font-bold
                text-black
                hover:bg-lime-300
              "
            >
              BROWSE WORKOUTS
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex w-full justify-center lg:w-2/5 lg:justify-end">
            <Image
              src="/banner.png"
              alt="Workout exercise"
              width={500}
              height={500}
              priority
              className="
                h-auto
                w-[260px]
                object-contain
                sm:w-[320px]
                md:w-[380px]
                lg:w-[420px]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
