
import './App.css';
import Nav from './Pages/Nav';
import NewHome from './Pages/NewHome';
import Footer from './Pages/Footer';
import { Route, Routes } from 'react-router-dom';
import Aboutus from './Pages/Aboutus';
import Contact from './Pages/Contact';

function App() {
  return (
    <div>
 <Nav/>


      <Routes>
<Route path='/' element={<NewHome/>} />
<Route path='/about' element={<Aboutus/>} />
<Route path='/contact' element={<Contact/>} />

      </Routes>
 <Footer/>
    </div>
  );
}

export default App;
