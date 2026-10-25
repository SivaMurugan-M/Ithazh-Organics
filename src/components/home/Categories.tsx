import React from 'react';
import { ArrowRight } from 'lucide-react';
import { categories } from '../../data/categories';
import { useCart } from '../../context/CartContext';
import { useReveal } from '../../hooks/useReveal';

export const Categories: React.FC = () => {
  const { language, selectedCategory, setSelectedCategory } = useCart();
  const { ref, isRevealed } = useReveal();

  const handleCategoryClick = (catId: string) => {
    setSelectedCategory(selectedCategory === catId ? null : catId);
    const shopEl = document.getElementById('shop');
    shopEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="categories"
      ref={ref}
      style={{
        backgroundColor: '#FAF5EB',
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
        borderBottom: '1px solid #ECE2D0'
      }}
      className={`reveal-init ${isRevealed ? 'reveal-in' : ''}`}
    >
      <div style={{ maxWidth: '1340px', margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>
        {/* Horizontal Category Strip matching reference */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '1rem',
            alignItems: 'start',
            overflowX: 'auto',
            paddingBottom: '0.25rem',
            scrollbarWidth: 'none'
          }}
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const displayName = language === 'ta' ? cat.nameTa : cat.name;

            return (
              <div
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCategoryClick(cat.id);
                  }
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  cursor: 'pointer',
                  padding: '0.4rem',
                  borderRadius: '16px',
                  backgroundColor: isSelected ? 'rgba(186, 142, 43, 0.12)' : 'transparent',
                  transition: 'transform 0.2s ease',
                  outline: 'none',
                  minWidth: '85px'
                }}
              >
                {/* Circular Photo matching reference */}
                <div
                  style={{
                    width: 'clamp(74px, 7.8vw, 98px)',
                    height: 'clamp(74px, 7.8vw, 98px)',
                    borderRadius: '50%',
                    padding: '3px',
                    border: isSelected
                      ? '2.5px solid #063E27'
                      : '1.5px solid rgba(186, 142, 43, 0.35)',
                    boxShadow: isSelected
                      ? '0 6px 14px rgba(6, 62, 39, 0.2)'
                      : '0 3px 8px rgba(6, 62, 39, 0.06)',
                    overflow: 'hidden',
                    backgroundColor: '#FAF5EB',
                    transition: 'transform 0.25s ease',
                    marginBottom: '0.5rem'
                  }}
                  className="cat-circle"
                >
                  <img
                    src={cat.image}
                    alt={displayName}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '50%'
                    }}
                  />
                </div>

                {/* Category Label */}
                <span
                  style={{
                    fontSize: 'clamp(0.78rem, 0.95vw, 0.88rem)',
                    fontWeight: 700,
                    color: isSelected ? '#063E27' : '#1A2E20',
                    lineHeight: 1.25,
                    marginBottom: '0.35rem',
                    minHeight: '2.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {displayName}
                </span>

                {/* Small Gold Arrow Circle Button */}
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: isSelected ? '#063E27' : '#BA8E2B',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
                    transition: 'background-color 0.2s'
                  }}
                >
                  <ArrowRight size={11} strokeWidth={2.5} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
