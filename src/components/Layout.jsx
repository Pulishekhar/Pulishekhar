// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/R.jpg')",
      }}
    >
      <Navbar />
      
      {/* Adjust padding based on fixed navbar and footer heights */}
      <main className="flex-grow pt-[80px] pb-[64px] px-4">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}

export default Layout;
