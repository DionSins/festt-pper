'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    carpetQuantity: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Handle form submission (send email, save to database, etc.)
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      carpetQuantity: '',
      message: '',
    })
  }

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Get Your Carpets</h2>
        <p style={styles.description}>
          Interested in renting carpets for your event? Fill out the form below and we'll get back to you with a quote!
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGrid}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Event Date</label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Number of Carpets Needed</label>
              <input
                type="number"
                name="carpetQuantity"
                value={formData.carpetQuantity}
                onChange={handleChange}
                min="1"
                placeholder="e.g., 10, 15, 20"
                required
                style={styles.input}
              />
            </div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell us about your event..."
              style={styles.textarea}
            />
          </div>

          <button type="submit" style={styles.submitBtn}>
            Send Inquiry
          </button>
        </form>
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
    maxWidth: '800px',
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
    marginBottom: '2rem',
  } as React.CSSProperties,
  form: {
    background: '#fafafa',
    padding: '2rem',
    borderRadius: '8px',
    border: '2px solid #d4a574',
  } as React.CSSProperties,
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginBottom: '1.5rem',
  } as React.CSSProperties,
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  } as React.CSSProperties,
  label: {
    marginBottom: '0.5rem',
    fontWeight: '600',
    color: '#333',
  } as React.CSSProperties,
  input: {
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    fontFamily: 'inherit',
  } as React.CSSProperties,
  textarea: {
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    fontFamily: 'inherit',
    gridColumn: '1 / -1',
  } as React.CSSProperties,
  submitBtn: {
    width: '100%',
    padding: '1rem',
    background: '#c41e3a',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1.1rem',
    fontWeight: '600',
    transition: 'background 0.3s',
    cursor: 'pointer',
  } as React.CSSProperties,
}
