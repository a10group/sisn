import React from "react";
import SmallTitle from "@/components/frontend/small-title";
import { SectionHeaderProps } from "@/types";

const SectionHeader = ({
  title,
  icon: Icon,
  heading,
  description,
}: SectionHeaderProps) => {
  return (
    <div className="text-center mb-14">
      {title && (
        <SmallTitle
          title={title}
          icon={Icon ? <Icon className="h-4 w-4 text-yellow-400" /> : null}
        />
      )}

      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
        {heading}
      </h2>

      <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
