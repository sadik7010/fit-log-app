import MyPlan from "@/components/MyPlan";

const MyPlanPage = () => {
  return (
    <div className="min-h-screen bg-black pt-28 text-white">
      <div className="container mx-auto px-4">
        <p className="text-3xl font-bold">
          My Plan
        </p>

        <p>
          Cap of five lifts for today. Finish them, then load more.
        </p>

        <MyPlan />
      </div>
    </div>
  );
};

export default MyPlanPage;
