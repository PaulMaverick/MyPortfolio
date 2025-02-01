import { Link, useLocation } from "react-router-dom"
import styles from '../../styles/navbar/navLinks.module.css'

export default function NavLinks() {
    const location = useLocation();

    const homeStyle = {
        borderBottom: location.pathname === '/' ? '1px solid #0aff33': 'none',
        color: location.pathname === '/' ? '#0aff33' : '#58ce35' 
            
    }

    const projectStyle = {
        borderBottom: location.pathname === '/projects' ? '1px solid #0aff33' : 'none',
        color: location.pathname === '/projects' ? '#0aff33' : '#58ce35' 
    }

    const aboutMeStyle = {
        borderBottom: location.pathname === '/aboutme' ? '1px solid #0aff33' : 'none',
        color: location.pathname === '/aboutme' ? '#0aff33' : '#58ce35' 
    }


    return (
        <nav className={styles.container}>
            <ul>
                <li >
                    <Link to='/' className={styles.link} style={homeStyle}>Home</Link>
                </li>
                <li >
                    <Link to='/projects' className={styles.link} style={projectStyle}>Works</Link>
                </li>
                <li >
                    <Link to='/aboutme' className={styles.link} style={aboutMeStyle}>About Me</Link>
                </li>
            </ul>
        </nav>
    )
}