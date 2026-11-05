# AI usage log

Using AI never costs marks; a vague or missing log does.
Add a new section every week, before you tag. Did not use AI? Write "None" under Tool(s).

## Week 1

- Tool(s): Gemini
- What I asked for: Assistance with creating component structures (Header, VendorCard, MenuItemCard, MenuList, Footer), lifting state for `selectedVendorId` and `cart`, and troubleshooting Vite server setup.
- What I kept, changed or rejected, and why: Kept the modular component split and state-lifting logic because it properly adheres to React data flow and lab requirements.
- One thing the AI got wrong and how I fixed it: The AI initially suggested running the Vite app using static Live Server, which resulted in a blank page. I fixed it by switching to the correct Vite development server using `npm run dev` and accessing `http://localhost:5173`.

## Week 2

- Tool(s): Gemini
- What I asked for: Assistance refactoring hardcoded state to `src/data/vendors.js`, passing props across components, and managing `selectedVendorId` and `cart` array states using `useState`.
- What I kept, changed or rejected, and why: Kept the generated vendor data structure and prop handler patterns.
- One thing the AI got wrong and how I fixed it: The AI suggested incorrect nested file paths for importing data. I corrected the relative pathing to point directly to `src/data/vendors.js`.

## Week 3

- Tool(s): Gemini
- What I asked for: Assistance implementing `useEffect` for fetching vendor data, handling loading and error states, and managing controlled form validation.
- What I kept, changed or rejected, and why: Kept the asynchronous fetch logic and error states to fulfill robust component lifecycle requirements.
- One thing the AI got wrong and how I fixed it: The AI omitted cleanup logic for the data fetch effect. I added proper error-catching and fallback handling.

## Week 4

- Tool(s): Gemini
- What I asked for: Guidance on extracting custom hooks (`useLocalStorage`, `useVendors`, `useCart`), setting up the Context API (`CartProvider`), and configuring React Router v7+ routes with dynamic parameters (`:id`), layout wrappers, and programmatic navigation.
- What I kept, changed or rejected, and why: Kept the `useLocalStorage` synchronization and `CartProvider` structure to ensure the cart survives page refreshes without prop-drilling.
- One thing the AI got wrong and how I fixed it: The AI initially used old `react-router-dom` imports. I fixed them to use `react-router` as specified in the lab instructions.
