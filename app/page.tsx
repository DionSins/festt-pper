import Header from '@/components/Header'
import CarpetCatalog from '@/components/CarpetCatalog'
import Pricing from '@/components/Pricing'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h2 style={styles.heroTitle}>Transform Your Event with Mediterranean Magic</h2>
          <p style={styles.heroSubtitle}>
            Authentic Mediterranean carpets for every occasion. From intimate gatherings to grand celebrations.
          </p>
          <a href="#catalog" style={styles.ctaButton}>
            Browse Our Collection
          </a>
        </div>
      </section>

      <CarpetCatalog />
      <Pricing />
      <ContactForm />

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <p>&copy; 2024 Festaepper - Mediterranean Carpet Rental. All rights reserved.</p>
          <p>📧 Email: info@festaepper.dk | 📱 Phone: +45 XX XX XX XX</p>
        </div>
      </footer>
    </main>
  )
}

const styles = {
  hero: {
    background: 'linear-gradient(135deg, rgba(196, 30, 58, 0.9), rgba(139, 111, 71, 0.9)), url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27%3E%3Cpath d=%27M0 0 L50 50 L0 100 M100 0 L50 50 L100 100%27 stroke=%27rgba(255,255,255,0.1)%27 fill=%27none%27/%3E%3C/svg%3E")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '6rem 1rem',
    textAlign: 'center',
  } as React.CSSProperties,
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
  } as React.CSSProperties,
  heroTitle: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    marginBottom: '1rem',
    fontWeight: 'bold',
  } as React.CSSProperties,
  heroSubtitle: {
    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
    marginBottom: '2rem',
    opacity: 0.95,
    lineHeight: '1.6',
  } as React.CSSProperties,
  ctaButton: {
    display: 'inline-block',
    padding: '1rem 2rem',
    background: 'white',
    color: '#c41e3a',
    textDecoration: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  } as React.CSSProperties,
  footer: {
    background: '#2c2416',
    color: '#f5f1e8',
    padding: '2rem 1rem',
    textAlign: 'center',
  } as React.CSSProperties,
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
  } as React.CSSProperties,
}
