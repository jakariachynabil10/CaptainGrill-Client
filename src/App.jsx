
import { Outlet } from 'react-router-dom'
import './App.css'
import Banner from './Banner/Banner'
import Navbar from './Navbar/Navbar'
import Footer from './footer/Footer'

function App() {
  

  return (
    <>
    <div className='bg-liner'>
    <Navbar></Navbar>
    </div>
    <Outlet></Outlet>

    <div>
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
