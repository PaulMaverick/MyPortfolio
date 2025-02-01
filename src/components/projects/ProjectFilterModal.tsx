import styles from '../../styles/projects/projectFilterModal.module.css'

type Props = {
    openModal: boolean
}

export default function ProjectFilterModal({openModal}: Props) {

    const modalStyle = {
        height: openModal ? '25em' : 0,
        opacity: openModal ? 1 : 0,
        transition: openModal 
            ? 'height .6s ease-in-out, opacity .5s ease-in-out' 
            : 'height .6s ease-in-out, opacity .5s ease-in-out .5s',
    }

    return (
        <article className={styles.modalContainer} style={modalStyle}>
            <header className={styles.modalHeader}>
                <h3>Filters</h3>
            </header>
            <div className={styles.modalContent}>
                <div className={styles.checkboxContainer}>
                    <input type='checkbox' value="Javscript" id="Javscript" name='Javscript'/>
                    <label htmlFor="Javscript">Javscript</label>
                </div>
                <div className={styles.checkboxContainer}>
                    <input type='checkbox' value="React.JS" id='React.JS' name='React.JS'/>
                    <label htmlFor="React.JS">React.JS</label>
                </div>
                <div className={styles.checkboxContainer}>
                    <input type='checkbox' value="Python" id='Python' name='Python'/>
                    <label htmlFor="Python">Python</label>
                </div>
                <div className={styles.checkboxContainer}>
                    <input type='checkbox' value="React-Native" id='React-Native' name='React-Native'/>
                    <label htmlFor="React-Native">React-Native</label>
                </div>
            </div>
        </article>
    )
}