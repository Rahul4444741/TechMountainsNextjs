"use client";

import { useState } from "react";
import { Search, Bell, ChevronDown, X } from "lucide-react";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-20 h-16 flex items-center justify-between px-4 md:px-8 bg-white border-b border-slate-100">
      <div className="flex items-center gap-3">
        <button onClick={() => setSearchOpen(true)} className="md:hidden">
          <Search className="w-5 h-5 text-slate-500" />
        </button>
      </div>

      <div className="md:flex  justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full bg-slate-100/60 rounded-lg py-2.5 pl-4 pr-10 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute right-3 top-2.5 w-5 h-5 text-slate-400" />
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <div className="relative cursor-pointer">
          <Bell className="w-6 h-6 text-slate-400" />
          <span className="absolute -top-1 -right-1 bg-[#5051F9] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
            2
          </span>
        </div>

        <div className="hidden md:flex items-center gap-2 cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden border">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka"
              alt="user"
              className="w-full h-full object-cover"
            />
          </div>
          <ChevronDown className="w-6 h-6 text-[#5051F9]" />
        </div>
      </div>

      {searchOpen && (
        <div className="fixed inset-0 bg-white z-50 flex items-start p-4">
          <div className="relative w-full">
            <input
              autoFocus
              placeholder="Search..."
              className="w-full bg-slate-100 rounded-lg py-3 pl-4 pr-10 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute right-3 top-3"
            >
              <X className="w-5 h-5 text-slate-500" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
