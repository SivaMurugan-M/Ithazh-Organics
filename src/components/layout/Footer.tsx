import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Footer: React.FC = () => {
  const { setSelectedCategory, addToast } = useCart();

  const handleLinkClick = (e: React.MouseEvent, sectionId: string, categoryFilter?: string) => {
    e.preventDefault();
    if (categoryFilter !== undefined) {
      setSelectedCategory(categoryFilter);
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePolicyClick = (e: React.MouseEvent, policyName: string) => {
    e.preventDefault();
    addToast(`${policyName} is available upon request (Demo Store).`, 'info');
  };

  return (
    <footer id="contact" style={{ backgroundColor: '#FAF5EB', borderTop: '1px solid #ECE2D0', position: 'relative' }}>
      {/* Main Footer Container */}
      <div
        style={{
          maxWidth: '1340px',
          margin: '0 auto',
          padding: '2.5rem clamp(1rem, 3vw, 2.5rem) 2.25rem',
          position: 'relative',
          zIndex: 2
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.35fr 1fr 1.15fr 1.2fr 1.8fr',
            gap: '1.75rem',
            alignItems: 'start'
          }}
          className="footer-grid"
        >
          {/* Col 1: Brand Logo & Flourish */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, 'home')}
              style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-tamil), var(--font-serif)',
                    fontSize: '2.4rem',
                    fontWeight: 800,
                    color: '#0A3B22',
                    lineHeight: 1,
                    letterSpacing: '-0.02em'
                  }}
                >
                  இதழ்
                </span>
                {/* Golden glowing leaf drop */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ position: 'absolute', right: '-16px', top: '-2px' }}>
                  <path d="M12 2C7 9 5 15 12 22C19 15 17 9 12 2Z" fill="#D49B24" />
                  <path d="M12 6C9 11 8 15 12 19C16 15 15 11 12 6Z" fill="#FFF7DE" />
                </svg>
              </div>
              <span
                style={{
                  fontSize: '0.64rem',
                  fontWeight: 800,
                  letterSpacing: '0.24em',
                  color: '#0A3B22',
                  textTransform: 'uppercase',
                  marginTop: '4px'
                }}
              >
                — ORGANICS —
              </span>
              {/* Elegant gold flourish */}
              <svg width="64" height="14" viewBox="0 0 64 14" fill="none" style={{ marginTop: '6px', opacity: 0.85 }}>
                <path d="M0 7 C 16 3, 24 11, 32 7 C 40 3, 48 11, 64 7" stroke="#BA8E2B" strokeWidth="1.2" fill="none"/>
                <circle cx="32" cy="7" r="2.2" fill="#BA8E2B"/>
                <circle cx="24" cy="7.5" r="1.2" fill="#BA8E2B" opacity="0.7"/>
                <circle cx="40" cy="6.5" r="1.2" fill="#BA8E2B" opacity="0.7"/>
              </svg>
            </a>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#0A3B22',
                marginBottom: '0.85rem',
                lineHeight: 1.2
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.82rem', padding: 0, margin: 0 }}>
              <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')} style={{ color: '#46564B', textDecoration: 'none', transition: 'color 0.2s' }}>Home</a></li>
              <li><a href="#story" onClick={(e) => handleLinkClick(e, 'story')} style={{ color: '#46564B', textDecoration: 'none', transition: 'color 0.2s' }}>Our Story</a></li>
              <li><a href="#shop" onClick={(e) => handleLinkClick(e, 'shop', '')} style={{ color: '#46564B', textDecoration: 'none', transition: 'color 0.2s' }}>Shop</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} style={{ color: '#46564B', textDecoration: 'none', transition: 'color 0.2s' }}>Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Shop by Category */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#0A3B22',
                marginBottom: '0.85rem',
                lineHeight: 1.2
              }}
            >
              Shop by Category
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.82rem', padding: 0, margin: 0 }}>
              <li><a href="#shop" onClick={(e) => handleLinkClick(e, 'shop', 'ghee')} style={{ color: '#46564B', textDecoration: 'none', transition: 'color 0.2s' }}>Ghee</a></li>
              <li><a href="#shop" onClick={(e) => handleLinkClick(e, 'shop', 'honey')} style={{ color: '#46564B', textDecoration: 'none', transition: 'color 0.2s' }}>Honey</a></li>
              <li><a href="#shop" onClick={(e) => handleLinkClick(e, 'shop', 'spices')} style={{ color: '#46564B', textDecoration: 'none', transition: 'color 0.2s' }}>Spices</a></li>
              <li><a href="#shop" onClick={(e) => handleLinkClick(e, 'shop', 'sweets')} style={{ color: '#46564B', textDecoration: 'none', transition: 'color 0.2s' }}>Traditional Foods</a></li>
              <li><a href="#shop" onClick={(e) => handleLinkClick(e, 'shop', 'snacks')} style={{ color: '#46564B', textDecoration: 'none', transition: 'color 0.2s' }}>Snacks</a></li>
            </ul>
          </div>

          {/* Col 4: Customer Support */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#0A3B22',
                marginBottom: '0.85rem',
                lineHeight: 1.2
              }}
            >
              Customer Support
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.82rem', padding: 0, margin: 0 }}>
              <li><a href="#track" onClick={(e) => handlePolicyClick(e, 'Track Order')} style={{ color: '#46564B', textDecoration: 'none', transition: 'color 0.2s' }}>Track Order</a></li>
              <li><a href="#shipping" onClick={(e) => handlePolicyClick(e, 'Shipping & Delivery')} style={{ color: '#46564B', textDecoration: 'none', transition: 'color 0.2s' }}>Shipping & Delivery</a></li>
              <li><a href="#returns" onClick={(e) => handlePolicyClick(e, 'Return Policy')} style={{ color: '#46564B', textDecoration: 'none', transition: 'color 0.2s' }}>Return Policy</a></li>
              <li><a href="#faqs" onClick={(e) => handlePolicyClick(e, 'FAQs')} style={{ color: '#46564B', textDecoration: 'none', transition: 'color 0.2s' }}>FAQs</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} style={{ color: '#46564B', textDecoration: 'none', transition: 'color 0.2s' }}>Contact Us</a></li>
            </ul>
          </div>

          {/* Col 5: Follow Us & Payments */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#0A3B22',
                marginBottom: '0.85rem',
                lineHeight: 1.2
              }}
            >
              Follow Us
            </h4>
            {/* Social Icons matching reference */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.15rem' }}>
              {/* YouTube */}
              <div
                title="YouTube"
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  backgroundColor: '#FF0000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.12)',
                  transition: 'transform 0.2s ease'
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>

              {/* Instagram */}
              <div
                title="Instagram"
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '8px',
                  background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.12)',
                  transition: 'transform 0.2s ease'
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>

              {/* Facebook */}
              <div
                title="Facebook"
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  backgroundColor: '#1877F2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.12)',
                  transition: 'transform 0.2s ease'
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>

              {/* WhatsApp */}
              <div
                title="WhatsApp"
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  backgroundColor: '#25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.12)',
                  transition: 'transform 0.2s ease'
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </div>
            </div>

            {/* Payment & Security Logos matching reference */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'nowrap' }}>
              {/* UPI Logo */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: '#FFFFFF',
                  padding: '3px 7px',
                  borderRadius: '4px',
                  border: '1px solid #E6DEC9',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}
              >
                <span style={{ fontSize: '0.74rem', fontWeight: 800, fontStyle: 'italic', color: '#1B2C20', letterSpacing: '-0.02em', lineHeight: 1 }}>
                  UPI
                </span>
                <span style={{ display: 'inline-flex', marginLeft: '2px' }}>
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2 1L7 6L2 11" stroke="#009A49" strokeWidth="2.2" strokeLinecap="round"/>
                    <path d="M6 1L11 6L6 11" stroke="#F58220" strokeWidth="2.2" strokeLinecap="round"/>
                  </svg>
                </span>
              </div>

              {/* VISA Logo */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: '#FFFFFF',
                  padding: '3px 7px',
                  borderRadius: '4px',
                  border: '1px solid #E6DEC9',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}
              >
                <span style={{ fontSize: '0.74rem', fontWeight: 900, fontStyle: 'italic', color: '#1A1F71', letterSpacing: '-0.02em', lineHeight: 1 }}>
                  VISA
                </span>
              </div>

              {/* Mastercard Logo */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: '#FFFFFF',
                  padding: '3px 7px',
                  borderRadius: '4px',
                  border: '1px solid #E6DEC9',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '13px', height: '13px', borderRadius: '50%', backgroundColor: '#EB001B', marginRight: '-5px' }} />
                  <div style={{ width: '13px', height: '13px', borderRadius: '50%', backgroundColor: '#F79E1B', opacity: 0.95 }} />
                </div>
              </div>

              {/* Divider */}
              <span style={{ color: '#D0C8B8', fontSize: '0.8rem', userSelect: 'none' }}>|</span>

              {/* 100% Secure Payments */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', flexShrink: 0 }}>
                <ShieldCheck size={16} color="#0A3B22" strokeWidth={2.4} />
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0A3B22', whiteSpace: 'nowrap', lineHeight: 1 }}>
                  100% Secure Payments
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Green Copyright Sub-Footer Bar */}
      <div
        style={{
          backgroundColor: '#0B341B',
          color: '#A5D6A7',
          fontSize: '0.74rem',
          padding: '0.85rem 0',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div
          style={{
            maxWidth: '1340px',
            margin: '0 auto',
            padding: '0 clamp(1rem, 3vw, 2.5rem)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}
        >
          <div style={{ fontWeight: 400, color: '#B2D8B9' }}>
            © 2026 Ithazh Organics. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href="#terms"
              onClick={(e) => handlePolicyClick(e, 'Terms & Conditions')}
              style={{ color: '#B2D8B9', textDecoration: 'none', transition: 'color 0.2s ease' }}
            >
              Terms & Conditions
            </a>
            <span style={{ opacity: 0.35, color: '#FFFFFF' }}>|</span>
            <a
              href="#privacy"
              onClick={(e) => handlePolicyClick(e, 'Privacy Policy')}
              style={{ color: '#B2D8B9', textDecoration: 'none', transition: 'color 0.2s ease' }}
            >
              Privacy Policy
            </a>
            <span style={{ opacity: 0.35, color: '#FFFFFF' }}>|</span>
            <a
              href="#disclaimer"
              onClick={(e) => handlePolicyClick(e, 'Disclaimer')}
              style={{ color: '#B2D8B9', textDecoration: 'none', transition: 'color 0.2s ease' }}
            >
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
