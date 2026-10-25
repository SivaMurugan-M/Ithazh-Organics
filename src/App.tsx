import React from 'react';
import { CartProvider } from './context/CartContext';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Categories } from './components/home/Categories';
import { FeaturedProducts } from './components/home/FeaturedProducts';
import { OurStory } from './components/home/OurStory';
import { WhyChooseUs } from './components/home/WhyChooseUs';
import { Testimonials } from './components/home/Testimonials';
import { Newsletter } from './components/home/Newsletter';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/common/CartDrawer';
import { Toast } from './components/common/Toast';
import './styles/variables.css';
import './styles/global.css';
import './styles/responsive.css';

export const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="app-root">
        {/* 1. TOP ANNOUNCEMENT BAR */}
        <AnnouncementBar />

        {/* 2. MAIN NAVIGATION */}
        <Header />

        {/* MAIN HOMEPAGE SECTIONS IN EXACT ORDER */}
        <main>
          {/* 3. HERO */}
          <Hero />

          {/* 4. CATEGORIES */}
          <Categories />

          {/* 5. FEATURED PRODUCTS */}
          <FeaturedProducts />

          {/* 6. OUR STORY */}
          <OurStory />

          {/* 7. WHY CHOOSE ITHAZH ORGANICS */}
          <WhyChooseUs />

          {/* 8. CUSTOMER TESTIMONIALS */}
          <Testimonials />

          {/* 9. NEWSLETTER */}
          <Newsletter />
        </main>

        {/* 10. FOOTER */}
        <Footer />

        {/* COMMON OVERLAYS */}
        <CartDrawer />
        <Toast />
      </div>
    </CartProvider>
  );
};

export default App;
