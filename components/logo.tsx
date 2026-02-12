import React from "react";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { LogoVariantProps } from "@/types";
import { cn } from "@/lib/utils";

const Logo = ({ variant = "light", size = "md" }: LogoVariantProps) => {
  if (variant === "light") {
    return (
      <div>
        <Link href={"/"} className="flex items-center space-x-2">
          <div className="bg-blue-500 rounded-full p-1">
            <span className="text-white font-bold text-xl">
              <GraduationCap className="h-8 w-8" />
            </span>
          </div>
          <span
            className={cn(
              "font-bold text-3xl text-blue-500",
              size === "lg" && "text-5xl",
            )}
          >
            SISN
          </span>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <Link href={"/"} className="flex items-center space-x-2">
          <div className="bg-white rounded-full p-1">
            <span className="text-primary font-bold text-xl">
              <GraduationCap
                className={cn("h-8 w-8", size === "lg" && "h-10 w-10")}
              />
            </span>
          </div>
          className=
          {cn("font-bold text-3xl text-white", size === "lg" && "text-5xl")}
        </Link>
      </div>
    );
  }
};
export default Logo;
