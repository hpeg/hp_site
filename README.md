# Harry Pegrum – Fullstack Developer Portfolio

This repository contains a simple personal portfolio built with React, TypeScript, Vite, and Tailwind CSS (via shadcn/ui).

The site showcases an about section, core skills, selected projects, and contact information. A theme toggle in the header allows switching between light and dark modes; the previous `d` hotkey is still supported.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser to view the portfolio.

## Adding components

Additional UI components can be added using the `shadcn` utility if needed.

```bash
npx shadcn@latest add <component>
```

Import components using the `@/components` alias:

```tsx
import { Button } from "@/components/ui/button"
```
