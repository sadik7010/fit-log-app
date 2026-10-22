import { Dumbbell } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black ">
      <div
        className="
        bg-black
          mx-auto flex max-w-7xl
          flex-col items-center justify-between
          gap-5
          px-4 py-8
          sm:px-6
          md:flex-row
          md:py-10
          lg:px-8
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Dumbbell
            size={24}
            strokeWidth={3}
            className="text-lime-400"
          />

          <h2 className="text-xl font-black text-white">
            FITLOG
          </h2>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500 md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
