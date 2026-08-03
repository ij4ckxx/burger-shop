"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

export interface LoginFormProps {
  onSwitchToRegister: () => void;
  onOpenForgotPassword: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSwitchToRegister,
  onOpenForgotPassword,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // UI demonstration state simulated reset
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="w-full flex flex-col justify-center py-2 px-1 sm:px-4">
      {/* Header */}
      <div className="mb-6 text-left">
        <h2 className="font-heading text-3xl sm:text-4xl tracking-wide text-foreground">
          Welcome Back
        </h2>
        <p className="text-sm text-foreground/60 mt-1">
          Sign in to your Burger Craft account to continue
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Field */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1.5 pl-1">
            Email Address
          </label>
          <Input
            type="email"
            placeholder="john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            leftIcon={<Mail className="w-4 h-4 text-foreground/50" />}
            required
            autoComplete="email"
          />
        </div>

        {/* Password Field */}
        <div>
          <div className="flex items-center justify-between mb-1.5 pl-1 pr-1">
            <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70">
              Password
            </label>
            <button
              type="button"
              onClick={onOpenForgotPassword}
              className="text-xs font-semibold text-primary hover:text-burger-red-600 hover:underline transition-colors focus:outline-none"
            >
              Forgot Password?
            </button>
          </div>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            leftIcon={<Lock className="w-4 h-4 text-foreground/50" />}
            rightIcon={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="hover:text-primary transition-colors focus:outline-none p-1"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4 text-foreground/60" />
                ) : (
                  <Eye className="w-4 h-4 text-foreground/60" />
                )}
              </button>
            }
            required
            autoComplete="current-password"
          />
        </div>

        {/* Options Row */}
        <div className="flex items-center justify-between pt-1 pb-2">
          <Checkbox
            label="Remember me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
        </div>

        {/* Primary Submit Button */}
        <Button
          type="submit"
          variant="glow"
          size="lg"
          className="w-full"
          isLoading={isLoading}
          rightIcon={<ArrowRight className="w-5 h-5 ml-1" />}
        >
          Sign In
        </Button>
      </form>

      {/* Divider */}
      <div className="relative my-6 text-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-foreground/10" />
        </div>
        <div className="relative inline-block px-3 bg-surface text-xs font-semibold uppercase tracking-wider text-foreground/40">
          Or continue with
        </div>
      </div>

      {/* Social Google Button */}
      <button
        type="button"
        className="w-full h-12 rounded-full border border-foreground/15 bg-surface text-foreground font-semibold text-sm flex items-center justify-center gap-3 hover:bg-foreground/5 hover:border-foreground/30 transition-all duration-300 shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.25 21.3 7.31 24 12 24z"
          />
          <path
            fill="#FBBC05"
            d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.17 0 9.99 0 12s.46 3.83 1.26 5.42l4.02-3.15z"
          />
          <path
            fill="#EA4335"
            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.7 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
          />
        </svg>
        <span>Continue with Google</span>
      </button>

      {/* Switcher Footer */}
      <div className="mt-8 text-center text-sm text-foreground/70">
        Don&apos;t have an account?{" "}
        <button
          type="button"
          onClick={onSwitchToRegister}
          className="font-bold text-primary hover:text-burger-red-600 hover:underline transition-colors focus:outline-none"
        >
          Create an account
        </button>
      </div>
    </div>
  );
};
