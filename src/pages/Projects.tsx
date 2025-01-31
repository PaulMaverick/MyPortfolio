import styles from '../styles/projects/projects.module.css'
import projectsData from '../data/projects.json'
import ProjectCard from '../components/projects/ProjectCard'

export default function Projects() {
    
    const projects = projectsData.map(item => (
        <ProjectCard item={item}/>
    ))

    return (
        <section className={styles.projectContainer}>
            <div className={styles.cardContainer}>
                {projects}
            </div>
        </section>
    )
}