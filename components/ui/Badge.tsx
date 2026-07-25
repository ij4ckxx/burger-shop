import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "spicy"
    | "veg"
    | "discount"
    | "success"
    | "outline";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}) => {
  const variants = {
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-secondary/20 text-burger-yellow-600 dark:text-secondary border-secondary/30",
    accent: "bg-accent/15 text-accent border-accent/30",
    spicy: "bg-red-500/15 text-red-600 dark:text-red-400 border-red-500/30",
    veg: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    discount: "bg-gradient-to-r from-red-600 to-amber-500 text-white font-bold shadow-sm border-transparent",
    success: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    outline: "bg-transparent text-foreground border-foreground/20",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-xs font-semibold rounded-md gap-1",
    md: "px-3.5 py-1 text-xs font-bold rounded-full gap-1.5",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center tracking-wide border transition-colors",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
