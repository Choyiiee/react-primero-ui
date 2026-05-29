import React, { useState } from 'react';
import { menuItems, categories } from '../data/menuData'; // Cleanly pulled from your data folder!

export default function Menu() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeFilter);

  return (
    <div className="menu-standalone-section" style={{ background: '#0c0908', padding: '6rem 2rem', position: 'relative', overflow: 'hidden' }}>
      {/* Editorial Title Header */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 4rem auto', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--color-white)', fontSize: '2.5rem', fontWeight: '400', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Crafted Perfection
        </h2>
        <p style={{ color: '#a89e94', maxWidth: '600px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.6' }}>
          Explore our intentionally curated collection of hand-selected single-origin espresso creations, seasonal cold brews, and freshly baked pairings.
        </p>
      </div>

      {/* Luxury Minimalist Filter Navigation Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            style={{
              background: activeFilter === cat.id ? 'var(--color-accent-gold)' : 'transparent',
              color: activeFilter === cat.id ? '#120e0c' : '#c4b9ae',
              border: activeFilter === cat.id ? '1px solid var(--color-accent-gold)' : '1px solid rgba(195, 163, 122, 0.2)',
              padding: '10px 24px',
              borderRadius: '30px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: '500',
              letterSpacing: '0.5px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Premium Multi-Column Grid Display */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
        gap: '2.5rem' 
      }}>
        {filteredItems.map((item) => (
          <div 
            key={item.id}
            style={{
              background: '#14100e',
              border: '1px solid rgba(195, 163, 122, 0.1)',
              borderRadius: '20px',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column'
            }}
            className="menu-item-card-hover"
          >
            {/* Image Frame Wrapper */}
            <div style={{ width: '100%', height: '240px', overflow: 'hidden', position: 'relative' }}>
              <img 
                src={item.image} 
                alt={item.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                className="menu-item-img"
              />
              <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', gap: '0.5rem' }}>
                {item.tags.map((tag, i) => (
                  <span key={i} style={{ background: 'rgba(12, 9, 8, 0.85)', color: 'var(--color-accent-gold)', border: '1px solid rgba(195, 163, 122, 0.4)', padding: '4px 10px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.5px' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Typography Content Card Details */}
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem' }}>
                <h3 style={{ color: 'var(--color-white)', fontSize: '1.25rem', fontWeight: '500', margin: 0 }}>
                  {item.name}
                </h3>
                <span style={{ color: 'var(--color-accent-gold)', fontSize: '1.2rem', fontWeight: '600' }}>
                  {item.price}
                </span>
              </div>
              <p style={{ color: '#a89e94', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}