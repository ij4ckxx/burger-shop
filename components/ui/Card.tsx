import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glass?: boolean;
  glow?: "none" | "red" | "yellow" | "orange";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { className, hoverEffect = true, glass = false, glow = "none", children, ...props },
    ref
  ) => {
    const glows = {
      none: "",
      red: "hover:shadow-red-500/20 hover:border-primary/40",
      yellow: "hover:shadow-yellow-500/20 hover:border-secondary/40",
      orange: "hover:shadow-orange-500/20 hover:border-accent/40",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-3xl p-6 transition-all duration-300 border border-border/40",
          glass
            ? "glass-panel"
            : "bg-card text-foreground shadow-md hover:shadow-xl",
          hoverEffect &&
            "hover:-translate-y-2 hover:border-primary/30",
          glows[glow],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
