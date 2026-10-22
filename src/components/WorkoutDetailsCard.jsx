import Image from "next/image";
import { CalendarPlus, Bookmark } from "lucide-react";
import DetailsPageButton from "./DetailsPageButton";

const WorkoutDetailsCard = ({ workout }) => {
  const {
    name,
    image,
    muscleGroups,
    equipment,
    difficulty,
    sets,
    reps,
    duration,
    caloriesBurned,
    rating,
    description,
    instructions,
  } = workout;

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:py-12 ">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 pt-20 pb-20">
        {/* ================= IMAGE ================= */}
        <div className="relative min-h-[400px] overflow-hidden rounded-2xl sm:min-h-[500px] lg:min-h-[700px]">
          <Image
            src={image}
            alt={name}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* ================= DETAILS ================= */}
        <div>
          {/* Title */}
          <h1 className="text-3xl font-black uppercase text-white sm:text-4xl">
            {name}
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
            {description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-5 flex flex-wrap gap-2">
            {muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-lime-400 px-4 py-1 text-xs font-bold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* ================= INFORMATION BOX ================= */}

          <div className="mt-7 overflow-hidden rounded-2xl border border-gray-800 bg-[#15191f]">
            <InfoRow label="Equipment" value={equipment} />

            <InfoRow label="Difficulty" value={difficulty} />

            <InfoRow label="Sets" value={sets} />

            <InfoRow label="Reps" value={reps} />

            <InfoRow label="Duration" value={`${duration} min`} />

            <InfoRow label="Calories" value={`${caloriesBurned} kcal`} />

            <InfoRow label="Rating" value={rating} last />
          </div>

          {/* ================= INSTRUCTIONS ================= */}

          <div className="mt-9">
            <h2 className="text-lg font-black uppercase text-white  decoration-sky-400 decoration-2 underline-offset-4">
              Instructions
            </h2>

            <ol className="mt-5 space-y-4">
              {instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm leading-6 text-gray-300 sm:text-base"
                >
                  <span className="text-gray-500">{index + 1}.</span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* ================= BUTTONS ================= */}

          <DetailsPageButton workout={workout}/>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetailsCard;

// ==========================================
// Reusable Information Row
// ==========================================

const InfoRow = ({ label, value, last }) => {
  return (
    <div
      className={`flex items-center justify-between px-5 py-4 ${
        !last ? "border-b border-gray-800" : ""
      }`}
    >
      <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
        {label}
      </span>

      <span className="text-sm text-gray-200">{value}</span>
    </div>
  );
};
