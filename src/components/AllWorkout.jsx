import React from "react";
import WorkoutCard from "./WorkoutCard";

const AllWorkout = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return (
    <div className="">
      <div className="container mx-auto ">
        <div className="px-4 sm:px-6 lg:px-0">
          <h1 className="text-white font-black text-2xl sm:text-3xl md:text-4xl">
            THE LIBRARY
          </h1>

          <p className="text-gray-400 text-sm sm:text-base mt-1 sm:mt-2 mb-6 sm:mb-8 md:mb-10">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 px-4 sm:px-6 lg:px-0">
          {data.map((allWorkouts) => (
            <WorkoutCard key={allWorkouts.id} allWorkouts={allWorkouts} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllWorkout;
