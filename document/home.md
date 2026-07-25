# 🍔 Burger Shop - AI Development Guidelines

## Project Overview

Build a **modern, premium, animated Burger Shop e-commerce website** using the latest web technologies.

This is **not** a basic food-ordering website.

The goal is to create a website that feels premium, interactive, smooth, and visually impressive while maintaining clean architecture and production-quality code.

Every component should be reusable, scalable, accessible, and responsive.

---

# Tech Stack

## Frontend

* Next.js 16 (App Router)
* React 19
* TypeScript
* Tailwind CSS v4
* GSAP
* @gsap/react
* Zustand
* next-themes
* clsx
* tailwind-merge
* lucide-react

Future Packages

* React Query
* React Hook Form
* Zod
* Sonner
* Framer Motion (only when appropriate)

---

# Backend (Future)

Backend will be developed in a separate repository.

Technology

* Node.js
* Express
* PostgreSQL
* Prisma ORM
* JWT Authentication

For now, build everything using mock data and reusable APIs.

---

# Project Goals

The website should feel like a premium burger brand.

Inspired by

* Five Guys
* Burger King
* Wendy's
* Modern Apple-style interactions
* Premium food photography layouts
* Smooth micro-interactions

Avoid making it look like a generic food delivery application.

---

# Design Principles

The UI should be

* Modern
* Premium
* Minimal
* Clean
* Smooth
* Bold
* High Contrast
* Interactive

Every page should have breathing space.

Avoid clutter.

---

# Theme Support

The application **must fully support both Light Mode and Dark Mode**.

Requirements

* Every component must work correctly in both themes.
* Never hardcode colors.
* Always use design tokens from globals.css.
* Use CSS variables exposed through Tailwind theme tokens.
* Ensure proper color contrast in both modes.
* Theme switching should feel seamless.

Always test new UI in both light and dark mode.

---

# Color System

Always use design tokens.

Examples

* bg-background
* bg-surface
* bg-card
* text-foreground
* bg-primary
* bg-secondary
* bg-accent
* text-burger-red-500
* bg-burger-yellow-500

Never use raw hex colors inside components unless absolutely necessary.

---

# Component Rules

Every component should be

* Reusable
* Typed
* Small
* Easy to maintain
* Self-contained

Avoid duplicate code.

Use composition whenever possible.

---

# Styling Rules

Always use

* Tailwind CSS v4
* cn() utility
* CSS Variables
* Responsive utilities

Never use inline styles unless absolutely required.

Never hardcode spacing repeatedly.

Maintain consistent spacing throughout the application.

---

# Folder Structure

Follow this structure.

src/

app/

components/

hero/

layout/

sections/

ui/

hooks/

store/

constants/

types/

lib/

services/

styles/

---

# UI Components

Create reusable components for

* Button
* Card
* Badge
* Input
* Modal
* Drawer
* Section Title
* Product Card
* Rating
* Price
* Loader
* Empty State

Do not duplicate UI code.

---

# Responsive Design

Desktop first.

Then optimize for

* Laptop
* Tablet
* Mobile

Every component must be responsive.

Never break layouts on smaller screens.

---

# Animations

Animations should feel premium.

Never over animate.

Use GSAP only when it provides clear value.

GSAP should be used for

* Hero entrance
* Scroll reveal
* Floating objects
* Parallax
* Cart drawer
* Navigation transitions
* Counters
* Timeline animations

Use Tailwind transitions for

* Hover
* Active states
* Focus
* Buttons
* Cards
* Icons
* Small interactions

Animations should always feel smooth.

Never use unnecessary bouncing effects.

---

# Performance

Always prioritize performance.

Use

* Server Components whenever possible
* Client Components only when needed
* Lazy loading
* Dynamic imports
* Optimized rendering
* Image optimization
* Memoization where appropriate

Avoid unnecessary re-renders.

---

# Accessibility

Every component should support

* Keyboard navigation
* Focus states
* Proper semantic HTML
* aria-label where needed

Accessibility is required.

---

# Naming Convention

Use PascalCase for components.

Examples

Hero.tsx

Navbar.tsx

PopularBurger.tsx

Button.tsx

Card.tsx

Use camelCase for variables.

---

# State Management

Use Zustand only for global state.

Examples

* Cart
* User
* Theme Preferences
* Wishlist

Avoid putting everything into Zustand.

Use local React state whenever appropriate.

---

# Icons

Use lucide-react only.

Maintain consistent icon sizes throughout the project.

---

# Code Quality

Write production-quality code.

Every file should

* Be typed
* Be reusable
* Be readable
* Follow best practices

Avoid unnecessary complexity.

Prefer simple and maintainable solutions.

---

# Layout Style

Each page should generally follow

Navbar

↓

Hero

↓

Categories

↓

Featured Burgers

↓

Special Offers

↓

Why Choose Us

↓

Testimonials

↓

Newsletter

↓

Footer

---

# Hero Section

The hero should immediately attract attention.

Requirements

* Large heading
* Premium typography
* Strong CTA
* Animated visual
* Gradient background
* GSAP entrance animation
* Mouse movement effects
* Smooth floating animation

Even without product images, use visually appealing placeholders and gradients.

---

# Visual Style

Use

* Soft shadows
* Rounded corners
* Premium gradients
* Layered cards
* Glass effects (only when appropriate)
* Subtle glows
* High-quality spacing

Avoid excessive borders.

---

# Buttons

Buttons should have

* Hover animation
* Focus state
* Loading state
* Disabled state
* Icon support
* Variants
* Sizes

All buttons must reuse a single Button component.

---

# Cards

Cards should

* Lift slightly on hover
* Have subtle shadows
* Maintain consistent padding
* Support dark mode

---

# Images

When images are unavailable

Use

* Gradient placeholders
* Abstract illustrations
* Layered shapes
* Branded backgrounds

Never leave empty areas.

---

# AI Instructions

Whenever generating code

* Prefer reusable components.
* Prefer clean architecture.
* Prefer scalability over shortcuts.
* Avoid duplicate code.
* Explain important decisions briefly.
* Keep components modular.
* Maintain consistency with the existing design system.

Never generate quick demo code if a reusable solution is more appropriate.

Every new feature should integrate naturally with the existing architecture.

The final result should look like a premium commercial product rather than a tutorial project.
