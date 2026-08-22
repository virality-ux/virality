# ⚡ VIRALITY // Whop-Style Clipping Marketplace & Middleman Escrow Engine

<p align="center">
  <img src="https://img.shields.io/badge/VIRALITY-v2.4_Middleman-6366f1?style=for-the-badge&logo=zap&logoColor=white" alt="Virality Version" />
  <img src="https://img.shields.io/badge/React-18.x-61dafb?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-⚡_Fast-purple?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Escrow-Whop_Model-10b981?style=for-the-badge&logo=shield&logoColor=white" alt="Whop Model" />
</p>

---

## 🚀 Overview

**VIRALITY** is a next-generation clipping marketplace and middleman escrow platform designed to connect **Brand Owners & Content Creators** with elite **Clippers**. 

Campaign owners fund escrow budgets for viral short-form content (TikTok, YouTube Shorts, Instagram Reels, Kick), setting custom **Payout Rates per 1,000 views** ($/1k views). Clippers edit and post content, submit clip URLs, and receive guaranteed payouts directly from middleman escrow upon automated view verification.

> 💰 **The Middleman Advantage**: The platform automatically deducts a platform take rate (e.g. 12.5% fee) on all approved payout releases between Brands and Clippers—mirroring the business model of platforms like Whop.

---

## 🔥 Key Features

### ⚡ 1. Clipper Feed & Marketplace
* **Campaign Discovery**: Browse active brand campaigns filtered by platform (TikTok, Shorts, Reels, Kick) and category (AI & SaaS, Crypto & Finance, Gaming & Fitness).
* **Escrow Budget Indicators**: Real-time progress bars showing remaining campaign budget pools.
* **Brief & Asset Vault**: Direct access to raw footage, Google Drive assets, hook guidelines, and submission rules.
* **Earnings Tracker**: Live dashboard tracking pending reviews, verified views, gross earnings, middleman fee deductions, and net payouts.

### 💼 2. Brand Campaign Owner Desk
* **Vault Budget Management**: Track deposited escrow budget, remaining capital, spent payouts, and total organic views generated.
* **+ Launch Campaign Modal**: Spin up new campaigns with custom $/1k view rates, max clip caps, category tags, and asset folders.
* **Submission Review Queue**: Review submitted clip links, reported views, calculated payouts, and execute one-click **Approve & Pay (Escrow Release)**.

### 🏛️ 3. Whop-Style Middleman Engine
* **Platform Financial Overview**: Track Gross Volume Processed ($), Middleman Net Revenue, Active Escrow Vaults, and total verified views across all social platforms.
* **Interactive Fee Rate Configurator**: Adjust the middleman take-rate percentage slider (5% to 25%) with real-time platform monthly revenue projections.
* **Global Escrow Settlement Log**: Full transparent audit trail of every clip transaction, middleman fee cut, and net creator payout.

### 🏆 4. Top Clippers Leaderboard
* **Hall of Fame Rankings**: Gamified leaderboard displaying top-earning clippers, viral badges (🔥 *Viral God*, ⚡ *Top Clipper*, 💎 *Diamond Cutter*), total verified views, and total payouts earned.

---

## 🛠️ Tech Stack

* **Frontend**: React, Vite
* **Styling**: Vanilla CSS System (Obsidian Dark Glassmorphism, Neon Violet & Cyan Accents)
* **Icons**: `lucide-react`
* **Animations & FX**: `canvas-confetti`, custom CSS pulse glow, shimmer text

---

## ⚡ Quick Start

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```

---

## 📁 Project Structure

```text
virality/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx
    ├── index.css
    ├── mockData.js
    └── components/
        ├── Navbar.jsx
        ├── ClipperMarketplace.jsx
        ├── BrandView.jsx
        ├── MiddlemanView.jsx
        ├── LeaderboardView.jsx
        ├── SubmitClipModal.jsx
        └── CreateCampaignModal.jsx
```

---

<p align="center">
  Crafted for viral content clipping marketplaces & escrow infrastructure 🚀
</p>
