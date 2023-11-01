
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import FavoritePage from './pages/FavoritePage'

function App() {

  return (
    <>
      <main>
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
