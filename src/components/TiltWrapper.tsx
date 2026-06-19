"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function TiltWrapper({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group relative rounded-2xl border border-border bg-surface overflow-hidden ${className}`}
    >
      {/* hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-accent/10 via-transparent to-accentGlow/10" />
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-accent/30 transition-all duration-300" />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}