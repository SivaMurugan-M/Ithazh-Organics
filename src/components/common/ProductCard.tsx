import React, { useState } from 'react';
import { ShoppingCart, Star, Check } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { translations } from '../../data/translations';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, language, setIsCartOpen } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const t = translations[language];
  const displayName = language === 'ta' ? product.nameTa : product.name;

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product, 1);
    setTimeout(() => {
      setIsAdding(false);
      setIsCartOpen(true);
    }, 400);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: '#FFFDF9',
        borderRadius: '16px',
        border: '1px solid #ECE4D4',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: isHovered
          ? '0 12px 24px rgba(6, 62, 39, 0.1)'
          : '0 2px 8px rgba(6, 62, 39, 0.04)',
        height: '100%',
        padding: '0.65rem 0.65rem 0.85rem'
      }}
    >
      {/* Product Image Area */}
      <div
        style={{
          backgroundColor: '#FAF6EE',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '145px',
          overflow: 'hidden',
          position: 'relative',
          padding: '0.4rem'
        }}
      >
        <img
          src={product.image}
          alt={displayName}
          loading="lazy"
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'contain',
            transition: 'transform 0.35s ease',
            transform: isHovered ? 'scale(1.06)' : 'scale(1)'
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Crect width='160' height='160' fill='%23FAF6EE'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='serif' fill='%23063E27' font-size='14'%3E" +
              encodeURIComponent(displayName) +
              "%3C/text%3E%3C/svg%3E";
          }}
        />
      </div>

      {/* Product Information */}
      <div
        style={{
          paddingTop: '0.65rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          flex: 1
        }}
      >
        {/* Title */}
        <h3
          style={{
            fontSize: '0.98rem',
            fontWeight: 700,
            color: '#063E27',
            margin: '0 0 0.15rem',
            lineHeight: 1.25
          }}
        >
          {displayName}
        </h3>

        {/* Weight */}
        <span
          style={{
            fontSize: '0.78rem',
            color: '#7C8B80',
            marginBottom: '0.35rem',
            fontWeight: 500
          }}
        >
          {product.weight}
        </span>

        {/* 5 Golden Stars & Review Count */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2px',
            marginBottom: '0.45rem'
          }}
        >
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              fill="#D49B24"
              color="#D49B24"
              strokeWidth={1}
            />
          ))}
          <span
            style={{
              fontSize: '0.72rem',
              color: '#8A978E',
              marginLeft: '3px'
            }}
          >
            ({product.reviewCount})
          </span>
        </div>

        {/* Rupee Price */}
        <div
          style={{
            fontSize: '1.15rem',
            fontWeight: 800,
            color: '#063E27',
            marginBottom: '0.75rem'
          }}
        >
          ₹ {product.price}
        </div>

        {/* Full-width Add to Cart Button */}
        <button
          onClick={handleAdd}
          style={{
            width: '100%',
            marginTop: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.45rem',
            backgroundColor: isAdding ? '#042A19' : '#063E27',
            color: '#FFFFFF',
            padding: '0.62rem 0.5rem',
            borderRadius: '9999px',
            fontSize: '0.76rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            transition: 'background-color 0.2s, transform 0.15s, box-shadow 0.2s',
            boxShadow: isHovered
              ? '0 4px 12px rgba(6, 62, 39, 0.25)'
              : '0 2px 6px rgba(6, 62, 39, 0.12)'
          }}
          aria-label={`Add ${displayName} to cart`}
        >
          {isAdding ? (
            <>
              <Check size={14} />
              <span>Added!</span>
            </>
          ) : (
            <>
              <ShoppingCart size={14} />
              <span>{t.featured.addToCart}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
