import MyPlan from "@/components/MyPlan";

const MyPlanPage = () => {
  return (
    <div className="min-h-screen bg-black pt-20 sm:pt-24 md:pt-28 text-white">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Heading */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase">
            My Plan
          </h1>

          <p className="mt-2 text-sm sm:text-base text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Plan Content */}
        <MyPlan />

      </div>
    </div>
  );
};

export default MyPlanPage;
