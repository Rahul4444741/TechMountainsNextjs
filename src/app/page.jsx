"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import StatCard from "@/components/dashboard/StatCard";
import TaskDoneGraph from "@/components/dashboard/TaskDoneGraph";
import TaskList from "@/components/dashboard/TaskList";
import RightSidebar from "@/components/dashboard/RightSidebar";
import { FileText, ClipboardCheck, Star } from "lucide-react";

export default function Home() {
  const [tasks, setTasks] = useState([
    {
      title: "Search Inspiration for project",
      link: "www.uistore.com",
      comments: 8,
      progress: 24,
      time: "9.00 am",
      color: "bg-blue-600",
    },
    {
      title: "Search Inspiration for project",
      link: "www.uistore.org",
      comments: 5,
      progress: 60,
      time: "3.00 am",
      color: "bg-blue-600",
    },
  ]);

  const addTask = (title) => {
    if (!title.trim()) return;
    const newTask = {
      title,
      link: "internal.doc",
      comments: 0,
      progress: 0,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      color: "bg-blue-600",
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const sparklineData = [
    { value: 40 },
    { value: 30 },
    { value: 45 },
    { value: 35 },
    { value: 55 },
    { value: 45 },
    { value: 60 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { y: 16, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] [--header-h:72px] w-full">
      <motion.div initial={{ y: -16, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <Header />
      </motion.div>

      <div
        className="w-full
          flex flex-col lg:flex-row xl:flex-row
          gap-6 md:gap-1 lg:gap-2 xl:gap-2
          ps-4 sm:ps-6 lg:ps-4
          pr-4 sm:pr-6 md:pr-0
          py-6
        "
      >
        <motion.main
          className="flex-1 w-full lg:w-[380px] xl:w-[390px]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-4 md:gap-2">
            {[
              { title: "Task Completed", value: "08", icon: Star, trend: "10+", color: "#5051F9" },
              { title: "New Task", value: "10", icon: FileText, trend: "10+", color: "#1EA7FF" },
              { title: "Project Done", value: "10", icon: ClipboardCheck, trend: "08+", color: "#f43f5e" },
            ].map((stat, i) => (
              <motion.div key={i} variants={itemVariants}>
                <StatCard {...stat} data={sparklineData} />
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants}>
            <TaskDoneGraph />
          </motion.div>

          <motion.div variants={itemVariants}>
            <TaskList tasks={tasks} />
          </motion.div>
        </motion.main>
        <motion.aside
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="
    w-full
    mt-4
    lg:mt-0
    lg:w-[340px]
    xl:w-[390px]
    lg:border-red-500
    xl:border-blue-500
    xl:sticky xl:top-0
    xl:h-[calc(100vh-72px)]
    xl:overflow-y-auto
    "
    // md:w-[25%]
        >

          <RightSidebar onAddTask={addTask} />
        </motion.aside>
      </div>
    </div>
  );
}
