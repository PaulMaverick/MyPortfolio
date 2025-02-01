import styles from '../../styles/projects/projectFilter.module.css'
import { FaFilter } from "react-icons/fa";

type Props = {
    handleModal: () => void;
}

export default function ProjectFilter({handleModal}: Props) {
    return (
        <div className={styles.filterContainer} onClick={handleModal}>
            <FaFilter className={styles.filterIcon}/>
        </div>
    )
}