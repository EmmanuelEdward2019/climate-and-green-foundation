"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, FileText, Mail, Users, HeartHandshake, 
  Settings, PenTool, Menu, X, Coins, Megaphone
} from "lucide-react";
import { motion } from "framer-motion";

const sidebarLinks = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Blog Posts", href: "/admin?tab=blog", icon: FileText },
  { name: "Newsletter", href: "/admin?tab=newsletter", icon: Mail },
  { name: "Contacts", href: "/admin?tab=contacts", icon: Users },
  { name: "Partners", href: "/admin?tab=partners", icon: HeartHandshake },
  { name: "Volunteers", href: "/admin?tab=volunteers", icon: HeartHandshake },
  { name: "Donations", href: "/admin?tab=donations", icon: Coins },
  { name: "SEO Settings", href: "/admin?tab=seo", icon: Megaphone },
  { name: "Frontend Editor", href: "/admin?tab=editor", icon: PenTool },
  { name: "System Settings", href: "/admin?tab=settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 text-gray-900 font-sans selection:bg-green-500 selection:text-white">
      {/* Mobile sidebar toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-white rounded-lg shadow-md text-gray-700 hover:text-green-600 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen || typeof window !== 'undefined' && window.innerWidth >= 768 ? 0 : -300 }}
        className="w-64 flex-shrink-0 bg-white border-r border-gray-200 overflow-y-auto z-40 fixed md:relative h-full shadow-xl md:shadow-none"
      >
        <div className="p-6">
          <div className="flex items-center gap-3 text-green-700 font-bold text-2xl tracking-tight">
            <LayoutDashboard className="text-green-600" />
            Admin OS
          </div>
          <p className="text-xs text-gray-500 mt-1 uppercase font-semibold tracking-wider">Climate & Greenworld</p>
        </div>

        <nav className="mt-6 px-4 space-y-1">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            // Since we are using query params for tabs in /admin, we'll handle active state differently in page.tsx.
            // For now, let's just render the links.
            return (
              <Link key={link.name} href={link.href}>
                <div className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer text-gray-600 hover:bg-green-50 hover:text-green-700 group`}>
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-sm">{link.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </motion.aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto bg-gray-50/50">
        {children}
      </main>
    </div>
  );
}
