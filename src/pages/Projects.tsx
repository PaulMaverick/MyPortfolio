import styles from '../styles/projects/projects.module.css'
import ProjectCard from '../components/projects/ProjectCard'
import Hero from '../components/homepage/Hero'

//images
import blogImg from '../imgs/MyBlogs.png'
import currencyImg from '../imgs/CurrencyApp.png'

export default function Projects() {
    // const [openModal, setOpenModal] = useState<boolean>(false)
    
    // const projects = projectsData.map(item => (
    //     <ProjectCard item={item} key={item.id}/>
    // ))

    // const handleModal = () => {
    //     setOpenModal(!openModal);
    // }

    return (
        <section className={styles.projectContainer}>
            <Hero />
            <header>
                <h1>Projects:</h1>
            </header>
            <div className={styles.cardContainer}>
                <ProjectCard title='My Blogs' imgSrc={blogImg} link='/myBlogs'>
                    <p>A self made project with intention to further master React.JS 19, Next.JS 15 release and supabase</p>
                </ProjectCard>
                <ProjectCard title='Currency App' imgSrc={currencyImg} link='/currencyApp'>
                    <p>A self made App made in React.JS to master the version 19 release, and to learn serverless Hono using Cloudflare workers.</p>
                </ProjectCard>
            </div>
        </section>
    )
}