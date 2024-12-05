"use client";
import { useState } from "react";
import Link from "next/link";
import { FaList, FaBriefcase } from "react-icons/fa"; // Using react-icons
import { SiSimpleanalytics } from "react-icons/si";
import { GiRibbonMedal } from "react-icons/gi";
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarItems = [
    { href: "/dashboard", label: "Dashboard", icon: <SiSimpleanalytics size={20} /> },
    { href: "/skill-test", label: "Skill Test", icon: <GiRibbonMedal size={20} /> },
    { href: "/internship", label: "Internship", icon: <FaBriefcase size={20} /> },
  ];

  return (
    <div
      className={` w-64 pt-2 h-screen pr-10 hidden md:block`}
    >
      <button className="m-2 text-white" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <nav>
        {sidebarItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <div
              className={`flex items-center space-x-3 py-2 px-6 gap-2 hover:text-blue`}
            >
              {item.icon}
              <span className="font-medium hover:text-blue">{item.label}</span>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
