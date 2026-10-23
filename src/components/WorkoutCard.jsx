import Image from "next/image";
import { Clock, Flame, Star } from "lucide-react";
import Link from "next/link";

const WorkoutCard = ({ allWorkouts }) => {
  const {
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = allWorkouts;

  return (
    <Link
      href={`/workouts/${allWorkouts.id}`}
      className="block h-full"
    >
      <div className="h-full overflow-hidden rounded-xl sm:rounded-2xl border border-gray-800 bg-[#15171c]">
        
        {/* Image */}
        <div className="relative h-44 w-full sm:h-52 md:h-56 lg:h-52 xl:h-56">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">

          {/* Muscle Groups */}
          <div className="mb-3 sm:mb-5 flex flex-wrap gap-1.5 sm:gap-2">
            {muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-lime-400 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Name */}
          <h2 className="text-lg sm:text-xl font-black uppercase text-white">
            {name}
          </h2>

          {/* Equipment */}
          <p className="mt-1 text-xs sm:text-sm text-gray-400">
            {equipment}
          </p>

          {/* Divider */}
          <div className="my-4 sm:my-5 border-t border-gray-800" />

          {/* Bottom Info */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-5 text-xs sm:text-sm text-gray-400">

            <div className="flex items-center gap-1.5 sm:gap-2">
              <Clock className="h-4 w-4 sm:h-[17px] sm:w-[17px]" />
              <span>{duration} min</span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <Flame className="h-4 w-4 sm:h-[17px] sm:w-[17px]" />
              <span>{caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <Star className="h-4 w-4 sm:h-[17px] sm:w-[17px]" />
              <span>{rating}</span>
            </div>

          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;