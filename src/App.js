import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';

import { Routes,Route,Navigate} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/service' Component={Service}/>
      <Route path='/about' Component={About}/>
      <Route path='/contact' Component={Contact}/>
      <Route path="*" element={<Navigate to ="/" />}/>
    </Routes>
    </>
  );
}

export default App;
