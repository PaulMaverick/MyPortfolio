import styles from '../../styles/navbar/navbar.module.css'
import NavLinks from './NavLinks'

export default function NavBar() {
    return (
        <header className={styles.container}>
            <div className={styles.brandContainer}>Paul Pastor</div>
            <NavLinks />
        </header>
    )
}