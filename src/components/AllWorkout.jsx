import React from 'react';
import WorkoutCard from './WorkoutCard';



const AllWorkout = async() => {
     const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return (
        
       <div className=''>
         <div className='container mx-auto '>
            <h1 className='text-white font-black text-4xl'>THE LIBRARY </h1>
            <p className='text-white mb-10'>Twelve lifts covering every major muscle group.</p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    data.map(allWorkouts => <WorkoutCard key={ allWorkouts.id} allWorkouts={allWorkouts}/>)
                }
            </div>

            
        </div>
       </div>
    );
};

export default AllWorkout;