
import { Routes, Route } from 'react-router-dom'
import Classes from "./styles/styles.module.scss";
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import FavoritePage from './pages/FavoritePage'

function App() {

  return (
    <>
      <main className={Classes.main}>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/detail/:id' element={<DetailPage />} />
              <Route path='/favorite' element={<FavoritePage />} />
            </Routes>
      </main>
    </>
  )
}

export default App
