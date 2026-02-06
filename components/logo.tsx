import React from "react";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { LogoVariantProps } from "@/types";

const Logo = ({ variant = "light" }: LogoVariantProps) => {
  if (variant === "light") {
    return (
      <div>
        <Link href={"/"} className="flex items-center space-x-2">
          <div className="bg-blue-500 rounded-full p-1">
            <span className="text-white font-bold text-xl">
              <GraduationCap />
            </span>
          </div>
          <span className="font-bold text-xl text-blue-500">SISN</span>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <Link href={"/"} className="flex items-center space-x-2">
          <div className="bg-white rounded-full p-1">
            <span className="text-primary font-bold text-xl">
              <GraduationCap />
            </span>
          </div>
          <span className="font-bold text-xl text-white">SISN</span>
        </Link>
      </div>
    );
  }
};
export default Logo;
