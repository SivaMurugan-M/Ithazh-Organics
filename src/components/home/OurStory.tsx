import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

export const OurStory: React.FC = () => {
  const { ref, isRevealed } = useReveal();

  return (
    <section
      id="story"
      ref={ref}
      style={{
        backgroundColor: '#FAF5EB',
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
        borderTop: '1px solid #ECE2D0',
        borderBottom: '1px solid #ECE2D0',
        position: 'relative'
      }}
      className={`reveal-init ${isRevealed ? 'reveal-in' : ''}`}
    >
      <div style={{ maxWidth: '1340px', margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>
        {/* 3-Column Split matching reference image */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.25fr 1fr',
            alignItems: 'center',
            gap: '1.25rem',
            borderRadius: '20px',
            overflow: 'hidden'
          }}
          className="story-grid"
        >
          {/* Left Photo: Ghee Pouring */}
          <div
            style={{
              height: '240px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 14px rgba(0,0,0,0.08)'
            }}
          >
            <img
              src="/assets/story/story-ghee.jpg"
              alt="Traditional Ghee Pouring"
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Center Story Content */}
          <div
            style={{
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            {/* Top Gold Subtitle */}
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.16em',
                color: '#BA8E2B',
                textTransform: 'uppercase',
                marginBottom: '0.4rem'
              }}
            >
              OUR STORY
            </span>

            {/* Heading */}
            <h3
              style={{
                fontSize: 'clamp(1.2rem, 1.8vw, 1.6rem)',
                fontWeight: 700,
                color: '#063E27',
                lineHeight: 1.25,
                marginBottom: '0.85rem'
              }}
            >
              Our Roots. Our Values.<br />Our Ithazh.
            </h3>

            {/* Tamil Paragraph 1 */}
            <p
              style={{
                fontFamily: 'var(--font-tamil)',
                fontSize: '0.84rem',
                color: '#28362D',
                lineHeight: 1.65,
                marginBottom: '0.65rem'
              }}
            >
              மண்ணின் மணத்தையும், பாரம்பரிய உணவுகளின் சிறப்பையும் உங்கள் இல்லங்களுக்கு கொண்டு சேர்ப்பதே இதழ் ஆர்கானிக்ஸின் நோக்கம்.
            </p>

            {/* Tamil Paragraph 2 */}
            <p
              style={{
                fontFamily: 'var(--font-tamil)',
                fontSize: '0.84rem',
                color: '#28362D',
                lineHeight: 1.65,
                marginBottom: '1.25rem'
              }}
            >
              தரம், வெளிப்படைத்தன்மை மற்றும் வாடிக்கையாளர் நம்பிக்கையை அடிப்படையாகக் கொண்டு, அன்றாட வாழ்க்கைக்குத் தேவையான உணவுப் பொருட்களை உங்களிடம் கொண்டு சேர்க்கிறோம்.
            </p>

            {/* Our Story Button */}
            <a
              href="#shop"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                backgroundColor: '#063E27',
                color: '#FFFFFF',
                padding: '0.55rem 1.4rem',
                borderRadius: '9999px',
                fontSize: '0.82rem',
                fontWeight: 700,
                boxShadow: '0 3px 10px rgba(6, 62, 39, 0.25)',
                textDecoration: 'none'
              }}
            >
              <span>Our Story</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Right Photo: Seedling in Hand */}
          <div
            style={{
              height: '240px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 14px rgba(0,0,0,0.08)'
            }}
          >
            <img
              src="/assets/story/story-seedling.jpg"
              alt="Hands Holding Sprout Seedling"
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
