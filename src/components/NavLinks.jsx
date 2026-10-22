
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Workouts", href: "/" },
    { name: "My Plan", href: "/my-plan" },
  ];

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`rounded-full px-8 py-3 font-semibold transition-colors duration-200 ${
                isActive
                  ? "bg-lime-400 text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
