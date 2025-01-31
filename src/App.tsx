import NavBar from './components/navbar/NavBar'
import HomePage from './pages/HomePage'
import Projects from './pages/Projects'
import styles from './styles/App.module.css'
import { Routes, Route } from 'react-router'

import RainingMatrix from "./components/visual/RainingMatrix"

function App() {
    return (
    <main>
        <RainingMatrix />
        <NavBar />
        <div className={styles.appContent}>
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/projects' element={<Projects />}/>
          </Routes>
        </div>
    </main>
  )
}

export default App
