import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const FOOTER_COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/" },
      { label: "Pricing", href: "/" },
      { label: "Security", href: "/" },
      { label: "Compliance", href: "/" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Enterprise", href: "/" },
      { label: "Healthcare", href: "/" },
      { label: "FinTech", href: "/" },
      { label: "E-commerce", href: "/" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "/" },
      { label: "Case Studies", href: "/" },
      { label: "API Reference", href: "/" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/" },
      { label: "Contact", href: "/contact" },
      { label: "Press", href: "/" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/" },
      { label: "Terms", href: "/" },
      { label: "Cookies", href: "/" },
      { label: "DPA", href: "/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.heading} className={styles.col}>
            <h4 className={styles.heading}>{col.heading}</h4>

            <ul className={styles.list}>
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.divider}></div>
    </footer>
  );
}