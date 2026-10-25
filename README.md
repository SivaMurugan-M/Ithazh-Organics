# Ithazh Organics (இதழ்) — Premium E-Commerce Homepage

> **Rooted in Tradition. Made for Better Living.**  
> Authentic recreation of the **Ithazh Organics** Tamil traditional organic food storefront. Built with React 19, Vite, TypeScript, and Vanilla CSS.

---

## 🌿 Overview

**Ithazh Organics (இதழ்)** is a dedicated single-page homepage celebrating Tamil heritage and organic agricultural goodness. This project accurately recreates the brand identity, visual hierarchy, layout, color palette, and micro-interactions from the reference specification.

### Brand Color Palette
- **Main Forest Green:** `#063E27`
- **Dark Green:** `#052E1E`
- **Cream:** `#FFF6E2`
- **Warm Cream:** `#F6E9CB`
- **Heritage Gold:** `#BA8E2B`
- **Earthy Brown:** `#603D1E`
- **Pure White:** `#FFFFFF`

### Typography
- **Headings (English):** *Playfair Display*
- **Body (English):** *DM Sans*
- **Tamil Content:** *Noto Sans Tamil*

---

## 🏗️ Homepage Sections (In Order)

1. **Top Announcement Bar**
   - Left: 100% Traditional Foods, Safe & Secure Delivery, No Harmful Additives
   - Right: Interactive **தமிழ் | English** language switcher, Login demo modal, Cart counter with slide-in trigger.
2. **Main Navigation**
   - Sticky header with subtle elevation on scroll.
   - Elegant Tamil calligraphic logo lockup: `இதழ் — ORGANICS —`.
   - Smooth anchor navigation: Home, Our Story, Shop, Ghee, Honey, Traditional Foods, Blog, Contact.
   - Real-time search filter with rounded input.
   - Accessible mobile drawer menu with Escape key and outside-click support.
3. **Hero Section**
   - Full-width golden sunrise background composition featuring traditional cow ghee, raw forest honey, and wooden ladle pouring.
   - Tamil brand headline `மண்ணின் மனம்! மனதின் நம்பிக்கை!`.
   - Dual CTAs: **SHOP NOW →** and **🍃 OUR STORY**.
   - Floating glassmorphic trust card (*Traditional Goodness, Quality First, Trusted Products, Better Living*).
4. **Categories Section**
   - 7 circular photo categories (*Ghee, Honey, Spices, Traditional Sweets, Natural Sweeteners, Snacks, More Products*).
   - Hover lift and image scale animation.
   - Interactive category filter with auto-scroll to the product showcase.
5. **Our Featured Products**
   - Ornate gold divider with green leaf flourish.
   - Desktop 6-column product density and responsive carousel controls.
   - Products:
     - Cow Ghee (100 ml) — ₹249
     - Cow Ghee (500 ml) — ₹899
     - Raw Honey (500 g) — ₹499
     - Black Pepper (250 g) — ₹299
     - Karuppatti (500 g) — ₹299
     - Naatu Sarkarai (1 kg) — ₹199
   - Additional heritage sweets and millet items.
   - Star ratings, review counts, in-cart badges, and full-width `ADD TO CART` buttons.
   - **View All Products** toggle without route changes.
6. **Our Story**
   - Split 3-panel panoramic composition (*Ghee pouring | Authentic Tamil story copy | Hands holding fertile soil & seedling*).
   - Expandable in-page storytelling drawer.
7. **Why Choose Ithazh Organics?**
   - Botanical corner illustrations and center gold divider.
   - 4 benefit columns with round gold badges (*Quality First, Traditional Goodness, Product Transparency, Customer Trust*).
8. **Customer Testimonials**
   - What Our Customers Say section with authentic Tamil reviews.
   - Customer avatar portraits (*Aravind, Chennai | Priya, Coimbatore | Karthik, Madurai*).
9. **Newsletter (Get Updates & Offers)**
   - Deep forest green strip with mail icon.
   - Email format validation with demo mode toast notification.
10. **Footer**
    - Brand statement, 4-column navigation (Quick Links, Categories, Support, Social Links).
    - Social links (YouTube, Instagram, Facebook, WhatsApp) and payment badges (UPI, VISA, Mastercard, 100% Secure).
    - Deep green copyright strip with policy links.

---

## ⚡ Frontend Features & Interactions

- [x] **Sticky Navigation & Mobile Hamburger Menu** (Esc key & outside-click support).
- [x] **Smooth Scroll Navigation** to sections on the same page.
- [x] **Live Product Search** matching Tamil and English keywords.
- [x] **Category Filtering** with reset capability.
- [x] **Interactive Cart Drawer**:
  - Live badge counter in header and announcement bar.
  - Increment / decrement quantity controls.
  - Remove item and clear cart.
  - Subtotal calculation & Free Shipping progress bar.
  - Persistent state in `localStorage`.
  - Escape key and backdrop dismissal.
- [x] **Bilingual Support (Tamil / English)** toggle updating all headers, labels, and copy.
- [x] **Toast Notifications** for adding to cart, newsletter subscription, and demo actions.
- [x] **Fully Responsive** across 320px, 375px, 430px, 768px, 1024px, 1440px, and 1920px.
- [x] **Zero TypeScript Errors** (`tsc -b` and `vite build` pass with exit code 0).

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the Vite development server
npm run dev

# 3. Build production bundle
npm run build

# 4. Preview production build
npm run preview
```

Server runs at `http://localhost:3000/`.

---

## 📁 Project Structure

```
ithazh-organics/
├── public/
│   └── assets/
│       ├── hero/
│       │   └── hero-main.jpg
│       ├── products/
│       │   ├── cow-ghee-100ml.jpg
│       │   ├── cow-ghee-500ml.jpg
│       │   ├── raw-honey-500g.jpg
│       │   ├── black-pepper-250g.jpg
│       │   ├── karuppatti-500g.jpg
│       │   └── naatu-sarkarai-1kg.jpg
│       ├── categories/
│       │   ├── category-ghee.jpg
│       │   ├── category-honey.jpg
│       │   ├── category-spices.jpg
│       │   ├── category-sweets.jpg
│       │   ├── category-sweeteners.jpg
│       │   ├── category-snacks.jpg
│       │   └── category-more.jpg
│       ├── story/
│       │   ├── story-ghee.jpg
│       │   └── story-seedling.jpg
│       └── testimonials/
│           ├── customer-aravind.jpg
│           ├── customer-priya.jpg
│           └── customer-karthik.jpg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AnnouncementBar.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── Categories.tsx
│   │   │   ├── FeaturedProducts.tsx
│   │   │   ├── OurStory.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── Newsletter.tsx
│   │   └── common/
│   │       ├── SectionHeading.tsx
│   │       ├── ProductCard.tsx
│   │       ├── CartDrawer.tsx
│   │       └── Toast.tsx
│   ├── context/
│   │   └── CartContext.tsx
│   ├── data/
│   │   ├── categories.ts
│   │   ├── products.ts
│   │   ├── testimonials.ts
│   │   └── translations.ts
│   ├── hooks/
│   │   └── useReveal.ts
│   ├── styles/
│   │   ├── variables.css
│   │   ├── global.css
│   │   └── responsive.css
│   ├── types.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🔒 Intentionally Demo-Only Features
- **Checkout Process**: Checkout simulates order initiation and alerts the user with an informational toast. No real payment gateway is integrated.
- **Customer Login**: Displays a demo notice toast informing users that authentication will be linked in a future release.
- **Newsletter Subscription**: Validates email format on the frontend and produces a success notification without submitting to an external mailing list.
