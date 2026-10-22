'use client'


import { createContext, useContext, useState } from "react"

export const WorkoutContext = createContext({})

export default function WorkoutProvider({ children }) {
    const [planList,setPlanList]= useState([])
    const [saveList,setSaveList]= useState([])
    const [doneWorkout, setDoneWorkout] = useState([]);
    const value={planList,setPlanList,saveList,setSaveList,doneWorkout, setDoneWorkout}

 return <WorkoutContext.Provider value={value}>{children}</WorkoutContext.Provider>
}


export function useWorkoutContext(){
    const context = useContext(WorkoutContext)
    if(!context){
        throw new Error('Maybe you have not wrapped the app into the provider');
    }
    return context;
}