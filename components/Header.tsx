'use client'

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logo}>
          <h1 style={styles.title}>Festaepper</h1>
          <p style={styles.subtitle}>Mediterranean Carpet Rental</p>
        </div>
        <nav style={styles.nav}>
          <a href="#catalog" style={styles.navLink}>Carpets</a>
          <a href="#packages" style={styles.navLink}>Packages</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </div>
    </header>
  )
}

const styles = {
  header: {
    background: 'linear-gradient(135deg, #c41e3a 0%, #8b6f47 100%)',
    color: 'white',
    padding: '1.5rem 0',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  } as React.CSSProperties,
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as React.CSSProperties,
  logo: {
    flex: 1,
  } as React.CSSProperties,
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: 0,
  } as React.CSSProperties,
  subtitle: {
    fontSize: '0.9rem',
    fontStyle: 'italic',
    margin: '0.25rem 0 0 0',
    opacity: 0.9,
  } as React.CSSProperties,
  nav: {
    display: 'flex',
    gap: '2rem',
  } as React.CSSProperties,
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'opacity 0.3s',
    cursor: 'pointer',
  } as React.CSSProperties,
}
