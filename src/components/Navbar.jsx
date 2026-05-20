
import { useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        <div className={styles.logo}>
          <span>CyberShield</span>
        </div>

   
        <nav className={styles.navLinks}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className={styles.right}>
        
          <button
            className={styles.menuBtn}
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className={styles.mobileMenu}>
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>

        </div>
      )}
    </header>
  );
}