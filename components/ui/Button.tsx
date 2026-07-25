import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "glow";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-heading tracking-wider transition-all duration-300 rounded-full select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100";

    const variants = {
      primary:
        "bg-primary text-white hover:bg-burger-red-600 shadow-md hover:shadow-lg hover:shadow-primary/30",
      secondary:
        "bg-secondary text-burger-gray-900 hover:bg-burger-yellow-400 shadow-md hover:shadow-secondary/40 font-bold",
      glow: "bg-gradient-to-r from-primary via-accent to-secondary text-white shadow-lg hover:shadow-primary/50 hover:scale-[1.02] border border-white/20",
      outline:
        "border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent",
      ghost:
        "text-foreground hover:bg-surface hover:text-primary bg-transparent",
      danger: "bg-danger text-white hover:bg-red-700 shadow-md",
    };

    const sizes = {
      sm: "text-sm px-4 py-1.5 h-9 gap-1.5",
      md: "text-base px-6 py-2.5 h-11 gap-2",
      lg: "text-lg px-8 py-3.5 h-14 gap-2.5",
      icon: "h-11 w-11 p-0 rounded-full",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin text-current" />
        ) : (
          leftIcon
        )}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
