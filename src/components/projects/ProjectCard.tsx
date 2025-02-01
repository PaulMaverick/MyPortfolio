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
                    <div className={styles.cardDesc}>{item.description}</div>
                    <div className={styles.techStack}>Tech Stack:</div>
                    <ul>
                        {item.techs.map(tech => (
                            <li key={tech.id}>{`=> ${tech.techName}`}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.cardButtons}>
                    {item.site_link ? (
                        <a 
                        href={item.site_link} 
                        target='_blank' 
                        rel='noopener noreferrer'
                        className={styles.btnLink}>Site Link</a>
                    ): (<></>)}
                    {item.github_link ? (
                        <a 
                        href={item.github_link} 
                        target='_blank' 
                        rel='noopener noreferrer'
                        className={styles.btnLink}>Github Link</a>
                    ): (<></>)}
                </div>
            </div>
        </article>
    )
}