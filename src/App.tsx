import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './componentes/nav-bar/NavBar';
import Home from './componentes/pages/Home';
import About from './componentes/pages/About';
import Contact from './componentes/pages/Contact';
import Shop from './componentes/pages/Shop';
import Footer from './componentes/pages/Footer';



function App() {
  
  return (
    <Router>
      <NavBar />
      <div className="container mx-auto mt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
    

);

}

export default App;
