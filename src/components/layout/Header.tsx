import React, { useState, useEffect, useRef } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Header: React.FC = () => {
  const {
    searchQuery,
    setSearchQuery,
    setSelectedCategory
  } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (sectionId: string, categoryFilter?: string) => {
    setMobileMenuOpen(false);
    if (categoryFilter !== undefined) {
      setSelectedCategory(categoryFilter);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const shopSection = document.getElementById('shop');
    shopSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#FAF8F3',
        borderBottom: '1px solid #EBE4D5',
        boxShadow: isScrolled ? '0 4px 18px rgba(6, 62, 39, 0.06)' : 'none',
        transition: 'box-shadow 0.3s ease'
      }}
    >
      <div
        style={{
          maxWidth: '1340px',
          margin: '0 auto',
          padding: '0.65rem clamp(1rem, 3vw, 2.5rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.25rem'
        }}
      >
        {/* Brand Logo Lockup matching reference */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textDecoration: 'none'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <span
              style={{
                fontFamily: 'var(--font-tamil), var(--font-serif)',
                fontSize: '1.85rem',
                fontWeight: 800,
                color: '#0A3B22',
                lineHeight: 1,
                letterSpacing: '-0.02em'
              }}
            >
              இதழ்
            </span>
            {/* Golden glowing leaf drop */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ position: 'absolute', right: '-12px', top: '-2px' }}>
              <path d="M12 2C7 9 5 15 12 22C19 15 17 9 12 2Z" fill="#D49B24" />
              <path d="M12 6C9 11 8 15 12 19C16 15 15 11 12 6Z" fill="#FFF7DE" />
            </svg>
          </div>
          <span
            style={{
              fontSize: '0.58rem',
              fontWeight: 800,
              letterSpacing: '0.22em',
              color: '#0A3B22',
              textTransform: 'uppercase',
              marginTop: '1px'
            }}
          >
            — ORGANICS —
          </span>
        </a>

        {/* Center Desktop Navigation Links */}
        <nav
          className="hide-on-mobile"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem'
          }}
          aria-label="Main Navigation"
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            style={{
              fontSize: '0.86rem',
              fontWeight: 600,
              color: '#0A3B22'
            }}
          >
            Home
          </a>
          <a
            href="#story"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('story');
            }}
            style={{
              fontSize: '0.86rem',
              fontWeight: 600,
              color: '#0A3B22'
            }}
          >
            Our Story
          </a>
          <a
            href="#shop"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('shop', '');
            }}
            style={{
              fontSize: '0.86rem',
              fontWeight: 600,
              color: '#0A3B22'
            }}
          >
            Shop
          </a>
          <a
            href="#shop"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('shop', 'ghee');
            }}
            style={{
              fontSize: '0.86rem',
              fontWeight: 600,
              color: '#0A3B22'
            }}
          >
            Ghee
          </a>
          <a
            href="#shop"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('shop', 'honey');
            }}
            style={{
              fontSize: '0.86rem',
              fontWeight: 600,
              color: '#0A3B22'
            }}
          >
            Honey
          </a>
          <a
            href="#categories"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('categories');
            }}
            style={{
              fontSize: '0.86rem',
              fontWeight: 600,
              color: '#0A3B22'
            }}
          >
            Traditional Foods
          </a>
          <a
            href="#why-us"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('why-us');
            }}
            style={{
              fontSize: '0.86rem',
              fontWeight: 600,
              color: '#0A3B22'
            }}
          >
            Blog
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            style={{
              fontSize: '0.86rem',
              fontWeight: 600,
              color: '#0A3B22'
            }}
          >
            Contact
          </a>
        </nav>

        {/* Right Search Input */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <form
            onSubmit={handleSearchSubmit}
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              style={{
                width: 'clamp(140px, 16vw, 210px)',
                padding: '0.45rem 2.4rem 0.45rem 0.9rem',
                borderRadius: '9999px',
                border: '1px solid #D8CDB8',
                backgroundColor: '#FFFFFF',
                fontSize: '0.82rem',
                color: '#0A3B22',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              aria-label="Search"
              style={{
                position: 'absolute',
                right: '3px',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: '#0A3B22',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <Search size={14} />
            </button>
          </form>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="show-on-mobile"
            style={{
              display: 'none',
              padding: '6px',
              borderRadius: '8px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #D8CDB8',
              color: '#0A3B22'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          style={{
            backgroundColor: '#FAF8F3',
            borderTop: '1px solid #EBE4D5',
            padding: '1rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            boxShadow: '0 8px 16px rgba(0,0,0,0.06)'
          }}
        >
          {['Home', 'Our Story', 'Shop', 'Ghee', 'Honey', 'Traditional Foods', 'Blog', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.toLowerCase().replace(/\s+/g, '-'));
              }}
              style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0A3B22' }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
