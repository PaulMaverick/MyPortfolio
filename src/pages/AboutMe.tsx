import styles from '../styles/aboutme/aboutme.module.css'
import Experiences from '../components/aboutme/Experiences';
import PersonalInfos from '../components/aboutme/PersonalInfos'
import { useState } from 'react';

export default function AboutMe() {
    const [content, setContent] = useState('personal');

    const handleContent = (con: string) => {
        setContent(con);
    }

    return (
        <section className={styles.aboutContainer}>
            <header>
                <h1 className={styles.headerH1}>About Me</h1>
            </header>
            <div className={styles.content}>
                <div className={styles.navContainer}>
                    <span 
                        className={styles.navLink} 
                        onClick={() => handleContent('personal')}>Personal Info</span>
                    <span 
                        className={styles.navLink} 
                        onClick={() => handleContent('experience')}>Experiences</span>
                </div>
                <div className={styles.contentContainer}>
                    {
                        content == 'personal' ? <PersonalInfos /> : <Experiences />
                    }
                </div>
            </div>
        </section>
    )
}