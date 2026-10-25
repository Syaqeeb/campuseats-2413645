# AI usage log

Using AI never costs marks; a vague or missing log does.
Add a new section every week, before you tag. Did not use AI? Write "None" under Tool(s).

## Week 1

- Tool(s): Gemini
- What I asked for: Assistance with creating component structures (Header, VendorCard, MenuItemCard, MenuList, Footer), lifting state for `selectedVendorId` and `cart`, and troubleshooting Vite server setup.
- What I kept, changed or rejected, and why: Kept the modular component split and state-lifting logic because it properly adheres to React data flow and lab requirements.
- One thing the AI got wrong and how I fixed it: The AI initially suggested running the Vite app using static Live Server, which resulted in a blank page. I fixed it by switching to the correct Vite development server using `npm run dev` and accessing `http://localhost:5173`.

## Week 2 Log

- Tools used: Gemini
- Prompts asked: Implemented dynamic data refactoring from hardcoded state to `src/data/vendors.js`, passed props across components, managed `selectedVendorId` and `cart` array states using `useState`, implemented digit 5 personal feature (Daily Special Banner).
- What was kept/changed: Used generated structure for vendor data and prop handlers.
- AI correction: Corrected initial directory navigation paths.
