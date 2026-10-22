'use client';

import { useWorkoutContext } from "@/context/WorkoutContext";
import Link from "next/link";

const NavbarButtons = () => {
  const { planList, saveList } = useWorkoutContext();

  return (
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
      
      {/* Plan */}
      <Link
        href="/my-plan"
        className="flex items-center text-sm sm:text-base"
      >
        Plan

        <span className="ml-1 sm:ml-2 inline-flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-lime-400 text-xs sm:text-sm font-bold text-black">
          {planList.length}
        </span>
      </Link>

      {/* Saved */}
      <Link
        href="/my-plan"
        className="flex items-center text-sm sm:text-base"
      >
        Saved

        <span className="ml-1 sm:ml-2 inline-flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-gray-600 text-xs sm:text-sm font-medium text-gray-300">
          {saveList.length}
        </span>
      </Link>

    </div>
  );
};

export default NavbarButtons;
