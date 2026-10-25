import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Newsletter: React.FC = () => {
  const { addToast } = useCart();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubscribed(true);
    addToast('Thank you for subscribing to Ithazh Organics!', 'success');
    setEmail('');
    setTimeout(() => {
      setIsSubscribed(false);
    }, 4000);
  };

  return (
    <section
      style={{
        backgroundColor: '#16331C',
        color: '#FFFFFF',
        padding: '1.25rem 0',
        position: 'relative'
      }}
    >
      <div
        style={{
          maxWidth: '1340px',
          margin: '0 auto',
          padding: '0 clamp(1rem, 3vw, 2.5rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.25rem'
        }}
      >
        {/* Left Title & Icon matching reference */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              border: '1.5px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <Mail size={22} color="#FFFFFF" strokeWidth={1.75} />
          </div>
          <div>
            <h3
              style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                color: '#FFFFFF',
                margin: '0 0 2px',
                lineHeight: 1.2
              }}
            >
              Get Updates & Offers
            </h3>
            <p
              style={{
                fontSize: '0.78rem',
                color: '#C6D8CA',
                margin: 0
              }}
            >
              Subscribe to our newsletter and stay connected with our organic journey.
            </p>
          </div>
        </div>

        {/* Right Input Form matching reference */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: '6px',
            overflow: 'hidden',
            width: '100%',
            maxWidth: '440px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '0.82rem',
              color: '#16331C',
              padding: '0.65rem 0.9rem',
              backgroundColor: 'transparent'
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#D49B24',
              color: '#FFFFFF',
              padding: '0.65rem 1.4rem',
              border: 'none',
              fontWeight: 700,
              fontSize: '0.82rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            {isSubscribed && <CheckCircle2 size={14} />}
            <span>{isSubscribed ? 'Subscribed' : 'Subscribe'}</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
