import styles from '../styles/projects/projects.module.css'
import projectsData from '../data/projects.json'
import ProjectCard from '../components/projects/ProjectCard'
import ProjectFilter from '../components/projects/ProjectFilter'
import ProjectFilterModal from '../components/projects/ProjectFilterModal'
import { useState } from 'react'

export default function Projects() {
    const [openModal, setOpenModal] = useState<boolean>(false)
    
    const projects = projectsData.map(item => (
        <ProjectCard item={item} key={item.id}/>
    ))

    const handleModal = () => {
        setOpenModal(!openModal);
    }

    return (
        <section className={styles.projectContainer}>
            <ProjectFilter handleModal={handleModal}/>
            <ProjectFilterModal openModal={openModal}/>
            <div className={styles.cardContainer}>
                {projects}
            </div>
        </section>
    )
}