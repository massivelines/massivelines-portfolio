import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <h1 className={styles.name}>Shawn Rhodes</h1>
      <p className={styles.title}>Senior Frontend Developer</p>
    </section>
  );
}
