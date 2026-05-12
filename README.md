# 📰 Newsroom Dashboard

A modern news dashboard built with **React + TypeScript** that allows users to browse real-time articles, search content, save favorites, and toggle dark mode. The project focuses on UI/UX, state management, and clean frontend architecture.

---

## 🚀 Features

- 🔍 Real-time news fetching via API
- ⭐ Add/remove favorite articles (saved in `localStorage`)
- 🌙 Dark / Light mode toggle
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⏳ Skeleton loading UI for better UX
- 🧭 Sticky responsive navbar
- 🎯 Article search functionality
- ✨ Smooth animations & hover effects

---

## 🛠️ Tech Stack

- React (Vite)
- TypeScript
- CSS (custom styling)
- Context API (theme management)
- LocalStorage (favorites persistence)
- GNews API (or similar news API)

---

## 📁 Project Structure

```
src/
│
├── components/
│ ├── Navbar.tsx
│ ├── ArticleCard.tsx
│ ├── ArticleSkeleton.tsx
│
├── contexte/
│ ├── ThemeContext.ts
│ ├── ThemeProvider.tsx
│ ├── useTheme.ts
│
├── services/
│ └── newsService.ts
│
├── types/
│ └── article.ts
│
├── App.tsx
└── main.tsx
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/newsroom-dashboard.git
```
Install dependencies:
```
npm install
```
Run the development server:
```
npm run dev
```
## 🔑 API Configuration

This project uses a news API (e.g. GNews).

Create a .env file in the root:
```
VITE_NEWS_API_KEY=your_api_key_here
```

## 📸 Features Preview

Responsive grid layout for articles
Smooth hover animations on cards
Dark mode support across the entire UI
Skeleton loading while fetching data
Sticky navigation bar with search & favorites

## 🧠 What I Learned

State management with React hooks and Context API
Component-based architecture
API integration and async data handling
UX improvements (loading states, animations)
Responsive design principles
Clean code organization in a React + TypeScript project

## 📌 Future Improvements

🔎 Advanced filtering (category, language, source)
🗂️ Favorites page (with routing)
⚡ Infinite scroll
🧑‍💻 Backend integration (Spring Boot or Node.js)
📰 Personalized news feed
