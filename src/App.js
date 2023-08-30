import React from 'react';
import './App.css';
import Navbar from './components/navigation/Navbar';

import Books from './components/Books/Books';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addbook from '../src/components/add/Addbook'
import Editbook from '../src/components/Edit/Editbook'

function App() {
  return (
    <BrowserRouter >
    <div className="App">
      <Navbar />


      <main className="py-12 px-6 2xl:px-6 container">
        <div className="order-2 xl:-order-1">
          
          <Routes>
          <Route path='/' element={<Books />} />
          <Route path='/addbook' element={<Addbook />} />
          <Route path='/editbook/:id' element={<Editbook />} />
          </Routes>
        </div>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
