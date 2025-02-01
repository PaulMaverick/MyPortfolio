import styles from '../../styles/aboutme/experiences.module.css';
import experienceData from '../../data/experience.json';

export default function Experiences() {

    const experienceMap = experienceData.map(item => (
        <div key={item.id} className={styles.expItem}>
            <div className={styles.itemHeader}>
                <p className={styles.position}>{item.position}</p>
                <p className={styles.date}>{item.dateRange}</p>
            </div>
            <div className={styles.itemCompany}>
                <p>{item.companyName}</p>
            </div>
            <ul className={styles.descList}>
                { item.description.map(desc => (
                    <li key={desc.id}>{desc.text}</li>
                ))}
            </ul>
        </div>
    ))

    return (
        <div className={styles.expContainer}>
            <h3 className={styles.expHeader}>Experiences</h3>
            <div className={styles.expContent}>
                {experienceMap}
            </div>
        </div>
    )
}