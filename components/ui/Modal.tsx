"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
  showCloseButton?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className,
  showCloseButton = true,
}) => {
  const [renderModal, setRenderModal] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setRenderModal(true);
    } else if (renderModal) {
      // Animate modal out smoothly with GSAP
      if (backdropRef.current && contentRef.current) {
        gsap.to(backdropRef.current, {
          opacity: 0,
          duration: 0.25,
        });
        gsap.to(contentRef.current, {
          opacity: 0,
          scale: 0.92,
          y: 15,
          duration: 0.25,
          ease: "power2.in",
          onComplete: () => setRenderModal(false),
        });
      } else {
        setRenderModal(false);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (renderModal && backdropRef.current && contentRef.current) {
      // Animate modal in with GSAP scale & fade
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, scale: 0.88, y: 25 },
        { opacity: 1, scale: 1, y: 0, duration: 0.38, ease: "back.out(1.4)" }
      );
    }
  }, [renderModal]);

  // Keyboard Escape trap
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!renderModal) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
    >
      {/* Backdrop with dark overlay and blur */}
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-black/70 backdrop-blur-md opacity-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        ref={contentRef}
        className={cn(
          "relative w-full max-w-lg rounded-3xl bg-surface border border-foreground/10 p-6 sm:p-8 shadow-2xl z-10 text-foreground opacity-0",
          className
        )}
      >
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/70 hover:text-foreground flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {title && (
          <h2
            id="modal-title"
            className="font-heading text-2xl sm:text-3xl tracking-wider text-foreground mb-4 pr-8"
          >
            {title}
          </h2>
        )}

        {children}
      </div>
    </div>,
    document.body
  );
};
