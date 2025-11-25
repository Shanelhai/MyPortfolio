import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Project from './Project/Project';
import Contact from './Contact/Contact';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Name = () => {
  return <h1>Hello I am a Name Page</h1>;
};

// Define your Error component (if needed)
const Error = () => {
  return <h1>404 - Not Found</h1>;
};

const App=()=>{
  return(
    <>
      <Router>
      <>
        <Navbar />
       
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/name" element={<Name />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </>
    </Router>
    </>
  );
};
export default App;

