├── components
│     ├── hero
│     ├── layout
│     ├── sections
│     ├── ui
│
├── constants
│
├── hooks
│
├── lib
│
├── services
│
├── store
│
├── styles
│
├── types
│
└── utils


Step 3 — Assets folder
public/

    images/
        hero/
        burgers/
        icons/

    videos/

    fonts/


Step 4 — Constants
constants/

    navigation.ts

    categories.ts

    burgers.ts

Step 5 — Types
types/

    burger.ts

    category.ts

    common.ts

Step 6 — Theme Provider

Since you installed

next-themes

Create

components/providers
ThemeProvider.tsx

We'll use this later.


Step 7 — Install Google Font

I'd recommend

Bebas Neue

for headings.

Inter

for body.

In Next.js

import { Bebas_Neue, Inter } from "next/font/google";

Looks amazing for burger websites.


Step 11 — Use GSAP only where it shines

We'll not animate every element.

We'll use GSAP for

✅ Hero

✅ Scroll reveal

✅ Floating image

✅ Counters

✅ Menu opening

✅ Cart drawer

✅ Section transitions

Everything else

Tailwind transitions.