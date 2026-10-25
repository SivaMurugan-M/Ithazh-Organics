import React from 'react';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        backgroundColor: '#F5EBCF',
        overflow: 'hidden',
        width: '100%'
      }}
    >
      {/* Hero Banner Composition */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1340px',
          margin: '0 auto',
          aspectRatio: '853 / 271',
          minHeight: '260px'
        }}
      >
        <img
          src="/assets/hero/hero-main.jpg"
          alt="Ithazh Organics - Rooted in Tradition"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
          loading="eager"
        />

        {/* Invisible Clickable Hotspots perfectly mapped over SHOP NOW and OUR STORY buttons */}
        <div
          style={{
            position: 'absolute',
            left: '11.8%',
            bottom: '10.5%',
            display: 'flex',
            alignItems: 'center',
            gap: '1%',
            zIndex: 10,
            width: '32%',
            height: '14%'
          }}
        >
          {/* Shop Now Hotspot */}
          <button
            onClick={() => handleScrollTo('shop')}
            aria-label="Shop Now"
            title="Shop Now"
            style={{
              flex: 1.1,
              height: '100%',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '9999px'
            }}
          />

          {/* Our Story Hotspot */}
          <button
            onClick={() => handleScrollTo('story')}
            aria-label="Our Story"
            title="Our Story"
            style={{
              flex: 1.1,
              height: '100%',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '9999px'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
