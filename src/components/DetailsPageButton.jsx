"use client";
import { useWorkoutContext } from "@/context/WorkoutContext";
import { Bookmark, CalendarPlus } from "lucide-react";

import toast from "react-hot-toast";

const DetailsPageButton = ({ workout }) => {
  const { planList, setPlanList, saveList, setSaveList } = useWorkoutContext();
  const isPlanFull = planList.length >= 5;
  const alreadyInPlan = planList.some((item) => item.id === workout.id);
  const alreadyInSave = saveList.some((item) => item.id === workout.id);

  const handleAddToPlan = () => {
    if (alreadyInPlan) {
      toast.error("Already in plan");
      return;
    }
    if (isPlanFull) {
      toast.error("Your plan full");
      return;
    }

    setPlanList((prev) => [...prev, workout]);
    toast.success("Added to planList");
  };

  const handleSaveForLater = () => {
    if (alreadyInSave) {
      toast.error("Already in Save");
      return;
    }
    setSaveList((prev) => [...prev, workout]);
    toast.success("Added to Savelist");
  };
  return (
    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
      {/* Add to Plan */}
      <button
        disabled={alreadyInPlan}
        onClick={handleAddToPlan}
        className="
        disabled:cursor-not-allowed
        disabled:pointer-events-auto
      group btn
      h-12
      rounded-xl
      border border-lime-400
      bg-lime-400
      px-6
      font-bold
      text-black
      shadow-lg shadow-lime-400/10
      transition-all duration-300
      hover:-translate-y-0.5
      hover:border-lime-300
      hover:bg-lime-300
      hover:shadow-lime-400/20
    "
      >
        <CalendarPlus
          size={19}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        Add to today&apos;s plan
      </button>

      {/* Save */}
      <button
        disabled={alreadyInSave}
        onClick={handleSaveForLater}
        className="
        disabled:cursor-not-allowed
        disabled:pointer-events-auto
      group btn
      h-12
      rounded-xl
      border border-gray-700
      bg-[#171a20]
      px-6
      font-bold
      text-gray-200
      transition-all duration-300
      hover:-translate-y-0.5
      hover:border-gray-500
      hover:bg-[#20242b]
      hover:text-white
    "
      >
        <Bookmark
          size={19}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        Save for later
      </button>
    </div>
  );
};

export default DetailsPageButton;
