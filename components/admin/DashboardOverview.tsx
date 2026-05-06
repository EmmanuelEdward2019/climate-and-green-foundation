"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, FileText, Mail, Coins, Activity, TrendingUp } from "lucide-react";

export default function DashboardOverview() {
  const [stats, setStats] = useState({
    blog: 0,
    newsletter: 0,
    contacts: 0,
    donations: 0
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getLength = (key: string) => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data).length : 0;
      };
      setStats({
        blog: getLength("admin_blogs"),
        newsletter: getLength("admin_newsletters"),
        contacts: getLength("admin_contacts"),
        donations: getLength("admin_donations")
      });
    }
  }, []);

  const cards = [
    { title: "Total Articles", value: stats.blog, icon: FileText, color: "bg-blue-500" },
    { title: "Subscribers", value: stats.newsletter, icon: Mail, color: "bg-green-500" },
    { title: "Messages", value: stats.contacts, icon: Users, color: "bg-purple-500" },
    { title: "Total Donations", value: stats.donations, icon: Coins, color: "bg-yellow-500" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Overview</h1>
        <p className="text-gray-500 mt-2 text-sm">Welcome back. Here's what's happening with your foundation today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={card.title}
              className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="flex items-center justify-between z-10 relative">
                <div>
                  <p className="text-sm font-medium text-gray-500">{card.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{card.value}</p>
                </div>
                <div className={`p-3 rounded-xl text-white ${card.color}`}>
                  <Icon size={24} />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 opacity-5 z-0">
                <Icon size={100} />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex items-center justify-center min-h-[300px]">
          <div className="text-center text-gray-400">
            <Activity className="mx-auto mb-3 opacity-50" size={32} />
            <p>Activity Chart (Coming soon)</p>
          </div>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex items-center justify-center min-h-[300px]">
          <div className="text-center text-gray-400">
            <TrendingUp className="mx-auto mb-3 opacity-50" size={32} />
            <p>Engagement Metrics (Coming soon)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
