"use client";

import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AuthBranding } from "@/components/auth/AuthBranding";
import { LoginForm } from "@/components/auth/LoginForm";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { ForgotPasswordModal } from "@/components/auth/ForgotPasswordModal";

export type AuthMode = "login" | "register";

export const AuthContainer: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>("login");
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const loginFormRef = useRef<HTMLDivElement>(null);
  const registerFormRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const switchMode = (newMode: AuthMode) => {
    if (newMode === mode || isAnimating.current) return;
    isAnimating.current = true;

    const isToRegister = newMode === "register";
    const currentRef = isToRegister ? loginFormRef.current : registerFormRef.current;
    const targetRef = isToRegister ? registerFormRef.current : loginFormRef.current;

    if (!currentRef || !targetRef) {
      setMode(newMode);
      isAnimating.current = false;
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setMode(newMode);
        isAnimating.current = false;
      },
    });

    // 1. Fade out & slide current form
    tl.to(currentRef, {
      x: isToRegister ? -60 : 60,
      opacity: 0,
      scale: 0.95,
      duration: 0.28,
      ease: "power2.in",
    });

    // 2. State switch & prepare target form position
    tl.call(() => {
      if (currentRef) currentRef.style.display = "none";
      if (targetRef) {
        targetRef.style.display = "block";
        gsap.set(targetRef, {
          x: isToRegister ? 60 : -60,
          opacity: 0,
          scale: 0.95,
        });
      }
    });

    // 3. Fade in & slide target form into place
    tl.to(targetRef, {
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  // Entrance animation for entire authentication card
  useGSAP(
    () => {
      gsap.from(".auth-card", {
        y: 30,
        opacity: 0,
        scale: 0.98,
        duration: 0.7,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Decorative Ambient Flares */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div
        ref={containerRef}
        className="w-full max-w-6xl mx-auto"
      >
        {/* Main Card Container */}
        <div className="auth-card glass-panel rounded-3xl p-3 sm:p-4 lg:p-6 shadow-2xl border border-foreground/10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Branding Hero Panel */}
          <div className="lg:col-span-6 flex">
            <AuthBranding />
          </div>

          {/* Right Authentication Form Panel */}
          <div className="lg:col-span-6 flex flex-col justify-center p-4 sm:p-6 lg:p-8 bg-surface/80 backdrop-blur-md rounded-3xl border border-foreground/5 relative overflow-hidden">
            <div className="relative w-full">
              {/* Login Form Container */}
              <div
                ref={loginFormRef}
                style={{ display: mode === "login" ? "block" : "none" }}
              >
                <LoginForm
                  onSwitchToRegister={() => switchMode("register")}
                  onOpenForgotPassword={() => setIsForgotPasswordOpen(true)}
                />
              </div>

              {/* Register Form Container */}
              <div
                ref={registerFormRef}
                style={{ display: mode === "register" ? "block" : "none" }}
              >
                <RegisterForm
                  onSwitchToLogin={() => switchMode("login")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      <ForgotPasswordModal
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
      />
    </section>
  );
};
