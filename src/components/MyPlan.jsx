"use client";
import { useWorkoutContext } from "@/context/WorkoutContext";
import React, { useState } from "react";
import PlanCard from "./PlanCard";
import EmptyWorkout from "./EmptyWorkoutCard";

const MyPlan = () => {
  const { planList, setPlanList, saveList, setSaveList } = useWorkoutContext();
  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");

  const [doneWorkout, setDoneWorkout] = useState([]);
  // console.log(shortBy);
  //   console.log(activeTab);

  const currentList = activeTab === "plan" ? planList : saveList;

  {
    currentList.map((item) => (
      <PlanCard key={item.id} item={item} activeTab={activeTab} />
    ));
  }

  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "duration") return a.duration - b.duration;
    if (sortBy === "calories") return a.caloriesBurned - b.caloriesBurned;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  const totalExercise = currentList.length;
  const totalMinuts = currentList.reduce((sum, item) => sum + item.duration, 0);

  const totalCaloris = currentList.reduce(
    (sum, item) => sum + item.caloriesBurned,
    0,
  );

  const renderTabContent = () => {
    if (sortedList.length === 0) {
      return (
        <>
          <EmptyWorkout />
        </>
      );
    }
    return (
      <div>
        {sortedList.map((item) => (
          <PlanCard key={item.id} item={item} activeTab={activeTab} />
        ))}
      </div>
    );
  };

  return (
    <div className=" flex flex-col gap-5 mt-5">
      {/* stat */}

      <div className="grid grid-cols-1 sm:grid-cols-3 rounded-3xl border border-[#272a35] bg-[#14151b] p-6 shadow-sm">
        {/* Exercises */}
        <div className="stat border-b border-[#272a35] px-3 py-4 sm:border-b-0 sm:border-r sm:px-6">
          <div className="stat-title text-base text-gray-400">Exercises</div>
          <div className="stat-value text-5xl font-bold text-[#c6ff00]">
            {totalExercise}
          </div>
        </div>

        {/* Minutes */}
        <div className="stat border-b border-[#272a35] px-3 py-4 sm:border-b-0 sm:border-r sm:px-6">
          <div className="stat-title text-base text-gray-400">Minutes</div>
          <div className="stat-value text-5xl font-bold text-white">
            {totalMinuts}
          </div>
        </div>

        {/* Calories */}
        <div className="stat px-3 py-4 sm:px-6">
          <div className="stat-title text-base text-gray-400">Calories</div>
          <div className="stat-value text-5xl font-bold text-white">
            {totalCaloris}
          </div>
        </div>
      </div>

      {/* Tab */}

      {/* name of each tab group should be unique */}
      
<div className="flex flex-col gap-8 bg-[#0f1014] text-white">

  {/* Tabs + Sort By */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

    {/* Tabs */}
    <div className="flex w-fit items-center gap-1 rounded-2xl border border-[#272a35] bg-[#14151b] p-1.5">

      <button
        onClick={() => setActiveTab("plan")}
        className={`rounded-xl px-5 py-3 text-sm font-medium transition-all duration-200 ${
          activeTab === "plan"
            ? "bg-[#20232c] text-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        Today’s Plan
      </button>

      <button
        onClick={() => setActiveTab("saved")}
        className={`rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 ${
          activeTab === "saved"
            ? "bg-[#20232c] text-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        Saved
      </button>
    </div>

    {/* Sort By */}
    <div className="flex items-center gap-4">
      <p className="whitespace-nowrap text-sm text-gray-400">
        Sort By
      </p>

      <select
        onChange={(e) => setSortBy(e.target.value)}
        value={sortBy}
        className="select h-12 min-h-0 w-36 rounded-xl border border-[#272a35] bg-[#14151b] text-white outline-none focus:border-gray-500"
      >
        <option value="duration">Duration</option>
        <option value="calories">Calories</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  </div>

  {/* Tab Content */}
  <div>
    {renderTabContent()}
  </div>

</div>

    </div>
  );
};

export default MyPlan;
