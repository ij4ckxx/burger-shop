"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { User, Mail, Lock, Eye, EyeOff, UserPlus } from "lucide-react";

export interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onSwitchToLogin,
}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    setPasswordError("");
    setIsLoading(true);
    // UI demonstration state simulation
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="w-full flex flex-col justify-center py-2 px-1 sm:px-4">
      {/* Header */}
      <div className="mb-6 text-left">
        <h2 className="font-heading text-3xl sm:text-4xl tracking-wide text-foreground">
          Join Burger Craft
        </h2>
        <p className="text-sm text-foreground/60 mt-1">
          Create an account to start earning flame-grilled rewards
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name Field */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1.5 pl-1">
            Full Name
          </label>
          <Input
            type="text"
            placeholder="John Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            leftIcon={<User className="w-4 h-4 text-foreground/50" />}
            required
            autoComplete="name"
          />
        </div>

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
          <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1.5 pl-1">
            Password
          </label>
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
            autoComplete="new-password"
          />
        </div>

        {/* Confirm Password Field */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1.5 pl-1">
            Confirm Password
          </label>
          <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              if (passwordError) setPasswordError("");
            }}
            error={passwordError}
            leftIcon={<Lock className="w-4 h-4 text-foreground/50" />}
            rightIcon={
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="hover:text-primary transition-colors focus:outline-none p-1"
                aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-4 h-4 text-foreground/60" />
                ) : (
                  <Eye className="w-4 h-4 text-foreground/60" />
                )}
              </button>
            }
            required
            autoComplete="new-password"
          />
        </div>

        {/* Terms Checkbox */}
        <div className="pt-1 pb-1">
          <Checkbox
            label={
              <span className="text-xs text-foreground/70">
                I agree to the{" "}
                <a href="#terms" className="text-primary font-semibold hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#privacy" className="text-primary font-semibold hover:underline">
                  Privacy Policy
                </a>
              </span>
            }
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            required
          />
        </div>

        {/* Primary Submit Button */}
        <Button
          type="submit"
          variant="glow"
          size="lg"
          className="w-full mt-2"
          isLoading={isLoading}
          leftIcon={<UserPlus className="w-5 h-5 mr-1" />}
        >
          Create Account
        </Button>
      </form>

      {/* Switcher Footer */}
      <div className="mt-6 text-center text-sm text-foreground/70">
        Already have an account?{" "}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="font-bold text-primary hover:text-burger-red-600 hover:underline transition-colors focus:outline-none"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};
