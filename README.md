# NOVA Media Agency - Premium Digital Marketing Website

A high-performance, visually stunning landing page for NOVA Media Agency, built with Next.js 14, Tailwind CSS, and Framer Motion. This project features a premium dark aesthetic with smooth animations and a fully functional contact system.

## 🚀 Teck Stack

*   **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
*   **Email Service**: [Nodemailer](https://nodemailer.com/)

---

## ✨ Features

*   **Premium Design**: Dark mode aesthetic with gold accents and cinematic animations.
*   **Fluid Navigation**: Smooth scroll behavior with a glassy, responsive navbar.
*   **Interactive Components**: 
    - Custom animated cursor.
    - Growth engine 3D-effect orbit animation.
    - Floating testimonials with realistic profile images.
    - Dynamic stats and logo marquee.
*   **Fully Responsive**: Optimized for desktop, tablet, and mobile devices.
*   **Contact Form**: Validated form with automatic email notifications and auto-responses.
*   **SEO Optimized**: Semantic HTML and optimized metadata.

---

## 🛠️ Getting Started

### 1. Project Setup
Prerequisites: **Node.js 18+**

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### 2. Environment Variables
Create a `.env.local` file in the root directory and add your SMTP credentials for the contact form:

```env
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
```
> [!IMPORTANT]
> For Gmail, you must use an **App Password**, not your regular account password. Enable 2FA and generate the password in Google Security settings.

---

## 📁 Folder Structure

*   `src/app`: Routes and global layout.
*   `src/components`: Reusable UI components (Hero, Services, Testimonials, etc.).
*   `public/`: Static assets (Team photos, original logos).
*   `src/app/api`: Serverless API routes for form handling.

---

## 🚢 Deployment

The easiest way to deploy this project is via the [Vercel Platform](https://vercel.com/new).

1. Push the code to GitHub.
2. Connect your repo to Vercel.
3. Add the `.env` variables in Vercel's **Environment Variables** settings.
4. Deploy!

---

## 📄 License

This project is privately owned by **NOVA Media Agency**.
© 2024 NOVA Media Agency. All rights reserved.
