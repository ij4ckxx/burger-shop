"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Mail, CheckCircle2, Send } from "lucide-react";

export interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);

    // Simulate link dispatching
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleModalClose = () => {
    onClose();
    // Reset state after close animation completes
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
    }, 300);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleModalClose} title="Forgot Password">
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center text-center py-6 space-y-4 animate-in fade-in zoom-in-95">
          <div className="w-16 h-16 rounded-full bg-success/15 flex items-center justify-center text-success">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="font-heading text-2xl tracking-wide text-foreground">
            Reset Link Sent!
          </h3>
          <p className="text-sm text-foreground/70 max-w-sm">
            We have sent password recovery instructions to{" "}
            <span className="font-semibold text-foreground">{email}</span>.
            Please check your inbox.
          </p>
          <Button
            type="button"
            variant="primary"
            size="md"
            onClick={handleModalClose}
            className="w-full mt-4"
          >
            Back to Sign In
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 py-2">
          <p className="text-sm text-foreground/70 leading-relaxed">
            Enter your email address and we&apos;ll send you password reset instructions.
          </p>

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
              autoFocus
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={handleModalClose}
              className="w-full sm:w-1/2 order-2 sm:order-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="glow"
              size="md"
              isLoading={isLoading}
              className="w-full sm:w-1/2 order-1 sm:order-2"
              rightIcon={<Send className="w-4 h-4 ml-1" />}
            >
              Send Reset Link
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
