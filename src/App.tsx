import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home';
import { MonthStatistics } from './pages/MonthStatistics/MonthStatistics';
import { Header } from './pages/shared/Header/Header';


function App() {
  return (
    <div className='global-container'>
      <div className="container">
        <Header/>
        <React.Fragment>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/' element={<MonthStatistics/>}/>
          </Routes>
        </React.Fragment>
      </div>
    </div>
  );
}

export default App;
