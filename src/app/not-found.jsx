import Link from "next/link";
import { Dumbbell } from "lucide-react";

const NotFoundPage = () => {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4 pt-48 pb-48">
      <div className="w-full max-w-4xl border border-dashed border-gray-700 rounded-2xl px-6 py-20 text-center bg-[#101318]">
        
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-lime-400/10 border border-lime-400/30">
          <Dumbbell className="h-8 w-8 text-lime-400" />
        </div>

        {/* 404 */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-black text-lime-400">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl sm:text-3xl font-bold uppercase text-white">
          Workout Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 mx-auto max-w-md text-sm sm:text-base text-gray-400">
          Looks like this page skipped its workout. The page you're looking
          for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-lime-400 px-8 py-3 font-semibold text-black transition hover:bg-lime-300"
        >
          Back to Workouts
        </Link>

      </div>
    </main>
  );
};

export default NotFoundPage;