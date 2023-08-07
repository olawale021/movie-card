import React from 'react';
import './App.css';
import DescriptionPage from './components/DescriptionPage';
import {Link, Route, Routes} from "react-router-dom";
import HomePage from './components/HomePage';


const App = () => {

  return (
    <div className="App">
      






      <Routes>
        
      <Route  path="/" element={<HomePage />} />
        
        <Route exact path="/description/:id" element={<DescriptionPage />} />
        
      </Routes>
    </div>


    

  );
};

export default App;
