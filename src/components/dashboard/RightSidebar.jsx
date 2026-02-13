"use client";

import { useRef, useState } from "react";
import {
  Grid,
  Calendar,
  Plus,
  MoreHorizontal,
  Phone,
  X,
  ChevronRight,
  ChevronLeft,
  MoreVerticalIcon,
} from "lucide-react";
import { motion } from "framer-motion";

export default function RightSidebar({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState("");
  const emojiScrollRef = useRef(null);
  const scrollLeft = () => {
    emojiScrollRef.current?.scrollBy({
      left: -150,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    emojiScrollRef.current?.scrollBy({
      left: 150,
      behavior: "smooth",
    });
  };

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      onAddTask(taskTitle);
      setTaskTitle("");
    }
  };
  const messages = [
    {
      name: "Cris Morich",
      text: "Hi Angelina! How are You?",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Cris",
    },
    {
      name: "Charmie",
      text: "Do you need that design?",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charmie",
    },
    {
      name: "Jason Mandala",
      text: "What is the price of hourly...",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jason",
    },
    {
      name: "Charlie Chu",
      text: "Awsome design!!",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie",
    },
  ];
  return (
    <aside
      className="
    w-full
    bg-white
    border border-slate-100
    rounded-[2rem]
    p-5 lg:p-6
    overflow-hidden
  "
    >

      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-bold text-[#232360]">
          Today&apos;s Schedule
        </h3>
        <div className="flex gap-1 bg-slate-50 border-1 rounded-3xl">
          <button className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-blue-600 transition-colors">
            <Grid className="w-5 h-5" />
          </button>
          <button className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-blue-600 transition-colors">
            <Calendar className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-blue-500 font-medium">
            30 minute call with Client
          </span>
          <button className="text-blue-500 font-bold text-xs hover:underline">
            + Invite
          </button>
        </div>
        <h4 className="text-lg font-bold text-[#232360] mb-6">
          Project Discovery Call
        </h4>

        <div
          className="
    bg-[#5051F9]
    rounded-2xl md:rounded-3xl
    p-3 sm:p-3.5 md:p-2 lg:p-2
    flex items-center justify-between flex-nowrap
    text-white
    shadow-lg shadow-blue-200
    gap-3 sm:gap-4 md:gap-5 lg:gap-1 xl:gap-5
    md:h-16 lg:h-20
    w-full
    min-w-0
  "
        >
          <div className="flex -space-x-2 sm:-space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="
          w-8 h-8
          sm:w-9 sm:h-9
          md:w-10 md:h-10
          lg:w-11 lg:h-11
          rounded-full
          border-2 sm:border-4 border-white
          overflow-hidden
          bg-slate-200
          shrink-0
        "
              >
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20}`}
                  alt="user"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            <div
              className="
        w-8 h-8
        sm:w-9 sm:h-9
        md:w-10 md:h-10
        lg:w-11 lg:h-11
        rounded-full
        border-2 sm:border-4 border-white
        bg-white/20
        flex items-center justify-center
        text-xs sm:text-sm font-bold
        shrink-0
      "
            >
              R
            </div>
          </div>

          <div className="font-semibold text-xs sm:text-sm md:text-sm lg:text-base flex-shrink-0">
            28:35
          </div>

          <div className="flex gap-1 sm:gap-2 items-center flex-shrink-0">
            <button className="p-1 sm:p-1.5 md:p-2 hover:bg-white/20 rounded-full transition-colors">
              <Phone className="w-4 h-4 sm:w-4 md:w-4 lg:w-5" />
            </button> 

            <button className="p-1 sm:p-1.5 md:p-2 hover:bg-white/20 rounded-full transition-colors">
              <MoreVerticalIcon className="w-4 h-4 sm:w-4 md:w-4 lg:w-5" />
            </button>
          </div>
        </div>

      </div>

      <div className="mb-10">
        <h3 className="text-xl font-bold text-slate-800 mb-6">Messages</h3>
        <div className="space-y-6">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 cursor-pointer hover:bg-slate-50 p-2 rounded-2xl transition-colors -mx-2"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 border border-slate-200">
                <img src={msg.img} alt={msg.name} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-slate-800 text-sm">
                  {msg.name}
                </div>
                <div className="text-slate-400 text-xs truncate">
                  {msg.text}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-slate-800">New Task</h3>
          <MoreHorizontal className="w-5 h-5 text-slate-400 cursor-pointer" />
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-400 block mb-2">
              Task Title
            </label>
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
              placeholder="Create new task..."
              className="w-full bg-slate-200 border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-blue-500 outline-none transition-all"
            />
          </div>

          <div className="flex items-center gap-2 py-2">
            <button
              onClick={scrollLeft}
              className="
      w-8 h-8 flex items-center justify-center
      rounded-full hover:bg-slate-100
      transition
      shrink-0
    "
            >
              <ChevronLeft className="w-5 h-5 text-[#5051F9]" />
            </button>

            <div
              ref={emojiScrollRef}
              className="
      flex items-center gap-2
      overflow-x-auto
      no-scrollbar
      scroll-smooth
      flex-1
    "
            >
              {["🎉", "😍", "😐", "🔥", "😘", "😴", "😎", "🤬", "😑"].map(
                (emoji) => (
                  <button
                    key={emoji}
                    className="
          text-xl
          hover:scale-125
          transition-transform
          flex-shrink-0
        "
                  >
                    {emoji}
                  </button>
                ),
              )}
            </div>

            <button
              onClick={scrollRight}
              className="
      w-8 h-8 flex items-center justify-center
      rounded-full hover:bg-slate-100
      transition
      shrink-0
    "
            >
              <ChevronRight className="w-5 h-5 text-[#5051F9]" />
            </button>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-400 block mb-2">
              Add Collaborators
            </label>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-2 rounded-2xl text-xs font-bold">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Angela"
                  className="w-5 h-5 rounded-full"
                />
                Angela <X className="w-3 h-3 cursor-pointer" />
              </div>
              <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-colors">
                <Plus className="w-4 h-4" />
              </button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleAddTask}
                className="w-10 h-10 rounded-3xl bg-[#5051F9] flex items-center justify-center text-white ml-auto shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}