import {Routes,Route} from 'react-router-dom';
// import components
import Navbar from "./components/Navbar";
// import pages 
import CommingSoon from './pages/CommingSoon';
import InThreaters from './pages/InThreaters';
import Favorite from './pages/Favorite';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Error from './pages/Error';
import Footer from './components/Footer';

// https://i.postimg.cc/52x6kzSQ/bg.png

const App = () => {
  return (
    <div className='bg-black font-poppins tracking-wider text-white overflow-x-hidden'>
      {/*use useState*/}
      {/* <div style={{backgroundImage: 'url(https://i.postimg.cc/52x6kzSQ/bg.png)', minHeight: '80vh' }} className='bg-no-repeat absolute top-0 left-0 right-0 bg-cover opacity-10'></div> */}
      <header className="container mx-auto p-4">
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/in-threaters' element={<InThreaters/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
        <Route path='/comming-soon' element={<CommingSoon/>}/>
        <Route path='/sing-in' element={ <SignIn/>}/>
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
