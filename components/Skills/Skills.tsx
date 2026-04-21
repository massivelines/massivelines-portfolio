import { skills } from "@/data/skills";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.grid}>
        {skills.map(({ category, items }) => (
          <div key={category} className={styles.group}>
            <h3 className={styles.category}>{category}</h3>
            <ul className={styles.items}>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
