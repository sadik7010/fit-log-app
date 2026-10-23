"use client";
import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star, Check, X } from "lucide-react";
import { useWorkoutContext } from "@/context/WorkoutContext";
import toast from "react-hot-toast";
import { useState } from "react";

const PlanCard = ({ item, activeTab }) => {
  const { id, name, image, equipment, duration, caloriesBurned, rating } = item;
  const {
    planList,
    setPlanList,
    saveList,
    setSaveList,
    doneWorkout,
    setDoneWorkout,
  } = useWorkoutContext();

  const handleRemove = (id) => {
    if (activeTab === "plan") {
      setPlanList((prev) => prev.filter((item) => item.id !== id));
    } else {
      setSaveList((prev) => prev.filter((item) => item.id !== id));
    }
    toast.success("Workout removed successfully!");
  };

  const handleMarkAsDone = () => {
    if (!doneWorkout.includes(id)) {
      setDoneWorkout((prev) => [...prev, id]);
      toast.success("Workout marked as done!");
    }
  };

  return (
    <div
      className="
      
        flex flex-col gap-5
        rounded-2xl
        border border-gray-800
        bg-[#15171c]
        p-4
        md:flex-row
        md:items-center
        md:justify-between
        md:p-5
      "
    >
      {/* Left Side */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        {/* Image */}
        <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-52">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        {/* Workout Information */}
        <div>
          <h2 className="text-xl font-black uppercase text-white md:text-2xl">
            {name}
          </h2>

          <p className="mt-1 text-sm text-gray-400 md:text-base">{equipment}</p>

          {/* Stats */}
          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-lime-400" />
              <span>{duration} min</span>
            </div>

            <div className="flex items-center gap-2">
              <Flame size={18} className="text-lime-400" />
              <span>{caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-2">
              <Star size={18} className="text-lime-400" />
              <span>{rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Buttons */}
      <div className="flex flex-wrap items-center gap-3 md:flex-nowrap">
        {/* View Details */}
        <Link
          href={`/workouts/${id}`}
          className="
            btn
            rounded-full
            border-gray-700
            bg-transparent
            px-6
            font-medium
            text-white
            hover:border-gray-500
            hover:bg-gray-800
          "
        >
          View Details
        </Link>
        {/* Mark Done */}
        {activeTab === "plan" && (
          <button
            onClick={handleMarkAsDone}
            disabled={doneWorkout.includes(id)}
            className="btn rounded-full border-none bg-lime-400 px-6 font-bold text-black"
          >
            <Check size={18} strokeWidth={3} />

            {doneWorkout.includes(id) ? "Done" : "Mark as Done"}
          </button>
        )}{" "}
        <button
          onClick={() => handleRemove(item.id)}
          className="
            btn btn-circle btn-ghost
            text-gray-500
            hover:bg-red-500/10
            hover:text-red-400
          "
        >
          <X size={21} />
        </button>
        {/* Remove */}
      </div>
    </div>
  );
};

export default PlanCard;
