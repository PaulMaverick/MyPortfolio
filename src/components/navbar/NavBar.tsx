import { Link } from 'react-router-dom'
import styles from '../../styles/navbar/navbar.module.css'

export default function NavBar() {
    return (
        <header className={styles.container}>
            <div className={styles.brandContainer}>
                <Link to="/" className={styles.brandLink}>Paul Pastor</Link>
            </div>

            <Link to='/aboutme' className={styles.link}>About Me</Link>
        </header>
    )
}