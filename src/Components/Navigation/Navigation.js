import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Pages/Footer/Footer';
import React from 'react'
import Home from '../Pages/Home/Home';
import ContactUs from '../Pages/ContactUs/ContactUs';
import About from '../Pages/About/About';

function Navigation() {
    return (
        <div>
      <Router>
     <NavBar />

      <Routes>
     <Route exact path="/" element={<Home />}/>
     <Route  path="/about" element={<About />}/>
     <Route  path="/contact" element={<ContactUs />}/>
      </Routes>

      <Footer />
      </Router>
   </div>
    )
}

export default Navigation
