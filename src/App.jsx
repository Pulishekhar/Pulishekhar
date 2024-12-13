import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast'; // Import Toaster
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      <Toaster /> {/* Add Toaster here to enable notifications */}
    </>
  );
}

export default App;
