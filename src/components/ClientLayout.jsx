"use client";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WorkoutProvider from "@/context/WorkoutContext";
import { Toaster } from "react-hot-toast";

const ClientLayout = ({ children }) => {
  return (
    <div>
      <WorkoutProvider>
        <Navbar />
        <main className="min-[90vh]">{children}</main>
        <Footer />
        <Toaster position="bottom-right" />
      </WorkoutProvider>
    </div>
  );
};

export default ClientLayout;
