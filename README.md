# 💼 VV Work Platform

A dynamic, high-performance web platform designed to simplify the job search process for candidates and candidate discovery for European employers. Built with React, TypeScript, Vite, and Tailwind CSS, featuring modular clean architecture, custom hook-based state management, and resilient async handling.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.org/)
[![Vitest](https://img.shields.io/badge/Vitest-Testing-FCC72B?style=flat-square&logo=vitest&logoColor=black)](https://vitest.dev/)

---

## ✨ Features

- **Dynamic Navigation & Layout:** Shared header and footer with seamless client-side routing via React Router DOM v6.
- **Instant Job & Partner Search:** Instant title search powered by a custom useDebounce hook and multi-category filtering without unnecessary re-renders.
- **Resilient Network Layer:** Simulated API layer (useFetch) with randomized latency (300-800ms) and ~13% error rates, complete with skeletons and inline retry mechanisms.
- **Interactive Contact Form:** Instant client-side validation for Ukrainian phone numbers and Telegram handles (@username), character counter, and optimistic feedback.
- **Accessible & Responsive:** Mobile-first layout compliant with modern accessibility (axe-core) standards.
- **Saved Jobs & Persistence:** Real-time bookmarking system powered by a custom useLocalStorage hook and React Router Outlet context, supporting instant UI synchronization and URL-based filtering (?saved=true).

---

## 💡 My Design & Engineering Decisions

- **Architecture without Redux/Zustand:** Leveraged lightweight custom React hooks (useFetch, useDebounce) and native state to keep the bundle size ultra-light while demonstrating core React expertise.
- **Optimized Rendering Cycle:** Isolated input states to prevent heavy list component re-renders on every keypress during filtering.
- **Card-Based UI System:** Designed a cohesive visual language with elevated card layouts, subtle borders, and clear accent hierarchy in place of an existing Figma mockup.
- **Resilient UX Mechanics:** Replaced invasive browser alerts with direct inline validation indicators and soft toast notifications for simulated async errors.
- **Global State without External Libraries:** Handled application-wide saved state using Lifting State Up via React Router's Outlet context and local storage synchronization, avoiding heavy third-party state managers.

---

## 🧪 Unit Testing

Comprehensive test suite covering custom hooks, interactive UI components, and input validation rules:

- **Hooks:** useFetch.test.ts, useDebounce.test.ts
- **Components:** JobCard.test.tsx, JobList.test.tsx, CategoryFilter.test.tsx, PartnerHeader.test.tsx, ContactForm.test.tsx

### Running Tests

# Run unit tests once

npx vitest run

# Run tests in watch mode

npm test

---

## ⚡ Performance & Lighthouse

- **Lighthouse Score:** Performance 90+, Accessibility 100, Best Practices 100, SEO 100 on Production Builds.

![Lighthouse Result](/public/lighthouse-mobile.png)
![Lighthouse Result](/public/lighthouse-desctop.png)

---

## 💻 Local Setup

1. **Clone the repository:**
   git clone https://github.com/xovrashok/vv-work-platform.git
   cd vv-work-platform

2. **Install dependencies:**
   npm install

3. **Start development server:**
   npm run dev

4. **Build for production:**
   npm run build

---

## 📁 Project Structure

src/
├── components/ # Domain-driven UI components
│ ├── categories/ # Category filtering buttons
│ ├── contacts/ # Validated contact form
│ ├── home/ # Hero and landing sections
│ ├── jobs/ # Job cards, skeleton loaders, list views
│ ├── layout/ # Shared Header, Footer, and Layout wrappers
│ └── partners/ # Partner cards and list grids
├── data/ # Mock dataset (mockData.ts)
├── hooks/ # Custom hooks (useFetch, useDebounce, useLocalStorage)
├── pages/ # Page routing components
└── types/ # Strict TypeScript interface declarations
