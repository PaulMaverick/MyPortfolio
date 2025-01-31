import styles from '../../styles/projects/projectCard.module.css'
import { projectType } from '../../types'

type Props = {
    item: projectType
}

export default function ProjectCard({item}: Props) {
    return (
        <article className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <header className={styles.cardHeader}>
                    <h3>{item.name}</h3>
                </header>
                <div className={styles.cardContent}>
                    <div>{item.description}</div>
                    <ul>
                        {item.techs.map(tech => (
                            <li key={tech.id}>{tech.techName}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.cardButtons}>
                    <button className={styles.btn}>Site Link</button>
                    <button className={styles.btn}>Github Link</button>
                </div>
            </div>
        </article>
    )
}