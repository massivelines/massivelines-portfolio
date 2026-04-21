import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.heading}>Contact</h2>
      <p className={styles.intro}>
        The best way to reach me is email. I try to respond within a day or two.
      </p>
      <div className={styles.links}>
        <a href="mailto:shawn@shawnrhodes.dev" className={styles.email}>
          shawn@shawnrhodes.dev
        </a>
        <div className={styles.social}>
          <a
            href="https://github.com/massivelines"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/shawnrhodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
