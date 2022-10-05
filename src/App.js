import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import WorkWith from './components/WorkWith';
import ThinkBig from './components/ThinkBig';
import Plans from './components/Plans';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <WorkWith/>
      <Plans/>
      <Footer/>
    </div>
  );
}

export default App;
