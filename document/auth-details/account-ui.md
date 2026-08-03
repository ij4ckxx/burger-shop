# Build a Premium Authentication Module for Burger Shop

## Objective

Create a modern, premium authentication UI for the Burger Shop e-commerce website using **Next.js 16, React 19, TypeScript, Tailwind CSS v4, GSAP, next-themes, clsx, tailwind-merge, lucide-react, and the existing design tokens**.

Only build the **UI**. Do not implement API calls, authentication logic, validation, or backend integration.

The entire authentication experience should feel like a premium commercial product rather than a typical login page.

---

# Overall Experience

The authentication page should feel alive.

Animations must be smooth, elegant, and premium.

Avoid flashy or excessive animations.

Everything should feel intentional.

Support both **Light Mode** and **Dark Mode** using the existing CSS variables.

Never hardcode colors.

Always use the design tokens.

---

# Layout

The page should be fully responsive.

Desktop:

* Centered authentication card.
* Two-panel layout.
* Left side contains branding, marketing text, decorative gradients, and subtle animated shapes.
* Right side contains the authentication form.

Mobile:

* Single column.
* Branding moves above the form.
* Animations remain smooth.
* No horizontal scrolling.

---

# Authentication Modes

The page contains two modes.

* Login
* Register

Both exist inside the same component.

Do not navigate to another page.

---

# Sliding Transition

When the user clicks

"Create an account"

or

"Already have an account"

the UI should transition smoothly.

Requirements:

* Forms slide horizontally.
* Opacity changes smoothly.
* Scale changes slightly.
* Height transitions naturally.
* No layout jump.
* No flickering.
* Animation duration around 500–700ms.
* Use GSAP for the main transition.
* Preserve accessibility.

The transition should feel similar to premium SaaS products.

---

# Login Form

Fields:

* Email
* Password

Options:

* Remember Me checkbox
* Forgot Password link

Buttons:

Primary

* Login

Secondary

* Continue with Google (UI only)

Footer

"Don't have an account?"

Clicking it smoothly switches to Register.

---

# Register Form

Fields

* Full Name
* Email
* Password
* Confirm Password

Button

* Create Account

Footer

"Already have an account?"

Clicking it slides back to Login.

---

# Forgot Password

Clicking

"Forgot Password?"

should open a premium animated modal.

Do not navigate away.

Requirements

* Background blur
* Dark overlay
* Fade animation
* Scale animation
* Slight upward movement
* Close button
* Escape key support
* Click outside closes modal
* Responsive

Modal contains

Title

Forgot Password

Description

Enter your email address and we'll send you password reset instructions.

Input

Email

Buttons

Send Reset Link

Cancel

Only UI.

No API.

---

# Visual Style

The authentication card should feel premium.

Use

* Rounded corners
* Glass effect where appropriate
* Soft shadows
* Gradient accents
* Subtle glow
* Layered background
* Decorative floating circles and abstract shapes
* Clean spacing
* Large typography
* Smooth hover effects

Avoid excessive borders.

---

# Hero / Branding Panel

The left panel should include

Large Heading

"Fresh Burgers, Delivered Fast"

Small description

Call-to-action text

Decorative burger-inspired gradient shapes

Floating abstract elements

Subtle GSAP floating animation

Do not use actual burger images.

Create attractive placeholders using gradients and layered shapes.

---

# Animations

Use GSAP for

* Initial page entrance
* Authentication panel entrance
* Login/Register sliding transition
* Forgot Password modal
* Decorative floating elements

Use Tailwind transitions for

* Buttons
* Inputs
* Hover effects
* Focus states
* Icons

Animations should feel premium.

Avoid bounce animations.

---

# Components

Follow the existing project structure.

Suggested structure

components/

auth/

AuthContainer.tsx

LoginForm.tsx

RegisterForm.tsx

ForgotPasswordModal.tsx

AuthBranding.tsx

AuthSwitcher.tsx

ui/

Input.tsx

Button.tsx

Card.tsx

Checkbox.tsx

Modal.tsx

Do not place everything inside one file.

Each component should have a single responsibility.

---

# Forms

Use reusable Input components.

Inputs should support

* Label
* Placeholder
* Icon
* Error state (UI only)
* Focus animation
* Dark mode

Password fields should include an eye icon for show/hide (UI state only).

---

# Accessibility

Support

* Keyboard navigation
* Focus rings
* aria-label
* Semantic HTML
* Screen reader friendly structure

---

# Performance

Use

* Server Components where possible
* Client Components only when animations or state are required
* Lazy load the modal if appropriate

Avoid unnecessary re-renders.

---

# Responsiveness

Support

* Desktop
* Laptop
* Tablet
* Mobile

No layout issues.

No overflow.

No fixed widths.

---

# Code Quality

Write production-quality code.

Requirements

* TypeScript
* Reusable components
* Clean architecture
* Small files
* No duplicated code
* Proper props
* Reusable animation logic
* Easy future backend integration

Do not generate placeholder hacks.

Create components that can be directly used in production.

---

# Final Result

The authentication page should look like a premium modern product from 2026 with elegant transitions, polished micro-interactions, smooth GSAP animations, excellent responsiveness, complete dark/light mode support, and a clean, scalable component architecture suitable for future backend integration.
