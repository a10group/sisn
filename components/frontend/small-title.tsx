import React from "react";
import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { SmallTitleProps } from "@/types";

const SmallTitle = ({ title, icon }: SmallTitleProps) => {
  return (
    <Badge
      variant="secondary"
      className="px-4 py-2 font-light text-sm mb-8 text-muted-foreground"
    >
      {icon ?? <Sparkles className="h-4 w-4 text-accent" />}
      {title}
    </Badge>
  );
};

export default SmallTitle;
