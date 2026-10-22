import { Dumbbell } from "lucide-react";

const Loading = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 bg-black">
      <div className="flex flex-col items-center text-center">

        {/* Loader */}
        <div className="relative flex items-center justify-center">
          
          {/* Outer spinning ring */}
          <div className="h-20 w-20 rounded-full border-2 border-gray-800 border-t-lime-400 animate-spin"></div>

          {/* Inner icon */}
          <div className="absolute flex h-14 w-14 items-center justify-center rounded-full bg-[#15191f]">
            <Dumbbell className="h-7 w-7 text-lime-400 animate-pulse" />
          </div>

        </div>

        {/* Text */}
        <h2 className="mt-7 text-xl sm:text-2xl font-bold text-white">
          Getting Your Workout Ready
          <span className="text-lime-400">.</span>
        </h2>

        <p className="mt-2 text-sm sm:text-base text-gray-500">
          Loading exercises, just a moment...
        </p>

        {/* Animated dots */}
        <div className="mt-5 flex gap-2">
          <span className="h-2 w-2 rounded-full bg-lime-400 animate-bounce"></span>

          <span className="h-2 w-2 rounded-full bg-lime-400 animate-bounce [animation-delay:150ms]"></span>

          <span className="h-2 w-2 rounded-full bg-lime-400 animate-bounce [animation-delay:300ms]"></span>
        </div>

      </div>
    </div>
  );
};

export default Loading;