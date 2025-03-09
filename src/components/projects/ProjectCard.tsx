import { ReactNode } from 'react';
import styles from '../../styles/projects/projectCard.module.css'
import { Link } from 'react-router-dom';

type Props = {
    title: string;
    imgSrc: string;
    link: string;
    children: ReactNode
}

export default function ProjectCard({title, imgSrc, link, children}: Props) {
    return (
        <article className={styles.container}>
            <div className={styles.imgContainer}>
                <img src={imgSrc} alt="project Image" />
            </div>
            <div className={styles.content}>
                <header className={styles.cardHeader}>
                    <h4>{title}</h4>
                </header>
                {children}
                <Link to={link} className={styles.projectLink}>Read More</Link>
            </div>

        </article>
    )
}