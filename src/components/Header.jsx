import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';

function Header() {
  return (
    <header className="lg:px-40 md:bg-header-desktop bg-header-bg w-full min-h-screen bg-cover bg-no-repeat pb-24">
      <Navbar />
      <Hero />
    </header>
  );
}

export default Header;
