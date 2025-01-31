import styles from '../styles/homepage/hompage.module.css'

export default function HomePage() {
    return (
        <section className={styles.container}>
            <article className={styles.textContainer}>
                <h5>Hello I'm a </h5>
                <h1>Web Developer</h1>
                <h2>I make softwares, websites for fun and professionaly</h2>
            </article>
        </section>
    )
}