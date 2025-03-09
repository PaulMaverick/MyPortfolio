import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import styles from '../../styles/aboutme/personalInfo.module.css'


export default function PersonalInfos() {


    return (
        <div className={styles.personalContainer}>
            <h3 className={styles.personalHeader}>Personal Info</h3>
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
                    href="https://drive.google.com/file/d/1MU0eCBU7iioPnHIlB1g3HFRI0UrRcGAl/view?usp=sharing"
                    target='_blank'
                    rel='noopener noreferrer'                   
                >
                    <FaFileAlt /> My Resume
                </a>
            </div>
            <div className={styles.techContainer}>
                <h3 className={styles.personalHeader}>Skills:</h3>
                <div className={styles.skillContainer}>
                    <div className={styles.skillGroup}>
                        <h4>Languages:</h4>
                        <ul className={styles.skillList}>
                            <li>Javascript</li>
                            <li>TypeScript</li>
                            <li>Python</li>
                            <li>Lua</li>
                        </ul>
                    </div>
                    <div className={styles.skillGroup}>
                        <h4>FrontEnd:</h4>
                        <ul className={styles.skillList}>
                            <li>React.Js</li>
                            <li>Next.Js</li>
                            <li>Angular.Js</li>
                            <li>Vue.Js</li>
                        </ul>
                    </div>
                    <div className={styles.skillGroup}>
                        <h4>BackEnd:</h4>
                        <ul className={styles.skillList}>
                            <li>Node.Js</li>
                            <li>Express.Js</li>
                            <li>Supabase</li>
                            <li>Firebase</li>
                            <li>Django</li>
                        </ul>
                    </div>
                    <div className={styles.skillGroup}>
                        <h4>Database</h4>
                        <ul className={styles.skillList}>
                            <li>MongoDb</li>
                            <li>MySQL</li>
                            <li>Oracle</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}