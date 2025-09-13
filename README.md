# RougeStoryWorld - Author Landing Page 📚✨

[![Live Demo on Netlify](https://img.shields.io/badge/Live-Demo-green?logo=netlify)](https://rougestorybookworld.netlify.app/)

RougeStoryWorld is a **professional landing page** built for an **independent audiobook creator**.
It serves as a **marketing/eCommerce front-end**, directing users to Amazon for purchases while showcasing books, author bio, video content, and testimonials.

---

## 🌐 Live Demo

* **Production URL:** [https://rougestorybookworld.netlify.app/](https://rougestoryworld.netlify.app)
* **Amazon Storefront:** [Author’s Amazon Page](https://www.amazon.com/stores/author/B0DLLB4GB3/allbooks)
* **Repo Owner:** [Alex Seisler](https://github.com/AlexSeisler)

---

## ✨ Features

* 🎨 **Landing Page Design** → animated hero section with logo + branding.
* 📚 **Featured Books Showcase** → previews, ratings, and direct Amazon links.
* 🎥 **Video Integration** → embedded YouTube story trailers.
* 🧑‍💼 **About Section** → author bio, trust badges, and mentoring acknowledgements.
* ⭐ **Testimonials** → reviews from verified readers.
* 📧 **Email Capture** → lightweight popup for user interest collection (mock flow).
* 📱 **Responsive UI** → optimized for desktop + mobile.

---

## 📊 Impact

👥 Delivered to a **paying client** (independent audiobook creator).
💵 Designed to **drive Amazon conversions** (no custom checkout needed).

---

## 🛠 Tech Stack

**Frontend**

* React 19 + Vite
* Tailwind CSS + Framer Motion (UI polish, animations)
* React Router DOM

**Integrations**

* YouTube embed (promotional videos)
* Amazon Storefront redirect (external checkout)

**Infrastructure**

* Hosting: Netlify (CI/CD deploys)
* Static assets served via `public/`

---

## 📂 Repository Structure

```text
RougeStoryWorld/
├── public/                 # Static assets (logos, images, favicon)
├── src/                    # React frontend
│   ├── components/         # UI components (Hero, Books, Video, About, Testimonials, Email, Footer)
│   ├── pages/              # Route-level pages (Home, Collection)
│   ├── lib/                # Utility libs (removed Supabase, mock email flow)
│   └── index.css           # Tailwind styles
│
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── README.md
```

---

## 📖 Additional Documentation

* [ARCHITECTURE.md](./ARCHITECTURE.md) → System design and data flow

📄 License
MIT — Open for educational and referenced use.
