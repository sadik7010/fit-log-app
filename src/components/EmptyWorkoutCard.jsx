import Link from "next/link";

const EmptyWorkout = () => {
  return (
    <div className="min-h-[460px] bg-[#101318] border border-dashed border-gray-700 rounded-2xl flex flex-col items-center justify-center text-center px-5">
      
      <h2 className="text-3xl font-bold text-white uppercase">
        Nothing Here Yet
      </h2>

      <p className="text-gray-400 text-lg mt-2">
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href="/"
        className="mt-10 bg-lime-400 hover:bg-lime-300 text-black font-semibold px-10 py-4 rounded-full shadow-lg transition"
      >
        Go to workouts
      </Link>

    </div>
  );
};

export default EmptyWorkout;