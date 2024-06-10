import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import Bookshelf from './components/Bookshelf';
import Thoughts from './components/Thoughts';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Scratchpad from './components/Scratchpad';
import HowToAvoidAClimateDisaster from './components/books/HowToAvoidAClimateDisaster'; /* Make this more scalable*/
import CapacitiveTouch from './components/thoughts/capacitive-touch';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutme' element={<AboutMe/>}/>
      <Route path='/bookshelf' element={<Bookshelf/>}/>
        <Route path='/bookshelf/how-to-avoid-a-climate-disaster' element={<HowToAvoidAClimateDisaster/>}/>
      <Route path='/thoughts' element={<Thoughts/>}/>
        <Route path='/thoughts/capacitive-touch' element={<CapacitiveTouch/>}/>
      <Route path='/scratchpad' element={<Scratchpad/>}/>
    </Routes>
  </Router>,

  document.getElementById('root')
);


