# 🌞 SunCart – Summer Essentials Store

# 🌐 Live Demo
### 🔗 Visit Now:
👉 https://assignment8-sun-cart.vercel.app

---

## 🛍️ Project Overview

**SunCart** is a modern summer-themed eCommerce web application built with **Next.js**.  
Users can explore seasonal products like sunglasses, summer outfits, skincare items, and beach accessories.  

The platform includes authentication, protected routes, dynamic product pages, and a clean responsive UI designed for all devices.

---

## 🎯 Purpose

The goal of this project is to build a **full-stack modern eCommerce UI experience** with authentication, protected routing, and dynamic product rendering using Next.js App Router.

---

## ✨ Key Features

### 🧭 Navbar & Layout
- Logo + navigation links (Home, Products, My Profile)
- Conditional UI based on authentication:
  - Logged in → Avatar + Logout button
  - Logged out → Login / Register buttons

---

### 🏠 Home Page
- 🌅 Hero section with summer sale banners
- 🔥 Popular Products section 

---

### 📦 Product System
- JSON-based product data (15+ products)
- Dynamic product rendering
- Product Details page with full information

---

### 🔒 Protected Product Details Page
- Only accessible after login
- Unauthorized users are redirected to Signup page
- After signup → redirect back to login page
- After login → redirected back to Home page

---

# 🔐 Authentication (BetterAuth)
## Login Page
- Email & Password login
- Google Social Login
- Redirect to Home after login
- Error handling with toast notifications
- Link to Register page

## Register Page
- Name, Email, Photo URL, Password form
- Google Social Login
- Redirect to Login after registration
- Error handling with toast notifications
- Link to Login page

---

## 👤 My Profile
- Displays user info:
  - Name
  - Email
  - Profile photo
- Update profile feature:
  - Update Name
  - Update Image URL

---

## ✏️ Update Profile Feature
- Separate update page
- Uses BetterAuth user update API
- Saves updated profile instantly

---

## 📱 Fully Responsive Design
- Mobile 📱
- Tablet 📟
- Desktop 💻

---

## ⚙️ Extra Features
- Environment variables for secure config
- Smooth navigation with Next.js App Router
- Toast notifications for feedback
- Clean UI with Tailwind CSS + DaisyUI
- Custom loading states (optional)
- 404 Not Found page

---

## 🧰 Tech Stack

- ⚛️ Next.js (App Router)
- 🎨 Tailwind CSS
- 🧩 DaisyUI / HeroUI
- 🔐 BetterAuth
- 💡 JavaScript (ES6+)
- 🔔 React Toastify (or similar)
- 📦 Static JSON Data

---

## 📁 Project Structure



---

## 🔐 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_APP_URL=your_app_url
BETTER_AUTH_SECRET=your_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```
---

# 🚀 Getting Started

## 1️⃣ Clone the Repository
```js
git clone https://github.com/Abid-Hossain-Sifat/Assignment8-SunCart.git
cd Assignment8-SunCart
```

## 2️⃣ Install Dependencies
```js
npm install
```

## 3️⃣ Run Development Server
```js
npm run dev
```

## 4️⃣ Open in Browser
```js
http://localhost:3000
```

---
# 👨‍💻 Author

**Abid Hossain Sifat**  
SunCart Assignment Project  
Built with ❤️ using Next.js