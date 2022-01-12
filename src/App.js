import {Routes,Route} from 'react-router-dom';
// import components
import Navbar from "./components/Navbar";
// import pages 
import CommingSoon from './pages/CommingSoon';
import Favorite from './pages/Favorite';
import Home from './pages/Home';
import SingIn from './pages/SingIn';
import Register from './pages/Register';
import Error from './pages/Error';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className='bg-black font-poppins tracking-wider text-white'>
      <header className="container mx-auto p-4">
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
        <Route path='/comming-soon' element={<CommingSoon/>}/>
        <Route path='/sing-in' element={<SingIn/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <div className='mt-16 bg-darkbg'>
        <Footer />
      </div>
    </div>
  )
}

export default App
