import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import Bookshelf from './components/Bookshelf';
import Thoughts from './components/Thoughts';
import Home from './components/Home';
import Scratchpad from './components/Scratchpad';
import HowToAvoidAClimateDisaster from './components/books/HowToAvoidAClimateDisaster';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/bookshelf' element={<Bookshelf/>}/>
        <Route path='/bookshelf/how-to-avoid-a-climate-disaster' element={<HowToAvoidAClimateDisaster/>}/>
      <Route path='/thoughts' element={<Thoughts/>}/>
      <Route path='/scratchpad' element={<Scratchpad/>}/>
    </Routes>
  </Router>,

  document.getElementById('root')
);


