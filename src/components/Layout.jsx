// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{
        backgroundImage: "url('/R.jpg')",
      }}
    >
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
