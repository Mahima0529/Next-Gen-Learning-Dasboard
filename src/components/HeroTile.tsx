"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import TiltWrapper from "./TiltWrapper";

export default function HeroTile({
  name,
  streak,
}: {
  name: string;
  streak: number;
}) {
  return (
    <TiltWrapper className="col-span-2 md:col-span-3 lg:col-span-2 row-span-1 p-6 bg-mesh-gradient">
      <div className="flex flex-col h-full justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Welcome back, {name} 👋
          </h1>
          <p className="text-textSecondary text-sm mt-1">
            Let's keep the momentum going today.
          </p>
        </div>
        <div className="flex items-center gap-2 mt-6 w-fit px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20">
          <Flame size={16} className="text-orange-400" />
          <span className="text-sm font-medium text-orange-300">
            {streak}-day streak
          </span>
        </div>
      </div>
    </TiltWrapper>
  );
}