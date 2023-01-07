import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;

