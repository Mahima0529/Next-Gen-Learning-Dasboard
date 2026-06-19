"use client";

import TiltWrapper from "./TiltWrapper";

const mockActivity = [3, 5, 2, 8, 6, 9, 4, 7, 5, 10, 6, 8];

export default function ActivityTile() {
  const max = Math.max(...mockActivity);

  return (
    <TiltWrapper className="col-span-2 row-span-1 p-5">
      <div className="flex flex-col h-full">
        <h3 className="text-sm font-medium text-textPrimary mb-4">
          Weekly Activity
        </h3>
        <div className="flex items-end gap-2 flex-1">
          {mockActivity.map((val, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-accent/40 to-accentGlow/70"
              style={{ height: `${(val / max) * 100}%` }}
            />
          ))}
        </div>
      </div>
    </TiltWrapper>
  );
}