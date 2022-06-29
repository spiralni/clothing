import { Route, Routes } from 'react-router-dom'
import './categories.styles.scss'

import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component'
import Authentication from './routes/authentication/authentication.component'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='auth' element={<Authentication />}></Route>
      </Route>
    </Routes>
  )
}

export default App
