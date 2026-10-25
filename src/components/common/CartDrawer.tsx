import React, { useEffect, useRef } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { translations } from '../../data/translations';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    totalItems,
    language,
    addToast
  } = useCart();

  const drawerRef = useRef<HTMLDivElement>(null);
  const t = translations[language];

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartOpen) {
        setIsCartOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, setIsCartOpen]);

  // Lock body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
      drawerRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  const handleCheckoutDemo = () => {
    addToast(
      language === 'ta'
        ? 'இது டெமோ தளம் மட்டுமே. உண்மையான கட்டண வசதி தற்போது இணைக்கப்படவில்லை.'
        : 'Demo store: Ordering simulation complete! No payment was processed.',
      'info'
    );
  };

  const freeShippingThreshold = 799;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(5, 46, 30, 0.65)',
          backdropFilter: 'blur(3px)',
          zIndex: 9998,
          opacity: isCartOpen ? 1 : 0,
          pointerEvents: isCartOpen ? 'auto' : 'none',
          transition: 'opacity 0.35s ease'
        }}
        aria-hidden="true"
      />

      {/* Slide-in Drawer */}
      <aside
        ref={drawerRef}
        tabIndex={-1}
        role="dialog"
        aria-label="Shopping Cart"
        aria-modal="true"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          maxWidth: '440px',
          backgroundColor: '#FFFFFF',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-8px 0 32px rgba(6, 62, 39, 0.25)',
          transform: isCartOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          outline: 'none'
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            backgroundColor: 'var(--color-primary-green)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '2px solid var(--color-gold)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <ShoppingBag size={22} color="var(--color-gold)" />
            <h2
              style={{
                fontSize: '1.25rem',
                margin: 0,
                color: '#FFF6E2',
                fontWeight: 700
              }}
            >
              {t.cart.title} ({totalItems})
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
            style={{
              color: '#FFF6E2',
              display: 'flex',
              padding: '6px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.1)'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div
          style={{
            padding: '0.85rem 1.5rem',
            backgroundColor: '#FCFAF4',
            borderBottom: '1px solid #EFE6D2'
          }}
        >
          <div
            style={{
              fontSize: '0.8rem',
              color: 'var(--color-primary-green)',
              fontWeight: 600,
              marginBottom: '0.35rem',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <span>
              {subtotal >= freeShippingThreshold
                ? (language === 'ta' ? '🎉 இலவச டெலிவரி கிடைத்துவிட்டது!' : '🎉 Free Delivery Unlocked!')
                : (language === 'ta'
                    ? `இலவச டெலிவரிக்கு இன்னும் ₹${freeShippingThreshold - subtotal} சேர்க்கவும்`
                    : `Add ₹${freeShippingThreshold - subtotal} more for Free Delivery`)}
            </span>
            <span>{progressPercent}%</span>
          </div>
          <div
            style={{
              height: '6px',
              backgroundColor: '#EAE1CE',
              borderRadius: '3px',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${progressPercent}%`,
                backgroundColor: 'var(--color-gold)',
                transition: 'width 0.4s ease'
              }}
            />
          </div>
        </div>

        {/* Cart Item List / Empty State */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {cart.length === 0 ? (
            <div
              style={{
                margin: 'auto',
                textAlign: 'center',
                padding: '2rem 1rem'
              }}
            >
              <div
                style={{
                  width: '76px',
                  height: '76px',
                  borderRadius: '50%',
                  backgroundColor: '#FFF6E2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem',
                  border: '1px solid rgba(186, 142, 43, 0.3)'
                }}
              >
                <ShoppingBag size={34} color="var(--color-gold)" />
              </div>
              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--color-dark-green)',
                  marginBottom: '0.5rem'
                }}
              >
                {t.cart.empty}
              </h3>
              <p
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--color-text-muted)',
                  marginBottom: '1.5rem',
                  lineHeight: 1.5
                }}
              >
                {t.cart.emptySub}
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  const shopSec = document.getElementById('shop');
                  shopSec?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary"
                style={{ fontSize: '0.88rem', padding: '0.75rem 1.4rem' }}
              >
                {t.cart.startShopping}
              </button>
            </div>
          ) : (
            <>
              {cart.map((item) => {
                const name = language === 'ta' ? item.product.nameTa : item.product.name;
                return (
                  <div
                    key={item.product.id}
                    style={{
                      display: 'flex',
                      gap: '0.85rem',
                      padding: '0.85rem',
                      borderRadius: '12px',
                      backgroundColor: '#FCFAF4',
                      border: '1px solid rgba(186, 142, 43, 0.2)',
                      alignItems: 'center'
                    }}
                  >
                    <img
                      src={item.product.image}
                      alt={name}
                      style={{
                        width: '64px',
                        height: '64px',
                        objectFit: 'contain',
                        backgroundColor: '#FFFFFF',
                        borderRadius: '8px',
                        padding: '4px',
                        border: '1px solid #ECE3D0'
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <h4
                        style={{
                          fontSize: '0.95rem',
                          fontWeight: 700,
                          margin: '0 0 2px',
                          color: 'var(--color-dark-green)'
                        }}
                      >
                        {name}
                      </h4>
                      <span
                        style={{
                          fontSize: '0.78rem',
                          color: 'var(--color-text-muted)'
                        }}
                      >
                        {item.product.weight}
                      </span>
                      <div
                        style={{
                          fontSize: '0.95rem',
                          fontWeight: 700,
                          color: 'var(--color-primary-green)',
                          marginTop: '4px'
                        }}
                      >
                        ₹ {item.product.price}
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        gap: '6px'
                      }}
                    >
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        aria-label={`Remove ${name} from cart`}
                        style={{
                          color: '#A65353',
                          padding: '3px'
                        }}
                      >
                        <Trash2 size={16} />
                      </button>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #D8CDB6',
                          borderRadius: '20px',
                          padding: '2px 6px'
                        }}
                      >
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          style={{
                            padding: '2px',
                            color: 'var(--color-dark-green)'
                          }}
                        >
                          <Minus size={13} />
                        </button>
                        <span
                          style={{
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            minWidth: '18px',
                            textAlign: 'center'
                          }}
                        >
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                          style={{
                            padding: '2px',
                            color: 'var(--color-dark-green)'
                          }}
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}

              <button
                onClick={clearCart}
                style={{
                  alignSelf: 'flex-end',
                  fontSize: '0.78rem',
                  color: 'var(--color-text-muted)',
                  textDecoration: 'underline',
                  padding: '4px'
                }}
              >
                {language === 'ta' ? 'கூடையைக் காலிசெய்' : 'Clear Cart'}
              </button>
            </>
          )}
        </div>

        {/* Drawer Footer (Subtotal & Demo Checkout) */}
        {cart.length > 0 && (
          <div
            style={{
              padding: '1.25rem 1.5rem',
              backgroundColor: '#FCFAF4',
              borderTop: '1px solid #EBE2CC'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--color-text-dark)',
                marginBottom: '0.5rem'
              }}
            >
              <span>{t.cart.subtotal}:</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-dark-green)' }}>
                ₹ {subtotal}
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.75rem',
                color: 'var(--color-text-muted)',
                marginBottom: '1rem'
              }}
            >
              <ShieldCheck size={16} color="var(--color-primary-green)" />
              <span>{t.cart.demoNotice}</span>
            </div>

            <button
              onClick={handleCheckoutDemo}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                backgroundColor: 'var(--color-primary-green)',
                color: '#FFFFFF',
                padding: '0.9rem',
                borderRadius: '9999px',
                fontSize: '0.95rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                boxShadow: '0 4px 16px rgba(6, 62, 39, 0.25)'
              }}
            >
              <span>{t.cart.checkout}</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </aside>
    </>
  );
};
