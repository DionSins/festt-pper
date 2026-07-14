'use client'

import { carpets } from '@/data/carpets'

export default function CarpetCatalog() {
  // Group carpets by name
  const carpetGroups = carpets.reduce((acc, carpet) => {
    const key = carpet.name
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(carpet)
    return acc
  }, {} as Record<string, typeof carpets>)

  return (
    <section id="catalog" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Our Mediterranean Carpets</h2>
        <p style={styles.description}>
          Each carpet is carefully selected to bring the warmth and beauty of the Mediterranean to your event.
        </p>

        <div style={styles.catalogGrid}>
          {Object.entries(carpetGroups).map(([name, group]) => {
            // Get the image URL based on carpet name
            let imageUrl = ''
            if (name === 'Crimson Dream') {
              imageUrl = 'https://images.unsplash.com/photo-1565182999555-9203341cdc98?w=500&h=400&fit=crop'
            } else if (name === 'Azure Elegance') {
              imageUrl = 'https://images.unsplash.com/photo-1577720643272-265e434ff562?w=500&h=400&fit=crop'
            } else if (name === 'Desert Oasis') {
              imageUrl = 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=400&fit=crop'
            }

            return (
              <div key={name} style={styles.carpetCard}>
                <div style={styles.imageWrapper}>
                  <img
                    src={imageUrl}
                    alt={name}
                    style={styles.carpetImage}
                  />
                </div>

                <div style={styles.carpetHeader}>
                  <h3 style={styles.carpetName}>{name}</h3>
                  <p style={styles.carpetPattern}>{group[0].pattern}</p>
                </div>

                <p style={styles.carpetDescription}>{group[0].description}</p>

                <div style={styles.sizeOptions}>
                  {group.map((carpet) => (
                    <div key={carpet.id} style={styles.sizeOption}>
                      <span style={styles.sizeLabel}>{carpet.size.charAt(0).toUpperCase() + carpet.size.slice(1)}</span>
                      <span style={styles.sizePrice}>kr. {carpet.price}</span>
                    </div>
                  ))}
                </div>

                <button style={styles.inquireBtn}>Inquire Now</button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '4rem 1rem',
    background: 'white',
  } as React.CSSProperties,
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  } as React.CSSProperties,
  heading: {
    fontSize: '2.5rem',
    color: '#c41e3a',
    marginBottom: '1rem',
    textAlign: 'center',
  } as React.CSSProperties,
  description: {
    fontSize: '1.1rem',
    color: '#666',
    textAlign: 'center',
    marginBottom: '3rem',
    maxWidth: '600px',
    margin: '0 auto 3rem',
  } as React.CSSProperties,
  catalogGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  } as React.CSSProperties,
  carpetCard: {
    border: '2px solid #d4a574',
    borderRadius: '8px',
    padding: '0',
    background: '#fafafa',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  } as React.CSSProperties,
  imageWrapper: {
    width: '100%',
    height: '250px',
    overflow: 'hidden',
    background: '#e0e0e0',
  } as React.CSSProperties,
  carpetImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  } as React.CSSProperties,
  carpetHeader: {
    marginBottom: '0.5rem',
    padding: '1.5rem 1.5rem 0 1.5rem',
  } as React.CSSProperties,
  carpetName: {
    fontSize: '1.5rem',
    color: '#c41e3a',
    margin: '0 0 0.5rem 0',
  } as React.CSSProperties,
  carpetPattern: {
    fontSize: '0.9rem',
    color: '#8b6f47',
    margin: 0,
    fontStyle: 'italic',
  } as React.CSSProperties,
  carpetDescription: {
    color: '#555',
    fontSize: '0.95rem',
    marginBottom: '1rem',
    lineHeight: '1.5',
    padding: '0 1.5rem',
  } as React.CSSProperties,
  sizeOptions: {
    display: 'grid',
    gap: '0.5rem',
    marginBottom: '1.5rem',
    padding: '0 1.5rem',
  } as React.CSSProperties,
  sizeOption: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.75rem',
    background: 'white',
    borderRadius: '4px',
    border: '1px solid #e0e0e0',
  } as React.CSSProperties,
  sizeLabel: {
    fontWeight: '600',
    color: '#333',
  } as React.CSSProperties,
  sizePrice: {
    color: '#c41e3a',
    fontWeight: 'bold',
  } as React.CSSProperties,
  inquireBtn: {
    width: 'calc(100% - 3rem)',
    margin: '0 1.5rem 1.5rem 1.5rem',
    padding: '0.75rem',
    background: '#c41e3a',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'background 0.3s',
    cursor: 'pointer',
  } as React.CSSProperties,
}
