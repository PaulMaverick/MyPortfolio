import { useState } from 'react'
import styles from '../styles/aboutme/aboutme.module.css'
import Experiences from '../components/aboutme/Experiences'
import PersonalInfos from '../components/aboutme/PersonalInfos'

export default function AboutMe() {
    const [activeComponent, setActiveComponent] = useState<string>('experience')

    const handleCompChange = (name: string) => {
        setActiveComponent(name);
    }

    return (
        <section className={styles.aboutContainer}>
            <article className={styles.aboutArticle}>
                <header>
                    <h1 className={styles.headerH1}>About Me</h1>
                </header>
                <div className={styles.aboutContent}>
                    <div className={styles.aboutMeBar}>
                        <p onClick={() => handleCompChange('experience')}> =&gt;Experience</p>
                        <p onClick={() => handleCompChange('personal')}> =&gt;Personal Info</p>
                    </div>
                    <div className={styles.aboutComponents}>
                        { activeComponent === 'experience' ? <Experiences /> : <></>}
                        { activeComponent === 'personal' ? <PersonalInfos /> : <></>}
                    </div>
                </div>
            </article>
        </section>
    )
}