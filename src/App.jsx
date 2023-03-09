import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart'
import Fav from './components/Fav'
import Navbar from './components/Navbar'
import Products from './components/Products'

const App = () => {
  return (
    <div className=' container'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/fav' element={<Fav/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App