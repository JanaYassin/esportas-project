"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import './style.css';

function Header() {
  const [selectedNavItem, setSelectedNavItem] = useState('About');
  return (
    <header className='header grey-bg flex justify-between p-[20px]'> 
      <div className="logo-class flex ">
        <Image
        src="/images/logo.png"
        alt="logo"
        width={40}
        height={30}/>
        <h1 className='text-3xl text-slate-700 ml-4'>Esportas</h1>
      </div>
      <nav className="center flex gap-5 text-slate-700 mr-40">
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
        <a className="button bg-slate-800 text-center text-white custom-rounded-button px-4 py-2 w-36 hover:bg-slate-700 hover:text-orange-500">Join Us</a>

      </nav>
    </header>
  );
}

export default Header;
