import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';


function App() {
  return (

      <BrowserRouter>
         <Navbar/>
           <Routes>
         
        <Route path="/" exact  element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
         </Routes>
      </BrowserRouter>
        
  );
}

export default App;
