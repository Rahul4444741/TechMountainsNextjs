"use client"
import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

const monthlyData = [
  { name: 'May', blue: 150, purple: 200 },
  { name: 'Jun', blue: 180, purple: 250 },
  { name: 'Jul', blue: 280, purple: 320 },
  { name: 'Aug', blue: 250, purple: 420 },
  { name: 'Sep', blue: 350, purple: 330 },
  { name: 'Oct', blue: 200, purple: 380 },
  { name: 'Nov', blue: 120, purple: 220 },
  { name: 'Dec', blue: 150, purple: 240 },
  { name: 'Jan', blue: 100, purple: 320 },
  { name: 'Feb', blue: 180, purple: 410 },
  { name: 'Mar', blue: 250, purple: 350 },
  { name: 'Apr', blue: 180, purple: 260 },
];

const weeklyData = [
  { name: 'Week 1', blue: 300, purple: 400 },
  { name: 'Week 2', blue: 400, purple: 300 },
  { name: 'Week 3', blue: 200, purple: 500 },
  { name: 'Week 4', blue: 500, purple: 200 },
];

const dailyData = [
  { name: 'Mon', blue: 50, purple: 80 },
  { name: 'Tue', blue: 80, purple: 60 },
  { name: 'Wed', blue: 40, purple: 90 },
  { name: 'Thu', blue: 90, purple: 50 },
  { name: 'Fri', blue: 100, purple: 120 },
  { name: 'Sat', blue: 70, purple: 100 },
  { name: 'Sun', blue: 60, purple: 80 },
];

export default function TaskDoneGraph() {
  const [view, setView] = useState('Monthly');
  
  const data = view === 'Monthly' ? monthlyData : view === 'Weekly' ? weeklyData : dailyData;

  return (
    <div className="bg-white p-8 rounded-[2rem] shadow-sm mt-8">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-bold text-slate-800">Task Done</h3>
        <div className="flex gap-6 text-sm font-medium text-slate-400">
          {['Daily', 'Weekly', 'Monthly'].map((item) => (
            <button 
              key={item}
              onClick={() => setView(item)}
              className={`transition-all relative py-1 ${view === item ? 'text-blue-500 font-bold' : 'hover:text-slate-600'}`}
            >
              {item}
              {view === item && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"
                />
              )}
            </button>
          ))}
        </div>
      </div>
      
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} key={view}>
            <defs>
              <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPurple" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#94a3b8', fontSize: 12}}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#94a3b8', fontSize: 12}}
              dx={-10}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
            />
            <Area 
              type="monotone" 
              dataKey="purple" 
              stroke="#8b5cf6" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorPurple)" 
              dot={{ r: 4, fill: '#8b5cf6', strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 6 }}
              animationDuration={1000}
            />
            <Area 
              type="monotone" 
              dataKey="blue" 
              stroke="#3b82f6" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorBlue)" 
              dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 6 }}
              animationDuration={1000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
