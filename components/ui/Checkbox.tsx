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
              className="peer sr-only"
              {...props}
            />
            <div
              className={cn(
                "w-5 h-5 rounded-md border-2 border-foreground/25 bg-surface transition-all duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-primary/40 peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center shadow-xs",
                error && "border-danger"
              )}
            >
              <Check className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200 stroke-[3]" />
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
