import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, leftIcon, rightIcon, error, ...props }, ref) => {
    return (
      <div className="w-full relative flex flex-col gap-1">
        <div className="relative flex items-center w-full">
          {leftIcon && (
            <div className="absolute left-4 text-foreground/50 pointer-events-none">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              "w-full rounded-full bg-surface border border-foreground/15 px-5 py-3 text-foreground placeholder:text-foreground/40 transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20",
              leftIcon && "pl-12",
              rightIcon && "pr-12",
              error && "border-danger focus:ring-danger/20",
              className
            )}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-4 text-foreground/50">
              {rightIcon}
            </div>
          )}
        </div>
        {error && <span className="text-xs text-danger pl-4">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
