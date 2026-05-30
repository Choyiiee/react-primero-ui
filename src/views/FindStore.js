import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fixed CSS import path to accurately reflect your new 'styles' folder structure
import '../styles/views/FindStore.css';

// Fix for default Leaflet icon rendering path anomalies inside React compilation builds
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// Custom engine logic to seamlessly pan the map viewport frames when stores are toggled
function ChangeMapView({ center }) {
  const map = useMap();
  map.setView(center, 16, { animate: true });
  return null;
}

export default function FindStore() {
  // Your 4 highly precise, pinpoint verified location vectors mapping coordinates
  const stores = [
    {
      id: 1,
      name: "Primero Coffee - San Fernando Boutique",
      address: "G/F Premium Corporate Center, San Fernando",
      hours: "7:00 AM - 10:00 PM",
      coordinates: [15.070082664043138, 120.647370814707]
    },
    {
      id: 2,
      name: "Primero Roastery - Mexico Hub",
      address: "Km 75 MacArthur Highway, Mexico",
      hours: "8:00 AM - 9:00 PM",
      coordinates: [15.04461921140376, 120.67434411107568]
    },
    {
      id: 3,
      name: "Primero Coffee - Bacolor Reserve",
      address: "Artisan Square, Don Bosco District, Bacolor",
      hours: "7:30 AM - 10:00 PM",
      coordinates: [14.977660420165071, 120.61268658779046]
    },
    {
      id: 4,
      name: "Primero Beachfront - Olongapo Sanctuary",
      address: "Rizal Highway Corner, Subic Bay, Olongapo",
      hours: "6:00 AM - 11:00 PM",
      coordinates: [14.816538748069929, 120.28229938038973]
    }
  ];

  const [activeStore, setActiveStore] = useState(stores[0]);

  // Fixed the syntax bug inside your string template literal path here
  const getDirectionsUrl = (coords) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${coords[0]},${coords[1]}`;
  };

  return (
    <div className="store-standalone-section">
      <div className="store-blur-glow"></div>
      
      <div className="store-container-wrapper">
        {/* Left Side Layout Section Panel: Store Directory Scroller */}
        <div className="store-editorial-panel">
          <h2 className="editorial-title" style={{ color: 'var(--color-white)' }}>
            Our Boutiques
          </h2>
          <p className="editorial-lead" style={{ color: '#a89e94', marginBottom: '1.5rem' }}>
            Find a Primero Coffee sanctuary near you and experience hand-crafted premium perfection.
          </p>

          <div className="store-directory-list">
            {stores.map((store) => (
              <div 
                key={store.id}
                className={`store-directory-card ${activeStore.id === store.id ? 'store-card-active' : ''}`}
                onClick={() => setActiveStore(store)}
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                <div>
                  <h4 style={{ color: 'var(--color-white)', fontSize: '1.1rem', fontWeight: '500' }}>
                    {store.name}
                  </h4>
                  <p style={{ color: '#c4b9ae', fontSize: '0.9rem', marginTop: '0.4rem' }}>
                    {store.address}
                  </p>
                  <p className="store-meta-text">
                    {store.hours}
                  </p>
                </div>

                {/* Built-in Deep Link Cta Button */}
                <a 
                  href={getDirectionsUrl(store.coordinates)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} // Prevents map shifting when simply wanting directions
                  style={{
                    alignSelf: 'flex-start',
                    backgroundColor: 'rgba(195, 163, 122, 0.15)',
                    color: 'var(--color-accent-gold)',
                    border: '1px solid rgba(195, 163, 122, 0.3)',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-accent-gold)';
                    e.currentTarget.style.color = '#120e0c';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(195, 163, 122, 0.15)';
                    e.currentTarget.style.color = 'var(--color-accent-gold)';
                  }}
                >
                  🧭 Open in Maps Application
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Layout Section Panel: Interactive Dark Map Frame */}
        <div className="store-map-surface-card" style={{ height: '550px' }}>
          <MapContainer 
            center={activeStore.coordinates} 
            zoom={16} 
            style={{ width: '100%', height: '100%', borderRadius: '20px' }}
          >
            {/* Premium Theme Integrated Dark Matter Map Tiles Layer */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            
            <ChangeMapView center={activeStore.coordinates} />

            {stores.map((store) => (
              <Marker key={store.id} position={store.coordinates}>
                <Popup>
                  <div style={{ color: '#111', fontFamily: 'sans-serif', padding: '4px' }}>
                    <strong style={{ fontSize: '1rem', display: 'block', marginBottom: '4px' }}>{store.name}</strong>
                    <p style={{ margin: '0 0 12px 0', fontSize: '0.85rem', color: '#555' }}>{store.address}</p>
                    
                    <a 
                      href={getDirectionsUrl(store.coordinates)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: '#111',
                        color: '#fff',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        textDecoration: 'none',
                        display: 'inline-block',
                        textAlign: 'center'
                      }}
                    >
                      Get Navigation Directions
                    </a>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}