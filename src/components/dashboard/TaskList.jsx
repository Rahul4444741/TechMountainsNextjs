"use client";

import { Play, Link, MessageSquare, Timer } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TaskList({ tasks }) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-slate-800 mb-6">Task</h3>

      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {tasks.map((task, idx) => (
            <motion.div
              key={task.title + idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="
                bg-white rounded-[2rem] shadow-sm hover:shadow-md transition-shadow
                p-4 sm:p-6
              "
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-12 h-12 rounded-3xl bg-[#5051F9] flex items-center justify-center text-white shadow-lg shadow-blue-200 shrink-0">
                    <Play className="w-6 h-6 fill-current" />
                  </div>

                  <div>
                    <div className="text-slate-900 text-xs mb-1 font-bold">
                      Start from
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm whitespace-nowrap">
                      <Timer className="w-4 h-4" />
                      {task.time}
                    </div>
                  </div>
                </div>

                <div className="flex-1 lg:px-10">
                  <div className="font-bold text-slate-800 mb-2">
                    {task.title}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                    <div className="flex items-center gap-2 text-slate-400 text-sm min-w-0">
                      <Link className="w-4 h-4 shrink-0" />
                      <span className="text-[#5051F9] truncate">
                        {task.link}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-400 text-sm whitespace-nowrap">
                      <MessageSquare className="w-4 h-4" />
                      {task.comments} comments
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-8">
                  <div className="w-full sm:w-56">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-slate-800">
                        {task.progress}% complete
                      </span>
                    </div>

                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${task.progress}%` }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className={`h-full ${task.color} rounded-full`}
                      />
                    </div>
                  </div>

                  <button
                    className="
                      w-full sm:w-auto
                      flex items-center justify-center gap-2
                      bg-blue-50 text-[#5051F9]
                      px-6 py-3 rounded-2xl
                      font-bold text-sm
                      hover:bg-blue-100 transition-colors
                    "
                  >
                    <Timer className="w-4 h-4" />
                    Reminder
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
