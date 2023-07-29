import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Header from './pages/Header'
import TopRated from './pages/TopRated'
import ProductProvider from './context/ProductProvider'
import Carts from './pages/Carts'
import WishLists from './pages/WishLists'


function App() {
  return (
    <>
      <ProductProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/wishlists" element={<WishLists />} />
        </Routes>
      </ProductProvider>
    </>
  )
}

export default App
