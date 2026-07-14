'use client'

import { packages } from '@/data/carpets'

export default function Pricing() {
  const calculateSavings = (quantity: number, discount: number) => {
    const avgPrice = 250 // Average price of a medium carpet
    const originalPrice = quantity * avgPrice
    const discountedPrice = originalPrice * (1 - discount / 100)
    return Math.round(originalPrice - discountedPrice)
  }

  return (
    <section id="packages" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Package Deals</h2>
        <p style={styles.description}>
          Special pricing for larger events. Mix and match carpets to create your perfect ambiance.
        </p>

        <div style={styles.packagesGrid}>
          {packages.map((pkg) => (
            <div key={pkg.id} style={styles.packageCard}>
              <div style={styles.packageHeader}>
                <h3 style={styles.packageName}>{pkg.name}</h3>
                <div style={styles.badge}>{pkg.discount}% Off</div>
              </div>

              <p style={styles.packageDescription}>{pkg.description}</p>

              <div style={styles.savings}>
                <p style={styles.savingsLabel}>Save approximately:</p>
                <p style={styles.savingsAmount}>kr. {calculateSavings(pkg.quantity, pkg.discount)}</p>
              </div>

              <button style={styles.selectBtn}>Select Package</button>
            </div>
          ))}
        </div>

        <div style={styles.customNote}>
          <p>💡 <strong>Custom packages available!</strong> Contact us for tailored solutions for your specific event needs.</p>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '4rem 1rem',
    background: '#fafafa',
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
  packagesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem',
  } as React.CSSProperties,
  packageCard: {
    background: 'white',
    border: '3px solid #c41e3a',
    borderRadius: '8px',
    padding: '2rem',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
    position: 'relative',
  } as React.CSSProperties,
  packageHeader: {
    marginBottom: '1rem',
  } as React.CSSProperties,
  packageName: {
    fontSize: '1.5rem',
    color: '#c41e3a',
    margin: '0 0 0.5rem 0',
  } as React.CSSProperties,
  badge: {
    display: 'inline-block',
    background: '#c41e3a',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
  } as React.CSSProperties,
  packageDescription: {
    color: '#666',
    fontSize: '0.95rem',
    marginBottom: '1.5rem',
  } as React.CSSProperties,
  savings: {
    background: '#f5f1e8',
    padding: '1rem',
    borderRadius: '4px',
    marginBottom: '1.5rem',
  } as React.CSSProperties,
  savingsLabel: {
    margin: 0,
    color: '#666',
    fontSize: '0.9rem',
  } as React.CSSProperties,
  savingsAmount: {
    margin: '0.5rem 0 0 0',
    fontSize: '1.8rem',
    color: '#c41e3a',
    fontWeight: 'bold',
  } as React.CSSProperties,
  selectBtn: {
    width: '100%',
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
  customNote: {
    background: 'white',
    border: '2px solid #d4a574',
    borderRadius: '8px',
    padding: '1.5rem',
    textAlign: 'center',
    color: '#333',
  } as React.CSSProperties,
}
