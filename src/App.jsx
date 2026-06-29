import Home from './pages/Home'
import Painting from './pages/Painting'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='painting/:id' element={<Painting/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter >
  )
}

export default App