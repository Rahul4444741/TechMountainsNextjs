"use client"
import { ResponsiveContainer, LineChart, Line } from 'recharts';

export default function StatCard({ title, value, icon, trend, color, data }) {
  const Icon = icon;
  return (
    <div className="bg-white p-4 sm:p-5 md:p-6 lg:p-5 xl:p-6 rounded-[2rem] flex flex-col gap-3 md:gap-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-slate-50 rounded-lg text-slate-400">
            <Icon className="w-5 h-5" />
          </div>
          <span className="text-slate-500 font-medium text-sm md:text-base lg:text-base xl:text-lg">{title}</span>
        </div>
        <span className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold">{value}</span>
      </div>

      <div className="flex items-end justify-between h-10 md:h-12 lg:h-14">
        <div className="w-24 h-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line
                type="monotone"
                dataKey="value"
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="text-right">
          <span className='flex gap-[2px] justify-end'>
            <div className="text-green-500 text-sm font-bold">{trend}</div>
            <div className="text-slate-400 text-sm font-[500]">more</div>
          </span>
          <div className="text-slate-400 text-sm font-[500]">from last week</div>
        </div>
      </div>
    </div>
  );
}
