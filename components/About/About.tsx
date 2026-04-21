import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.heading}>About</h2>
      <div className={styles.bio}>
        <p>
          Senior frontend developer, mostly in React and TypeScript. Before that
          I was a designer — so I tend to have strong opinions about UI and
          I&apos;m used to owning both sides of it.
        </p>
        <p>Self-taught, five-plus years building at scale, fully remote.</p>
      </div>
    </section>
  );
}
