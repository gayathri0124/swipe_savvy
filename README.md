# 🏪 Swipe Savvy – Business Listing & Rewards Platform

🌐 [Live Demo](https://swipe-savvy.onrender.com)

Swipe Savvy is a full-stack platform for local businesses to register, activate, and manage their listings. It integrates Google Places API for business validation and uses PostgreSQL for backend data storage. Premium subscriptions are tracked via HubSpot CRM using Make.com webhooks.

---

## 🚀 Features

- ✅ Business verification via Google Places API
- 📝 Account registration and secure login
- 🏷️ Free and Premium listing tiers
- 🗺️ Auto-populated business address and geolocation
- 📦 Free marketing materials for onboarded businesses
- 📊 Subscription tracking integrated with Make.com and HubSpot CRM

---

## 🛠 Tech Stack

| Category         | Stack                      |
|------------------|----------------------------|
| Frontend         | Next.js (App Router), TailwindCSS, TypeScript |
| Backend/API      | Node.js, PostgreSQL        |
| ORM              | Manual SQL (no ORM used)   |
| Deployment       | Render (Free Hosting Tier) |
| Auth             | Custom (Email & Password)  |
| External APIs    | Google Places API, Make.com |
| CRM Integration  | HubSpot via Make.com webhook |

---

## 📁 Folder Structure

```plaintext
📦 swipe-savvy
├── app
│   ├── api                  → API route handlers (auth, business)
│   ├── create-account       → Create account page
│   ├── dashboard            → Business dashboard (TBD or implemented)
│   ├── success              → Success confirmation screen
│   ├── terms                → Terms & conditions route
│   ├── verify-business      → Business verification flow
│   ├── globals.css          → Global styles
│   ├── layout.tsx           → Root layout for Next.js App Router
│   └── page.tsx             → Landing page entry
├── components
│   ├── ui
│   │   ├── AccountCreation.tsx
│   │   ├── BusinessForm.tsx
│   │   ├── BusinessVerification.tsx
│   │   ├── ConfettiAnimation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── SuccessPage.tsx
│   │   ├── SuccessPageNew.tsx
│   │   └── TermsAndConditions.tsx
├── hooks
│   └── use-toast.ts         → Custom hook for toast notifications
├── lib
│   ├── database.ts          → PostgreSQL config + table initialization
│   ├── email.ts             → Utility for sending emails
│   └── utils.ts             → Shared utility functions
├── public                   → Static assets like images and icons
├── store                    → App-wide state management (if used)
├── .env.example             → Environment variables template
├── README.md                → Project overview and setup guide
└── ...

```
---

## 🧩 Environment Variables

Create a `.env.local` file (not committed) with the following keys:

## PostgreSQL database URL
`DATABASE_URL=postgres://username:password@host:port/dbname`

## Google Places API Key
`NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_key`

## Make.com Webhook URL
`WEBHOOK_URL=https://hook.us2.make.com/xxxx`

---

## 🧪 Local Development

```bash
# 1. Clone the repository
git clone https://github.com/gayathri0124/swipe_savvy.git
cd swipe_savvy

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Add real keys to .env.local

# 4. Run locally
npm run dev

---

