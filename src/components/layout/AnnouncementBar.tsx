import React from 'react';
import { Leaf, Truck, User, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { translations } from '../../data/translations';

export const AnnouncementBar: React.FC = () => {
  const { language, toggleLanguage, totalItems, setIsCartOpen, addToast } = useCart();
  const t = translations[language].announcement;

  const handleLoginClick = () => {
    addToast(
      language === 'ta'
        ? 'உள்நுழைவு வசதி விரைவில் வரவுள்ளது (டெமோ பயன்முறை).'
        : 'Customer login feature is in demo mode.',
      'info'
    );
  };

  return (
    <div
      style={{
        backgroundColor: '#0F381E',
        color: '#FFFFFF',
        fontSize: '0.75rem',
        fontWeight: 500,
        letterSpacing: '0.01em',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        zIndex: 1001,
        height: '36px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1340px',
          margin: '0 auto',
          padding: '0 clamp(1rem, 3vw, 2.5rem)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'nowrap'
        }}
      >
        {/* Left Trust Items */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(1rem, 2.2vw, 1.85rem)',
            flexShrink: 0
          }}
        >
          {/* Item 1: 100% Traditional Foods */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              lineHeight: 1
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '15px',
                height: '15px',
                flexShrink: 0
              }}
            >
              <Leaf size={14} color="#A3D977" strokeWidth={2.2} />
            </span>
            <span
              style={{
                color: '#FFFFFF',
                fontWeight: 500,
                fontSize: '0.75rem',
                lineHeight: 1,
                whiteSpace: 'nowrap'
              }}
            >
              {t.tradition}
            </span>
          </div>

          {/* Item 2: Safe & Secure Delivery */}
          <div
            className="hide-on-mobile"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              lineHeight: 1
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '15px',
                height: '15px',
                flexShrink: 0
              }}
            >
              <Truck size={14} color="#FFFFFF" strokeWidth={2.2} />
            </span>
            <span
              style={{
                color: '#FFFFFF',
                fontWeight: 500,
                fontSize: '0.75rem',
                lineHeight: 1,
                whiteSpace: 'nowrap'
              }}
            >
              {t.delivery}
            </span>
          </div>

          {/* Item 3: No Harmful Additives (Leaf icon matching reference) */}
          <div
            className="hide-on-mobile"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              lineHeight: 1
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '15px',
                height: '15px',
                flexShrink: 0
              }}
            >
              <Leaf size={14} color="#A3D977" strokeWidth={2.2} />
            </span>
            <span
              style={{
                color: '#FFFFFF',
                fontWeight: 500,
                fontSize: '0.75rem',
                lineHeight: 1,
                whiteSpace: 'nowrap'
              }}
            >
              {t.additives}
            </span>
          </div>
        </div>

        {/* Right Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            flexShrink: 0
          }}
        >
          {/* Language Switcher in reference: "தமிழ் | English" */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: '#FFFFFF',
              fontSize: '0.75rem',
              cursor: 'pointer',
              lineHeight: 1,
              userSelect: 'none'
            }}
            onClick={toggleLanguage}
            title="Switch Language"
          >
            <span
              style={{
                opacity: language === 'ta' ? 1 : 0.75,
                fontWeight: language === 'ta' ? 700 : 400,
                color: '#FFFFFF',
                lineHeight: 1
              }}
            >
              தமிழ்
            </span>
            <span style={{ opacity: 0.35, color: '#FFFFFF', lineHeight: 1 }}>|</span>
            <span
              style={{
                opacity: language === 'en' ? 1 : 0.75,
                fontWeight: language === 'en' ? 700 : 400,
                color: '#FFFFFF',
                lineHeight: 1
              }}
            >
              English
            </span>
          </div>

          {/* Divider between Language and Login */}
          <span style={{ opacity: 0.35, color: '#FFFFFF', fontSize: '0.75rem', lineHeight: 1, userSelect: 'none' }}>
            |
          </span>

          {/* Login Button */}
          <button
            onClick={handleLoginClick}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: '#FFFFFF',
              fontSize: '0.75rem',
              fontWeight: 500,
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: 0,
              margin: 0,
              fontFamily: 'inherit',
              lineHeight: 1
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '14px',
                height: '14px',
                flexShrink: 0
              }}
            >
              <User size={14} color="#FFFFFF" strokeWidth={2.2} />
            </span>
            <span style={{ lineHeight: 1 }}>{t.login}</span>
          </button>

          {/* Divider between Login and Cart */}
          <span style={{ opacity: 0.35, color: '#FFFFFF', fontSize: '0.75rem', lineHeight: 1, userSelect: 'none' }}>
            |
          </span>

          {/* Cart Icon with Red Count Badge matching reference */}
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label={`Open Cart (${totalItems} items)`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: 'none',
              padding: 0,
              margin: 0,
              cursor: 'pointer',
              position: 'relative',
              lineHeight: 1,
              width: '24px',
              height: '20px'
            }}
          >
            <ShoppingCart size={16} color="#BA8E2B" strokeWidth={2.2} />
            <span
              style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                backgroundColor: '#E53935',
                color: '#FFFFFF',
                fontSize: '0.62rem',
                fontWeight: 800,
                borderRadius: '50%',
                width: '14px',
                height: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                lineHeight: 1,
                boxShadow: '0 1px 3px rgba(0,0,0,0.35)'
              }}
            >
              {totalItems}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
