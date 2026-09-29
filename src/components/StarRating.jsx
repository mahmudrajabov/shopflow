import React from "react";
import { Star } from "lucide-react";

export default function StarRating({ rating, size = 16 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => {
        const fill = Math.max(0, Math.min(1, rating - (i - 1)));
        return (
          <div key={i} className="relative" style={{ width: size, height: size }}>
            <Star className="absolute inset-0 w-full h-full text-[#0A0A0B]/15" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <Star className="w-full h-full fill-[#2D5BFF] text-[#2D5BFF]" style={{ width: size, height: size }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}