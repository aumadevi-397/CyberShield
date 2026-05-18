import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      
      {/* HERO */}
      <section className={styles.hero}>
        <h1>
          About Cybershield
         
        </h1>
        <p>
          Protecting enterprises worldwide from cyber threats with intelligent,
          AI-powered security solutions.
        </p>
      </section>

      {/* MISSION */}
      <section className={styles.mission}>
        <h2>Our Mission</h2>
        <p id={styles.para}>
          To empower organizations of all sizes with enterprise-grade cybersecurity
          that's intelligent, intuitive, and always one step ahead of threats.
          We believe that security should never compromise usability.
        </p>

        <div className={styles.stats}>
          <div className={styles.card}>
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>

          <div className={styles.card}>
            <h3>10M+</h3>
            <p>Threats Blocked</p>
          </div>

          <div className={styles.card}>
            <h3>500+</h3>
            <p>Clients Protected</p>
          </div>

          <div className={styles.card}>
            <h3>200+</h3>
            <p>Team Members</p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className={styles.values}>
        <h2>Our Values</h2>

        <div className={styles.grid}>
          <div className={styles.valueCard}>
            <h4>Security First</h4>
            <p>Every decision prioritizes protecting our clients from cyber threats.</p>
          </div>

          <div className={styles.valueCard}>
            <h4>Customer Focused</h4>
            <p>We listen to our clients and continuously improve our platform.</p>
          </div>

          <div className={styles.valueCard}>
            <h4>Excellence</h4>
            <p>Industry-leading expertise with compliance and standards.</p>
          </div>

          <div className={styles.valueCard}>
            <h4>Innovation</h4>
            <p>Cutting-edge AI and ML for advanced threat detection.</p>
          </div>
        </div>
      </section>

    </div>
  );
}