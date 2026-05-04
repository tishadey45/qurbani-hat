# 🐄 QurbaniHat – Livestock Booking Platform

## 🌐 Live Demo

👉 [https://qurbani-hat-beta.vercel.app/](https://qurbani-hat-beta.vercel.app/)

## 📌 Project Purpose

QurbaniHat is a modern livestock marketplace designed for the Qurbani season. Users can browse animals such as cows and goats, view detailed information, and book animals securely after authentication. The platform provides a smooth, responsive, and user-friendly experience.

---

## 🚀 Key Features

### 🏠 Public Features

* Modern responsive homepage with hero section
* Featured animals section (4 items)
* Extra sections: Qurbani Tips & Top Breeds
* All Animals page with sorting by price
* Animal details page with full information

### 🔐 Authentication System

* User Registration (Name, Email, Photo URL, Password)
* User Login (Email & Password)
* Google Social Login
* Secure route protection for private pages

### 🐮 Animal Marketplace

* JSON-based animal data (6+ animals)
* Animal cards with details view
* Sorting by price (low to high / high to low)

### 📦 Booking System

* Booking form (Name, Email, Phone, Address)
* Login required to book animals
* Success toast notification
* Form resets after submission (no DB storage required)

### 👤 Profile System (Challenge Feature)

* My Profile page shows:

  * Name
  * Email
  * Profile Photo
* Update Profile feature:

  * Update Name and Image
  * Integrated with Better Auth user update API

### 🎨 UI/UX Features

* Fully responsive (Mobile, Tablet, Desktop)
* Unique custom design
* Loading indicators while fetching data
* Toast notifications for success/error
* Custom 404 Not Found page
* Smooth navigation experience

---

## 🧩 Routes

### Public Routes

* `/` → Home Page
* `/animals` → All Animals Page
* `/login` → Login Page
* `/register` → Register Page

### Private Routes

* `/details-page` → Animal Details + Booking
* `/my-profile` → User Profile Page

---

## 📦 NPM Packages Used

* **Next.js** – React framework
* **Tailwind CSS** – Styling
* **HeroUI / DaisyUI** – UI components
* **React Icons** – Icons
* **React Hot Toast** – Notifications
* **Lottie React** – Animations (extra feature)
* **Better Auth** – Authentication system

---

## 🔐 Environment Variables

Firebase / Auth credentials are stored securely using `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
```

---

## 📂 Project Structure (Overview)

```
/app
  /login
  /register
  /animals
  /details-page
  /my-profile
/components
/data
/public
```

---

## ⚡ Installation & Run Locally

```bash
git clone https://github.com/tishadey45/qurbani-hat
cd qurbani-hat
npm install
npm run dev
```

---

## 🏁 Deployment

Deployed on **Vercel** for fast and reliable performance.

---

## 👨‍💻 Developer Notes

* Fully SPA-friendly (no reload routing errors)
* Protected routes implemented
* Clean commit history (10+ meaningful commits)
* Focus on UI consistency and responsiveness

