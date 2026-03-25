import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  description: string;
  trend: string;
  bgColor: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  description,
  trend,
  bgColor,
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        {/* আইকন কন্টেইনার */}
        <div className={`p-3 rounded-xl ${bgColor} dark:bg-opacity-10`}>
          {icon}
        </div>
        {/* ট্রেন্ড ব্যাজ */}
        <span className="text-[10px] font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full uppercase tracking-wider">
          {trend}
        </span>
      </div>

      <div className="space-y-1">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {title}
        </p>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          {value}
        </h2>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StatCard;
