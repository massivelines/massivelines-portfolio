import styles from "./Nav.module.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#hero" className={styles.logo}>
        SR
      </a>
      <ul className={styles.links}>
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
