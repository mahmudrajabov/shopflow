import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";

export const BRAND_EMBLEM_URL =
  "https://media.base44.com/images/public/6abbdaa16ea126c140877c6b/39b4fafb0_m-cat-emblem.svg";

export default function Logo({ withName = true, nameClass = "" }) {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 group"
      aria-label="Mahmud Rajabov — Home"
    >
      <Image
        src={BRAND_EMBLEM_URL}
        alt="Mahmud Rajabov emblem"
        fittingType="fit"
        className="w-7 h-7 md:w-8 md:h-8 object-contain transition-transform group-hover:scale-105"
      />
      {withName && (
        <span
          className={`font-bold tracking-tight text-[#0A0A0B] whitespace-nowrap ${nameClass}`}
        >
          Mahmud Rajabov
        </span>
      )}
    </Link>
  );
}