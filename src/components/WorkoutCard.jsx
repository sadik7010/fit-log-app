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
    <Link href={`/workouts/${allWorkouts.id}`}>
    <div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#15171c]">
      
      {/* Image */}
      <div className="relative h-52 w-full sm:h-56">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Muscle Groups */}
        <div className="mb-5 flex flex-wrap gap-2">
          {muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Name */}
        <h2 className="text-xl font-black uppercase text-white">
          {name}
        </h2>

        {/* Equipment */}
        <p className="mt-1 text-sm text-gray-400">
          {equipment}
        </p>

        {/* Divider */}
        <div className="my-5 border-t border-gray-800" />

        {/* Bottom Info */}
        <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400">

          <div className="flex items-center gap-2">
            <Clock size={17} />
            <span>{duration} min</span>
          </div>

          <div className="flex items-center gap-2">
            <Flame size={17} />
            <span>{caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-2">
            <Star size={17} />
            <span>{rating}</span>
          </div>

        </div>
      </div>
    </div>
    </Link>
  );
};

export default WorkoutCard;