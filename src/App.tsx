import NavBar from './components/navbar/NavBar'
import HomePage from './pages/HomePage'
import Projects from './pages/Projects'
import styles from './styles/App.module.css'
import { Routes, Route } from 'react-router'


import AboutMe from './pages/AboutMe'

function App() {
    return (
    <main>
        
        <NavBar />
        <div className={styles.appContent}>
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/aboutme' element={<AboutMe />}/>
          </Routes>
        </div>
    </main>
  )
}

export default App
