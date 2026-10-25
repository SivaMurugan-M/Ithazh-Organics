import React from 'react';
import { Star } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { testimonials } from '../../data/testimonials';
import { useReveal } from '../../hooks/useReveal';

export const Testimonials: React.FC = () => {
  const { ref, isRevealed } = useReveal();

  return (
    <section
      id="testimonials"
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
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)', position: 'relative', zIndex: 2 }}>
        <SectionHeading
          title="What Our Customers Say"
          align="center"
        />

        {/* 3 Testimonial Cards Row matching reference */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
            marginTop: '1.5rem'
          }}
          className="testimonials-grid"
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '1.15rem 1.25rem',
                border: '1px solid #ECE4D4',
                boxShadow: '0 4px 14px rgba(6, 62, 39, 0.04)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.9rem',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
            >
              {/* Circular Avatar Photo */}
              <img
                src={item.avatar}
                alt={item.name}
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '1.5px solid #EBE4D5',
                  flexShrink: 0
                }}
              />

              {/* Text Information */}
              <div style={{ flex: 1 }}>
                {/* 5 Golden Stars */}
                <div style={{ display: 'flex', gap: '2px', marginBottom: '0.35rem' }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      fill="#D49B24"
                      color="#D49B24"
                      strokeWidth={1}
                    />
                  ))}
                </div>

                {/* Tamil Quote */}
                <p
                  style={{
                    fontFamily: 'var(--font-tamil)',
                    fontSize: '0.82rem',
                    color: '#28362D',
                    lineHeight: 1.45,
                    marginBottom: '0.35rem',
                    fontWeight: 500
                  }}
                >
                  &ldquo;{item.commentTa}&rdquo;
                </p>

                {/* Author Info */}
                <span
                  style={{
                    fontSize: '0.74rem',
                    color: '#7C8B80',
                    fontWeight: 600
                  }}
                >
                  - {item.name}, {item.city}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
