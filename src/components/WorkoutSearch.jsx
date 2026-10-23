"use client";

import { useState } from "react";
import WorkoutCard from "./WorkoutCard";

const WorkoutSearch = ({ data }) => {
    const [searchText, setSearchText] = useState("");

    const filteredWorkouts = data.filter((workout) => {
        const search = searchText.toLowerCase();

        return (
            workout.name.toLowerCase().includes(search) ||
            workout.muscleGroups
                .join(" ")
                .toLowerCase()
                .includes(search)
        );
    });

    return (
        <div>
            <input
                type="text"
                placeholder="Search workout "
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="mb-8 w-full rounded-xl border border-gray-800 bg-[#15171c] px-5 py-4 text-white outline-none focus:border-lime-400"
            />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filteredWorkouts.map((workout) => (
                    <WorkoutCard
                        key={workout.id}
                        allWorkouts={workout}
                    />
                ))}
            </div>
        </div>
    );
};

export default WorkoutSearch;