import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, FilterX } from 'lucide-react';
import { products } from '../../data/products';
import { ProductCard } from '../common/ProductCard';
import { SectionHeading } from '../common/SectionHeading';
import { useCart } from '../../context/CartContext';
import { translations } from '../../data/translations';
import { useReveal } from '../../hooks/useReveal';

export const FeaturedProducts: React.FC = () => {
  const { language, selectedCategory, setSelectedCategory, searchQuery, setSearchQuery } = useCart();
  const [showAll, setShowAll] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { ref, isRevealed } = useReveal();

  const t = translations[language].featured;

  // Filter products based on search query and selected category
  const filteredProducts = products.filter((prod) => {
    const matchesCategory = selectedCategory ? prod.category === selectedCategory : true;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch = q
      ? prod.name.toLowerCase().includes(q) ||
        prod.nameTa.includes(q) ||
        (prod.description && prod.description.toLowerCase().includes(q)) ||
        (prod.descriptionTa && prod.descriptionTa.includes(q))
      : true;
    return matchesCategory && matchesSearch;
  });

  // Display first 6 products in default view to match the exact 6-card row from reference
  const displayedProducts = (showAll || selectedCategory || searchQuery.trim())
    ? filteredProducts
    : filteredProducts.slice(0, 6);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  const clearAllFilters = () => {
    setSelectedCategory(null);
    setSearchQuery('');
  };

  return (
    <section
      id="shop"
      ref={ref}
      style={{
        backgroundColor: '#FFFDF9',
        paddingTop: '3.5rem',
        paddingBottom: '4.5rem',
        position: 'relative'
      }}
      className={`reveal-init ${isRevealed ? 'reveal-in' : ''}`}
    >
      <div style={{ maxWidth: '1340px', margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>
        {/* Top Header Row with Title and View All Button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            marginBottom: '1.5rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          {/* Section Heading Centered */}
          <div style={{ flex: 1, textAlign: 'center' }}>
            <SectionHeading
              title={t.title}
              align="center"
            />
          </div>

          {/* View All Products button (Top right as shown in reference) */}
          <button
            onClick={() => setShowAll(!showAll)}
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              backgroundColor: '#FFFFFF',
              color: '#063E27',
              padding: '0.45rem 1.15rem',
              borderRadius: '9999px',
              border: '1.5px solid #BA8E2B',
              fontSize: '0.82rem',
              fontWeight: 700,
              boxShadow: '0 2px 6px rgba(186, 142, 43, 0.15)',
              cursor: 'pointer'
            }}
          >
            <span>{showAll ? t.viewLess : t.viewAll}</span>
            <ArrowRight size={14} color="#BA8E2B" />
          </button>
        </div>

        {/* Filter / Search Info bar if active */}
        {(selectedCategory || searchQuery.trim()) && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#FFF6E2',
              border: '1px solid #BA8E2B',
              padding: '0.6rem 1.25rem',
              borderRadius: '12px',
              marginBottom: '1.5rem',
              fontSize: '0.85rem'
            }}
          >
            <span>
              {selectedCategory && (
                <strong>
                  Category: {selectedCategory.toUpperCase()} &nbsp;
                </strong>
              )}
              {searchQuery && (
                <span>Matching &ldquo;{searchQuery}&rdquo; &nbsp;</span>
              )}
              ({filteredProducts.length} items found)
            </span>
            <button
              onClick={clearAllFilters}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: '#063E27',
                fontWeight: 700,
                fontSize: '0.82rem',
                cursor: 'pointer'
              }}
            >
              <FilterX size={15} />
              <span>Reset Filter</span>
            </button>
          </div>
        )}

        {/* Products Row Wrapper with Left and Right Arrows on edges */}
        <div style={{ position: 'relative' }}>
          {/* Left Arrow Button */}
          <button
            onClick={handleScrollLeft}
            aria-label="Previous Products"
            style={{
              position: 'absolute',
              left: '-18px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: '#A87C22',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 3px 10px rgba(0,0,0,0.2)',
              zIndex: 10,
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Products Container */}
          <div
            ref={scrollContainerRef}
            style={{
              display: 'grid',
              gridTemplateColumns: showAll
                ? 'repeat(auto-fill, minmax(185px, 1fr))'
                : 'repeat(6, minmax(160px, 1fr))',
              gap: '0.85rem',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              padding: '0.5rem 0'
            }}
          >
            {displayedProducts.length > 0 ? (
              displayedProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))
            ) : (
              <div
                style={{
                  gridColumn: '1 / -1',
                  textAlign: 'center',
                  padding: '3rem 1rem',
                  backgroundColor: '#FCFAF4',
                  borderRadius: '16px',
                  border: '1px dashed #D8CDB6'
                }}
              >
                <p style={{ color: '#576359', fontSize: '0.95rem', marginBottom: '1rem' }}>
                  {t.noResults}
                </p>
                <button onClick={clearAllFilters} className="btn-primary" style={{ fontSize: '0.85rem' }}>
                  View All Featured Items
                </button>
              </div>
            )}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleScrollRight}
            aria-label="Next Products"
            style={{
              position: 'absolute',
              right: '-18px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: '#A87C22',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 3px 10px rgba(0,0,0,0.2)',
              zIndex: 10,
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
