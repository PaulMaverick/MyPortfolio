import styles from '../../styles/projects/blogs.module.css'
import blogImg from '../../imgs/MyBlogs.png'
import blogCreateImg from '../../imgs/myBlog-create.png'

function BlogsPage() {
  return (
    <section className={styles.blogContainer}>
        <header className={styles.blogHeader}>
            <h1>My Blog Project</h1>
        </header>
        <div className={styles.imgContainer}>
          <img src={blogImg} alt="Blog Img" />
        </div>
        <div className={styles.content}>
            <p> The Blog Project is my own project where my intetions are to learn and further master React, especially with its newly release of its version 19 back in December 2024. It is a simple Blog app that has login/signup and Blog Post Crud functions.</p>

            <div>
              <p>Link to the <a href="https://blogs-blush-tau.vercel.app/public/login">Live Site</a>.</p>
              <p>Link to <a href="https://github.com/PaulMaverick/Blogs">Github</a>.</p>
            </div>
            <div>
              <p>techs that were used:</p>
              <ul className={styles.techList}>
                <li>Next.JS</li>
                <li>Supabase</li>
              </ul>
            </div>
            <p>It's update and create blog function are built with the new hook useActionState, and useFormStatus to handle when the user create or update ie. submitting, to call the action that would insert/update the blog post.</p>
            
            <div className={styles.imgContainer}>
              <img src={blogCreateImg} alt="Blog Img" />
            </div>
            <p>Coupled also with Supabase as its backend, it's auth is also handled by Supabase Built-in Authentication. </p>

            <div>
              <p>*note: login or signing up might not work, as supabase automatically pause the supabase backend project when not used for free tiers.*</p>
            </div>
        </div>
    </section>
  )
}

export default BlogsPage