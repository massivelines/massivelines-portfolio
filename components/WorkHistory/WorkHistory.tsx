import { workHistory, education } from "@/data/workHistory";
import styles from "./WorkHistory.module.css";

export default function WorkHistory() {
  return (
    <section id="work" className={styles.work}>
      <h2 className={styles.heading}>Work</h2>

      <div className={styles.entries}>
        {workHistory.map(({ role, company, location, period, bullets }) => (
          <div key={`${company}-${role}`} className={styles.entry}>
            <div className={styles.meta}>
              <span className={styles.role}>{role}</span>
              <span className={styles.company}>
                {company} — {location}
              </span>
              <span className={styles.period}>{period}</span>
            </div>
            <ul className={styles.bullets}>
              {bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.educationBlock}>
        <h3 className={styles.subheading}>Education</h3>
        <div className={styles.educationEntries}>
          {education.map(({ credential, institution, period }) => (
            <div key={credential} className={styles.educationEntry}>
              <span className={styles.credential}>{credential}</span>
              <span className={styles.institution}>{institution}</span>
              <span className={styles.period}>{period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
