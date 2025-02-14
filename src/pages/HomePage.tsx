import styles from '../styles/homepage/hompage.module.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import RainingMatrix from "../components/visual/RainingMatrix"




export default function HomePage() {
    return (
        <section className={styles.container}>
            <RainingMatrix />
            <article className={styles.textContainer}>
                <h5>Hello I'm a </h5>
                <h1>Web Developer</h1>
                <h2>I make softwares, websites for fun and professionaly</h2>

                <div className={styles.buttons}>
                    <a 
                        href="https://github.com/PaulMaverick"
                        target='_blank'
                        rel='noopener noreferrer' 
                    >
                        <FaGithub />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/paul-maverick-pastor-2b3b1b201/"
                        target='_blank'
                        rel='noopener noreferrer'                   
                    >
                        <FaLinkedin />
                    </a>
                    <a 
                        href="https://drive.google.com/file/d/1aXbWvRxGYoU1BsRBA-Qn34pIrhc5UpTe/view?usp=sharing"
                        target='_blank'
                        rel='noopener noreferrer'                   
                    >
                        <FaFileAlt />
                    </a>
                </div>
            </article>
        </section>
    )
}