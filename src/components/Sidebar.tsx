"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, BookOpen, BarChart3, Settings, Menu } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "activity", label: "Activity", icon: BarChart3 },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [active, setActive] = useState("home");

  return (
    <nav
      aria-label="Main navigation"
      className="hidden md:flex md:flex-col md:w-20 lg:w-56 shrink-0 border-r border-border bg-surface/60 backdrop-blur-sm h-screen sticky top-0 py-6 px-3"
    >
      <div className="flex items-center gap-2 px-2 mb-8">
        <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
          <Menu size={18} className="text-accent" />
        </div>
        <span className="hidden lg:block font-semibold text-sm">Dashboard</span>
      </div>

      <ul className="flex flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <li key={item.id} className="relative">
              <button
                onClick={() => setActive(item.id)}
                className="relative w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors z-10"
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-highlight"
                    className="absolute inset-0 bg-accent/15 border border-accent/30 rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <Icon
                  size={18}
                  className={isActive ? "text-accent" : "text-textSecondary"}
                />
                <span
                  className={`hidden lg:block ${
                    isActive ? "text-textPrimary font-medium" : "text-textSecondary"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}