# Nexus Analytics Dashboard

A modern, high-performance SaaS analytics dashboard built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and GSAP. 

This project demonstrates a production-ready architecture for managing customers, orders, and system activities, following strict frontend engineering principles.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗 Architecture & Folder Structure

The application is structured to strictly separate concerns, keeping UI components completely decoupled from data fetching and business logic.

```text
src/
├── app/                  # Next.js App Router (Pages, Layouts, API Routes)
│   ├── api/              # Mock API endpoints (simulating backend)
│   ├── orders/           # Orders management page
│   ├── layout.tsx        # Global layout & Theme Provider
│   ├── loading.tsx       # Global Suspense Skeletons
│   └── error.tsx         # Global Error Boundaries
├── components/
│   ├── dashboard/        # Dashboard specific widgets (Charts, KPIs)
│   ├── layout/           # Sidebar, Topbar, CMDK Palette
│   ├── orders/           # Orders Table, Filters, Pagination, Drawer
│   └── ui/               # Reusable primitives (Buttons, Badges, Inputs)
├── lib/                  # Utilities (Tailwind cn, formatting)
│   └── data/             # JSON Dataset (mock-db.ts)
├── services/             # API Service layer (Data fetching)
└── types/                # Global TypeScript definitions
```

## 🔄 API & Data Fetching Approach

Instead of hardcoding data into UI components or mixing `fetch` calls inside React components, the application uses a multi-layered data architecture:

1. **Mock API Routes (`/api/analytics`, `/api/orders`)**: We simulate a real backend using Next.js Route Handlers. These endpoints include a 300ms artificial delay to accurately model network latency and test loading states.
2. **Service Layer (`services/`)**: A dedicated `apiClient` manages the actual `fetch` execution, while specific services (e.g., `OrdersService`) provide strongly-typed methods for components to call.
3. **URL-Driven State**: For the Orders page, search queries (`q`), status filters, and pagination are securely stored in the URL `searchParams`. This ensures that filtering is shareable, bookmarkable, and natively triggers Next.js Server Component re-renders.

## ⚛️ Server vs. Client Components

This project leverages the Next.js App Router paradigm to maximize performance:

- **Server Components (Default)**: Pages like `/` and `/orders` are Server Components. They securely await `searchParams`, fetch data directly from the Service Layer, and render HTML on the server. This results in zero client-side JavaScript for data fetching and excellent SEO/performance.
- **Client Components (`"use client"`)**: Interactivity is pushed to the leaves of the component tree. Components like `<OrdersToolbar />` (handling input debounce), `<OrderDetailsDrawer />` (handling GSAP animations and portals), and `<CommandPalette />` (handling keyboard event listeners) are Client Components.

## ⚡ Performance & Rendering Optimization

- **Debounced Inputs**: The search bar in the Orders toolbar uses a `setTimeout` debounce to prevent spamming the server with requests on every keystroke.
- **Memoization (`useCallback`)**: Complex functions passed as dependencies (like `createQueryString` in the toolbar) are wrapped in `useCallback` to maintain stable reference identities across renders, preventing unnecessary re-evaluations of `useEffect` hooks.
- **Suspense & Streaming**: Instead of blocking the entire page render during the 300ms API latency, we utilize Next.js `loading.tsx` boundaries. This instantly streams a shimmering UI skeleton to the user while the server resolves the data.
- **React Portals**: The Order Details sliding drawer uses `createPortal` to mount directly into `document.body`. This prevents CSS `transform` clipping issues often caused by nested fixed elements inside animated routes.
