import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import { Routes, Route } from 'react-router'
import styles from './styles/App.module.css'
import BlogsPage from './pages/projects/BlogsPage'
import NavBar from './components/navbar/NavBar'
import CurrencyAppPage from './pages/projects/CurrencyApp'

function App() {
    return (
    <main>
        <div className={styles.appContent}>
          <NavBar />
          <Routes>
              <Route path='/' element={<Projects />}/>
              <Route path='/aboutme' element={<AboutMe />}/>
              <Route path="/myBlogs" element={<BlogsPage />} />
              <Route path="/currencyApp" element={<CurrencyAppPage />} />
          </Routes>
        </div>
    </main>
  )
}

export default App
