import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import styles from '../../styles/aboutme/personalInfo.module.css'
import techData from '../../data/techs.json'

export default function PersonalInfos() {
    const progLang = techData.filter(tech => tech.type === 'language')
                    .map(tech => (<li key={tech.id}>=&gt;{tech.tech}</li>))
    const frontEnd = techData.filter(tech => tech.type === 'frontEnd')
                    .map(tech => (<li key={tech.id}>=&gt;{tech.tech}</li>))
    const backend = techData.filter(tech => tech.type === 'backend')
                    .map(tech => (<li key={tech.id}>=&gt;{tech.tech}</li>))
    const database = techData.filter(tech => tech.type === 'database')
                    .map(tech => (<li key={tech.id}>=&gt;{tech.tech}</li>))
    const tools =  techData.filter(tech => tech.type === 'tools')
                 .map(tech => (<li key={tech.id}>=&gt;{tech.tech}</li>))

    return (
        <div className={styles.personalContainer}>
            <h2 className={styles.personalHeader}>Personal Info</h2>
            <div className={styles.personalInfo}>
                <p>Name: Paul Maverick Pastor</p>
                <p>Email: paulpastor122297@gmail.com</p>
                <p>Phone: 09772188522</p>
                <a 
                    href="https://github.com/PaulMaverick"
                    target='_blank'
                    rel='noopener noreferrer' 
                >
                    <FaGithub /> https://github.com/PaulMaverick
                    </a>
                <a 
                    href="https://www.linkedin.com/in/paul-maverick-pastor-2b3b1b201/"
                    target='_blank'
                    rel='noopener noreferrer'                   
                >
                    <FaLinkedin /> https://www.linkedin.com/in/paul-maverick-pastor-2b3b1b201/
                </a>
                <a 
                    href="https://drive.google.com/file/d/1aXbWvRxGYoU1BsRBA-Qn34pIrhc5UpTe/view?usp=sharing"
                    target='_blank'
                    rel='noopener noreferrer'                   
                >
                    <FaFileAlt /> My Resume
                </a>
            </div>
            <div className={styles.techContent}>
                <h3>Technologies I use:</h3>
                <div className={styles.upperTech}>
                    <div className={styles.techGroup}>
                        <h5>Markup/Programming Language</h5>
                        <ul>{progLang}</ul>
                    </div>
                    <div className={styles.techGroup}>
                        <h5>Front-End Libraries/Frameworks</h5>
                        <ul>{frontEnd}</ul>
                    </div>
                    <div className={styles.techGroup}>
                        <h5>Back-End Libraries/Frameworks</h5>
                        <ul>{backend}</ul>
                    </div>
                </div>
                <div className={styles.lowerTech}>
                    <div className={styles.techGroup}>
                        <h5>Database</h5>
                        <ul>{database}</ul>
                    </div>
                    <div className={styles.techGroup}>
                        <h5>Tools</h5>
                        <ul>{tools}</ul>
                    </div>
                </div>
            </div>
           
        </div>
    )
}