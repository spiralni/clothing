import { Route, Routes } from 'react-router-dom'
import './categories.styles.scss'
import Categories from './components/categories/categories.component'
import Home from './routes/home/home.component'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App
