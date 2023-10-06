import React, { useContext, useState } from 'react';
import { Routes, Route, } from 'react-router-dom';

import HomePage from './components/HomePage';
import ReadAllPost from './components/ReadAllPost';


function App() {

  return (
    <div>

    <Routes>

    <Route path='/' element={<HomePage />} />  
    <Route path='/post' element={ <ReadAllPost /> } />


    </Routes>

    </div>
  )
}





export default App;
