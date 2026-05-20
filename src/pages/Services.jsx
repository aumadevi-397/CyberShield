import React from 'react';
import styles from './Services.module.css';

const servicesData = [
  {
    id: 1,
    icon: '🔒', 
    title: 'Threat Detection & Prevention',
    description: 'AI-powered real-time detection and automatic response to cyber threats across your entire infrastructure.',
    features: ['Real-time Monitoring', 'ML-based Detection', 'Auto-Response', 'Threat Intelligence']
  },
  {
    id: 2,
    icon: '👁️',
    title: 'Vulnerability Management',
    description: 'Comprehensive scanning, assessment, and remediation of security vulnerabilities in your systems.',
    features: ['Continuous Scanning', 'Risk Scoring', 'Patch Management', 'Compliance Reports']
  },
  {
    id: 3,
    icon: '⚡',
    title: 'Incident Response',
    description: '24/7 expert Incident response team ready to handle security breaches and minimize damage.',
    features: ['24/7 Support', 'Expert Analysis', 'Forensics', 'Recovery Planning']
  },
  {
    id: 4,
    icon: '📊',
    title: 'Security Analytics',
    description: 'Deep insights into your security posture with advanced analytics and threat intelligence.',
    features: ['Custom Dashboards', 'Threat Reports', 'Trend Analysis', 'Predictive Alerts']
  },
  {
    id: 5,
    icon: '🔔',
    title: 'Compliance Management',
    description: 'Automated compliance tracking for SOC 2, ISO 27001, HIPAA, GDPR, and more.',
    features: ['Audit Reports', 'Policy Templates', 'Compliance Tracking', 'Evidence Collection']
  },
  {
    id: 6,
    icon: '👥',
    title: 'Security Training',
    description: 'Empower your team with security awareness and best practices training programs.',
    features: ['Online Courses', 'Simulations', 'Certifications', 'Custom Training']
  }
];

export default function Services() {
  return (
    <div className={styles.pageContainer}>
      <main className={styles.mainContent}>
     
        <section className={styles.introSection}>
          <h1 className={styles.mainTitle}>Our <span className={styles.highlight}>Services</span></h1>
          <p className={styles.subtitle}>
            Comprehensive cybersecurity solutions designed to protect, detect, and respond to threats.
          </p>
        </section>

        <section className={styles.servicesGrid}>
          {servicesData.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{service.icon}</span>
                <h3 className={styles.cardTitle}>{service.title}</h3>
              </div>
              <p className={styles.cardDescription}>{service.description}</p>
              <ul className={styles.featureList}>
                {service.features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    <span className={styles.bullet}>•</span> {feature}
                  </li>
                ))}
              </ul>
              <button className={styles.learnMoreBtn}>Learn More</button>
            </div>
          ))}
        </section>
        <section className={styles.ctaContainer}>
          <h2>Ready to Secure Your Organization?</h2>
          <p>Let's schedule a free security assessment to understand your unique needs.</p>
          <button className={styles.ctaButton}>Schedule Assessment</button>
        </section>
      </main>
    </div>
  );
}