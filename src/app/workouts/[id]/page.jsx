import WorkoutDetailsCard from "@/components/WorkoutDetailsCard";
import { notFound } from "next/navigation";

const WorkoutDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

//   if (!res.ok) {
//     notFound();
//   }

  const workout = await res.json();

  return (
    <main className="min-h-screen bg-[#0f1115]">
      <WorkoutDetailsCard workout={workout} />
    </main>
  );
};

export default WorkoutDetailsPage;