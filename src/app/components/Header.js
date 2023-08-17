"use client";
import React, { useState } from 'react';
import './style.css';

function Header() {
  const [selectedNavItem, setSelectedNavItem] = useState('About');

  return (
    <header className='Header grey-bg flex items-center justify-between p-[20px]'> 
      <div className="logo-class flex items-center">
        <div className='logo'></div>
        <h1 className='text-3xl text-slate-700 ml-4'>Esportas</h1>
      </div>
      <nav className="flex gap-5 text-slate-700 mr-40">
        <a
          href="#"
          className={`mr-8 hover:text-orange-500 ${selectedNavItem === 'About' ? 'text-orange-500' : ''}`}
          onClick={() => setSelectedNavItem('About')}
        >
          About
        </a>
        <a
          href="#"
          className={`mr-8 hover:text-orange-500 ${selectedNavItem === 'Features' ? 'text-orange-500' : ''}`}
          onClick={() => setSelectedNavItem('Features')}
        >
          Features
        </a>
        <a
          href="#"
          className={`mr-8 hover:text-orange-500 ${selectedNavItem === 'Clients' ? 'text-orange-500' : ''}`}
          onClick={() => setSelectedNavItem('Clients')}
        >
          Clients
        </a>
        <a
          href="#"
          className={`mr-8 hover:text-orange-500 ${selectedNavItem === 'Plans' ? 'text-orange-500' : ''}`}
          onClick={() => setSelectedNavItem('Plans')}
        >
          Plans
        </a>
        <button className="bg-slate-800 text-white custom-rounded-button px-4 py-2 w-36 hover:bg-slate-700 hover:text-orange-500">Join Us</button>

      </nav>
    </header>
  );
}

export default Header;
