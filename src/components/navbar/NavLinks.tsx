import { Link } from "react-router-dom"
import styles from '../../styles/navbar/navLinks.module.css'

export default function NavLinks() {
    return (
        <nav className={styles.container}>
            <ul>
                <li>
                    <Link to='/' className={styles.link}>Home</Link>
                </li>
                <li>
                    <Link to='/projects' className={styles.link}>Works</Link>
                </li>
                <li>
                    <Link to='/aboutme' className={styles.link}>About Me</Link>
                </li>
            </ul>
        </nav>
    )
}