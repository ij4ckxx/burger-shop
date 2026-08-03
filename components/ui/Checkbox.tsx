import React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, checked, disabled, onChange, id, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    return (
      <div className="flex flex-col gap-1 select-none">
        <label
          htmlFor={inputId}
          className={cn(
            "inline-flex items-center gap-2.5 cursor-pointer text-sm font-medium text-foreground/80 hover:text-foreground transition-colors",
            disabled && "opacity-50 cursor-not-allowed",
            className
          )}
        >
          <div className="relative flex items-center justify-center">
            <input
              type="checkbox"
              id={inputId}
              ref={ref}
              checked={checked}
              disabled={disabled}
              onChange={onChange}
              className="sr-only"
              {...props}
            />
            <div
              className={cn(
                "w-5 h-5 rounded-md border-2 transition-all duration-200 flex items-center justify-center shadow-xs cursor-pointer",
                checked
                  ? "bg-primary border-primary text-white"
                  : "bg-surface border-foreground/30 hover:border-foreground/50",
                error && "border-danger",
                disabled && "opacity-50 cursor-not-allowed"
              )}
            >
              {checked && (
                <Check className="w-3.5 h-3.5 text-white stroke-[3.5]" />
              )}
            </div>
          </div>
          {label && <span>{label}</span>}
        </label>
        {error && <span className="text-xs text-danger pl-7">{error}</span>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
