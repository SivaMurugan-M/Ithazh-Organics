import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { useReveal } from '../../hooks/useReveal';

export const WhyChooseUs: React.FC = () => {
  const { ref, isRevealed } = useReveal();

  const benefits = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
        </svg>
      ),
      titleEn: 'Quality First',
      titleTa: 'தரத்திற்கு முக்கியத்துவம்'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 3-4 4"/>
          <path d="m14 7 4 4"/>
          <path d="M4 11h16a8 8 0 0 1-16 0z"/>
          <path d="M9 19v2"/>
          <path d="M15 19v2"/>
        </svg>
      ),
      titleEn: 'Traditional Goodness',
      titleTa: 'பாரம்பரிய உணவுகளின் சிறப்பு'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
      titleEn: 'Product Transparency',
      titleTa: 'தெளிவான தயாரிப்பு தகவல்'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      titleEn: 'Customer Trust',
      titleTa: 'வாடிக்கையாளர் நம்பிக்கை'
    }
  ];

  return (
    <section
      id="why-us"
      ref={ref}
      style={{
        backgroundColor: '#FFFDF9',
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
      className={`reveal-init ${isRevealed ? 'reveal-in' : ''}`}
    >
      {/* Decorative Botanical Left Branch */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 'clamp(60px, 8vw, 120px)',
          opacity: 0.85,
          pointerEvents: 'none'
        }}
      >
        <svg viewBox="0 0 100 160" fill="none" style={{ width: '100%', height: 'auto' }}>
          <path d="M0 160 Q 30 110 50 80 Q 70 50 100 0" stroke="#8CA88E" strokeWidth="1.5" />
          <ellipse cx="60" cy="55" rx="18" ry="9" transform="rotate(-35 60 55)" fill="#688A6A" opacity="0.6"/>
          <ellipse cx="40" cy="95" rx="20" ry="10" transform="rotate(25 40 95)" fill="#7A9A7C" opacity="0.6"/>
          <ellipse cx="75" cy="25" rx="14" ry="7" transform="rotate(-40 75 25)" fill="#8CA88E" opacity="0.6"/>
        </svg>
      </div>

      {/* Decorative Botanical Right Branch */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%) scaleX(-1)',
          width: 'clamp(60px, 8vw, 120px)',
          opacity: 0.85,
          pointerEvents: 'none'
        }}
      >
        <svg viewBox="0 0 100 160" fill="none" style={{ width: '100%', height: 'auto' }}>
          <path d="M0 160 Q 30 110 50 80 Q 70 50 100 0" stroke="#8CA88E" strokeWidth="1.5" />
          <ellipse cx="60" cy="55" rx="18" ry="9" transform="rotate(-35 60 55)" fill="#688A6A" opacity="0.6"/>
          <ellipse cx="40" cy="95" rx="20" ry="10" transform="rotate(25 40 95)" fill="#7A9A7C" opacity="0.6"/>
          <ellipse cx="75" cy="25" rx="14" ry="7" transform="rotate(-40 75 25)" fill="#8CA88E" opacity="0.6"/>
        </svg>
      </div>

      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)', position: 'relative', zIndex: 2 }}>
        <SectionHeading
          title="Why Choose Ithazh Organics?"
          align="center"
        />

        {/* 4 Columns Divided by Thin Lines matching reference */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            alignItems: 'center',
            marginTop: '1rem'
          }}
          className="why-grid"
        >
          {benefits.map((item, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '1.25rem 1rem',
                borderRight: index < 3 ? '1px solid #EBE4D5' : 'none',
                position: 'relative'
              }}
            >
              {/* Gold Round Icon Circle */}
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: '#C5952B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.85rem',
                  boxShadow: '0 3px 10px rgba(197, 149, 43, 0.3)'
                }}
              >
                {item.icon}
              </div>

              {/* English Title */}
              <h3
                style={{
                  fontSize: '0.98rem',
                  fontWeight: 700,
                  color: '#063E27',
                  marginBottom: '0.25rem',
                  fontFamily: 'var(--font-sans)'
                }}
              >
                {item.titleEn}
              </h3>

              {/* Tamil Subtitle */}
              <span
                style={{
                  fontFamily: 'var(--font-tamil)',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  color: '#4A5B50'
                }}
              >
                {item.titleTa}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
