"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, BookOpen, BarChart3, Settings } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "activity", label: "Activity", icon: BarChart3 },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function MobileNav() {
  const [active, setActive] = useState("home");

  return (
    <nav
      aria-label="Mobile navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 bg-surface/90 backdrop-blur-md border-t border-border flex justify-around items-center py-2 z-50"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className="relative flex flex-col items-center gap-1 px-4 py-1.5"
          >
            {isActive && (
              <motion.div
                layoutId="mobile-nav-highlight"
                className="absolute inset-0 bg-accent/15 rounded-lg -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            <Icon size={20} className={isActive ? "text-accent" : "text-textSecondary"} />
            <span className={`text-[10px] ${isActive ? "text-textPrimary" : "text-textSecondary"}`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}