import NavBar from './components/navbar/NavBar'
import HomePage from './pages/HomePage'
import Projects from './pages/Projects'
import styles from './styles/App.module.css'
import { Routes, Route } from 'react-router'

import RainingMatrix from "./components/visual/RainingMatrix"
import AboutMe from './pages/AboutMe'

function App() {
    return (
    <main>
        <RainingMatrix />
        <NavBar />
        <div className={styles.appContent}>
          <Routes>
            <Route path='/MyPortfolio/' element={<HomePage />}/>
            <Route path='/MyPortfolio/projects' element={<Projects />}/>
            <Route path='/MyPortfolio/aboutme' element={<AboutMe />}/>
          </Routes>
        </div>
    </main>
  )
}

export default App
