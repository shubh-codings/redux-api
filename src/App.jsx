import './App.css'
import Products from './components/Products'
import Header from './components/Header'
import Cart from './components/Cart'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route index element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </>
  )
}

export default App
