import React, {Components, Profiler} from 'react';
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from '../src/Components/Category/Login';
import Craft from '../src/Components/Category/Craft';
import Pencil from '../src/Components/Category/Pencil';
import Painting from '../src/Components/Category/Painting';
import Clay from '../src/Components/Category/Clay';
import Wood from '../src/Components/Category/Wood';
import Gift from '../src/Components/Category/Gift';
import Basket from '../src/Components/Category/Basket';
import Profile from '../src/Components/Category/Profile';
import Productoverview from '../src/Components/Category/Productoverview';
import Catalog from './Components/Catalog/Catalog';




const App = () => {
  return (
    <>
       <BrowserRouter>
      <Routes>
      <Route path="/" element={<Catalog/>} />

        <Route path="/Login" element={<Login/>} />
        <Route path="/Craft" element={<Craft/>} />
        <Route path="/Pencil" element={<Pencil/>} />
        <Route path="/Painting" element={<Painting/>} />
        <Route path="/Clay" element={<Clay/>} />
        <Route path="/Wood" element={<Wood/>} />
        <Route path="/Gift" element={<Gift/>} />
        <Route path="/Basket" element={<Basket/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/Productoverview" element={<Productoverview/>} />
      </Routes>
    </BrowserRouter>
    
      

      
</>
  );
};

export default App;