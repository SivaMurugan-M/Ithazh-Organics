import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  tag?: string;
  align?: 'center' | 'left';
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  tag,
  align = 'center',
  light = false
}) => {
  return (
    <div
      style={{
        textAlign: align,
        marginBottom: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start'
      }}
    >
      {tag && (
        <span
          style={{
            display: 'inline-block',
            fontSize: '0.8rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: light ? '#E0C068' : 'var(--color-gold)',
            marginBottom: '0.5rem'
          }}
        >
          {tag}
        </span>
      )}

      <h2
        style={{
          fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)',
          color: light ? '#FFF6E2' : 'var(--color-dark-green)',
          lineHeight: 1.25,
          fontWeight: 700,
          margin: 0
        }}
      >
        {title}
      </h2>

      {/* Ornate Gold Divider with Center Leaf */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: align === 'center' ? 'center' : 'flex-start',
          gap: '0.75rem',
          marginTop: '0.75rem',
          width: '100%',
          maxWidth: '240px'
        }}
      >
        <span
          style={{
            flex: 1,
            height: '1px',
            background: 'linear-gradient(to right, transparent, var(--color-gold))'
          }}
        />
        {/* Leaf SVG Ornament */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" fill="var(--color-primary-green)" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
        <span
          style={{
            flex: 1,
            height: '1px',
            background: 'linear-gradient(to left, transparent, var(--color-gold))'
          }}
        />
      </div>

      {subtitle && (
        <p
          style={{
            marginTop: '0.85rem',
            maxWidth: '650px',
            fontSize: '1rem',
            color: light ? '#E8DFCC' : 'var(--color-text-muted)',
            lineHeight: 1.6
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
