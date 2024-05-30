'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinks = (links) => {
    setActive(links);
    setIsMenuOpen(false); // Close menu on link click
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleBackdropClick = (e) => {
      if (e.target.classList.contains('navbar-backdrop')) {
        closeMenu();
      }
    };

    document.querySelectorAll('.navbar-backdrop').forEach((backdrop) => {
      backdrop.addEventListener('click', handleBackdropClick);
    });

    return () => {
      document.querySelectorAll('.navbar-backdrop').forEach((backdrop) => {
        backdrop.removeEventListener('click', handleBackdropClick);
      });
    };
  }, []);

  return (
    <header>
      <nav className="fixed w-full z-50 lg:px-14 px-4 py-2 flex justify-between items-center bg-[#263042] shadow-md">
        <Link className="text-2xl font-bold flex gap-2 leading-none" href="/" onClick={() => handleLinks('home')}>
          <img src='/assets/ss_logo.png' alt="ServerStats Logo" className="rounded-md h-14" />
          <div className="flex flex-col justify-center">
            <p className="text-md text-white">ServerStats</p>
          </div>
        </Link>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-white p-3" onClick={toggleMenu}>
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-6">
          {['setup', 'donate', 'commands', 'status'].map((link) => (
            <li key={link}>
              <Link
                className={`font-semibold transition duration-300 ease-in-out ${
                  active === link ? 'text-md text-white font-bold' : 'text-md text-gray-300 hover:text-white'
                }`}
                onClick={() => handleLinks(link)}
                href={link === 'donate' ? 'https://www.patreon.com/serverstats' : `/${link}`}
                target={link === 'donate' ? '_blank' : '_self'}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={`navbar-menu relative z-50 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-[#263042] border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <Link className="mr-auto text-3xl font-bold leading-none" href="/" onClick={() => handleLinks('home')}>
              <img src='/assets/ss_logo.png' alt="ServerStats Logo" className="rounded-md h-14" />
            </Link>
            <button className="navbar-close" onClick={closeMenu}>
              <svg className="h-6 w-6 text-gray-300 cursor-pointer hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <ul>
            {['setup', 'donate', 'commands', 'status'].map((link) => (
              <li key={link} className="mb-1">
                <Link
                  className={`font-semibold block p-4 transition duration-300 ease-in-out ${
                    active === link ? 'text-md text-white font-bold' : 'text-md text-gray-300 hover:text-white'
                  }`}
                  onClick={() => handleLinks(link)}
                  href={link === 'donate' ? 'https://www.patreon.com/serverstats' : `/${link}`}
                  target={link === 'donate' ? '_blank' : '_self'}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
