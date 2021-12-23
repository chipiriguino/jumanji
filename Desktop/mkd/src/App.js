import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu/Menu';




const App = () => {

  return (
    <Router>
      <Menu/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
    </Router>
  );
}

export default App;