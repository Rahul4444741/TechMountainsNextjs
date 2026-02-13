"use client";

import { useState } from "react";
import Image from "next/image";
import {
  LayoutGrid,
  BarChart3,
  Briefcase,
  Network,
  BarChart2,
  BookOpen,
  Send,
  Settings,
} from "lucide-react";
import Logo from "@/assets/icon.png";

export default function Sidebar() {
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const navItems = [
    { label: "Dashboard", icon: LayoutGrid, active: true },
    { label: "Analytics", icon: BarChart3, active: false },
    { label: "Projects", icon: Briefcase, active: false },
    { label: "Network", icon: Network, active: false },
    { label: "Reports", icon: BarChart2, active: false },
    { label: "Resources", icon: BookOpen, active: false },
    { label: "Messages", icon: Send, active: false },
  ];

  const groupItems = [
    { color: "bg-red-400", label: "Website Redesign" },
    { color: "bg-purple-400", label: "Wordpress" },
    { color: "bg-green-500", label: "Shopify Design" },
  ];

  const labelClass =
    "ml-3 whitespace-nowrap overflow-hidden w-0 hidden opacity-0 translate-x-2 " +
    "group-hover:w-auto group-hover:block group-hover:opacity-100 group-hover:translate-x-0 " +
    "transition-all duration-300";

  return (
    <aside
      className={`h-full peer group fixed left-0 top-0 z-30 bg-[#FBFAFF] border-r flex flex-col overflow-hidden py-6 transition-[width] duration-300 ease-in-out w-20 md:w-20 md:hover:w-64 border-none ${mobileExpanded ? "w-64" : "w-20"} md:w-20  overflow-y-scroll lg:overflow-hidden`}
    >
      <div className="mb-5 px-3">
        <button
          type="button"
          onClick={() => setMobileExpanded((v) => !v)}
          className={`h-10 w-10 mx-auto flex items-center justify-center rounded-xl transition-all duration-300 md:pointer-events-none md:group-hover:w-full md:group-hover:mx-0 md:group-hover:justify-start md:group-hover:px-3 ${mobileExpanded ? "w-full mx-0 justify-start px-3" : ""}`}
        >
          <Image src={Logo} alt="Taskhill" className="w-8 h-10 shrink-0" />

          <span
            className={`ml-3 font-semibold text-[#23235F] ${mobileExpanded ? "block opacity-100 translate-x-0" : "hidden opacity-0 translate-x-2"} md:${labelClass}`}
          >
            Taskhill
          </span>
        </button>
      </div>

      <div className="border-t-2 w-full border-[#C2C2C2] mb-6" />

      <nav className="flex flex-col gap-2 px-3">
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              className={`flex items-center rounded-xl transition-all duration-300 h-12 w-12 mx-auto justify-center md:group-hover:w-full md:group-hover:mx-0 md:group-hover:justify-start md:group-hover:px-3 ${mobileExpanded ? "w-full mx-0 justify-start px-3" : ""}
                ${
                  item.active
                    ? "bg-[#5051F9] text-white"
                    : "text-[#5F6388] hover:bg-slate-100"
                }
              `}
            >
              <Icon className="w-5 h-5 shrink-0" />

              <span
                className={`ml-3 whitespace-nowrap transition-all duration-300 ${mobileExpanded ? "block opacity-100 translate-x-0" : "hidden opacity-0 translate-x-2"} md:${labelClass}`}
              >
                {item.label}
              </span>
            </button>
          );
        })}

        <div className="border-t-2 w-full border-[#C2C2C2] mt-4" />

        <div className="flex flex-col gap-2 mt-2">
          {groupItems.map((item, i) => (
            <button
              key={i}
              className={`h-12 w-12 mx-auto flex items-center justify-center rounded-xl hover:bg-slate-100 transition-all duration-300 md:group-hover:w-full md:group-hover:mx-0 md:group-hover:justify-start md:group-hover:px-3 ${mobileExpanded ? "w-full mx-0 justify-start px-3" : ""}`}
            >
              <div className={`w-6 h-6 rounded-full ${item.color}`} />
              <span
                className={`ml-3 whitespace-nowrap text-sm text-slate-700 transition-all duration-300 ${mobileExpanded ? "block opacity-100 translate-x-0" : "hidden opacity-0 translate-x-2"} md:${labelClass}`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* <div className="mt-auto w-full px-3 pb-4">
        <div className="border-t-2 w-full border-[#C2C2C2] mb-4" />

        <button
          className={`flex items-center rounded-xl hover:bg-slate-100 transition-all duration-300 h-12 w-12 mx-auto justify-center md:group-hover:w-full md:group-hover:mx-0 md:group-hover:justify-start md:group-hover:px-3 ${mobileExpanded ? "w-full mx-0 justify-start px-3" : ""}`}
        >
          <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-slate-100 shrink-0">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>

          <div className={`ml-3 text-left transition-all duration-300 ${mobileExpanded ? "block opacity-100 translate-x-0" : "hidden opacity-0 translate-x-2"} md:opacity-0 md:translate-x-2 md:group-hover:opacity-100 md:group-hover:translate-x-0`}>
            <div className="text-sm font-semibold text-slate-800">Felix</div>
            <div className="text-xs text-slate-500">View profile</div>
          </div>
        </button>
      </div> */}
      <div className="mt-auto w-full px-3 pb-4">
        <div className="border-t-2 w-full border-[#C2C2C2] mb-4" />

        <button
          className={`
      w-full
      flex items-center
      rounded-2xl
      bg-white
      transition-all duration-300
      overflow-hidden
      ${mobileExpanded ? "px-3 py-2" : "p-2 justify-center"}
      md:px-3 md:py-2
      md:group-hover:px-3 md:group-hover:py-2
    `}
        >
          <div className="w-10 h-10 rounded-full border-2 bg-slate-200 overflow-hidden shrink-0">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className={`
        ml-3 min-w-0 flex-1 text-left
        transition-all duration-300
        ${mobileExpanded ? "block opacity-100 translate-x-0" : "hidden opacity-0 translate-x-2"}
        md:opacity-0 md:translate-x-2 md:hidden
        md:group-hover:block md:group-hover:opacity-100 md:group-hover:translate-x-0
      `}
          >
            <div className="text-sm font-semibold text-[#23235F] leading-tight truncate">
              Parker Robbins
            </div>
            <div className="text-xs text-slate-400 truncate">
              parker@robbins.com
            </div>
          </div>

          <div
            className={`
        transition-all duration-300
        ${mobileExpanded ? "block" : "hidden"}
        md:hidden md:group-hover:block
      `}
          >
            <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 hover:text-[#5051F9]">
              <Settings className="w-5 h-5" />
            </div>
          </div>
        </button>
      </div>
    </aside>
  );
}