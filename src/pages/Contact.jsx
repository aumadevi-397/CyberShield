import React, { useState } from 'react';
import styles from './Contact.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.emailAddress || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    
    alert(`Message Sent Successfully!\n\nName: ${formData.fullName}\nEmail: ${formData.emailAddress}\nCompany: ${formData.company}\nMessage: ${formData.message}`);
    
    // Clear form after submission
    setFormData({ fullName: '', emailAddress: '', company: '', message: '' });
  };

  return (
    <div className={styles.pageWrapper}>
      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Get in <span>Touch</span></h1>
          <p className={styles.subtitle}>Have questions? Our team is ready to help. Reach out to us anytime.</p>
        </section>

        {/* Info Cards */}
        <section className={styles.cardsContainer}>
          <div className={styles.card}>
            <div className={styles.iconContainer}>✉️</div>
            <h3>Email</h3>
            <a href="mailto:support@cybershield.com">support@cybershield.com</a>
          </div>
          
          <div className={styles.card}>
            <div className={styles.iconContainer}>📞</div>
            <h3>Phone</h3>
            <a href="tel:+15551234567">+1 (555) 123-4567</a>
          </div>

          <div className={styles.card} id={styles.addressCard}>
            <div className={styles.iconContainer}>📍</div>
            <h3>Address</h3>
            <p>99 SW 8th St, Miami, FL 33130</p>
          </div>
        </section>

        {/* Contact Form */}
        <section className={styles.formSection}>
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="emailAddress">Email Address</label>
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  placeholder="Business mail"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Your Company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
             Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}