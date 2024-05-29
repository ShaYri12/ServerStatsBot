'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [active, setActive] = useState("home");
  
    const handleLinks = (links) => {
      setActive(links);
    };
  
    useEffect(() => {
      const handleMenuClick = () => {
        const menus = document.querySelectorAll(".navbar-menu");
        menus.forEach((menu) => {
          menu.classList.toggle("hidden");
        });
      };
  
      const handleCloseClick = () => {
        const menus = document.querySelectorAll(".navbar-menu");
        menus.forEach((menu) => {
          menu.classList.add("hidden");
        });
      };
  
      const handleBackdropClick = (e) => {
        if (e.target.classList.contains("navbar-backdrop")) {
          const menus = document.querySelectorAll(".navbar-menu");
          menus.forEach((menu) => {
            menu.classList.add("hidden");
          });
        }
      };
  
      document.querySelectorAll(".navbar-burger").forEach((burger) => {
        burger.addEventListener("click", handleMenuClick);
      });
  
      document.querySelectorAll(".navbar-close").forEach((close) => {
        close.addEventListener("click", handleCloseClick);
      });
  
      document.querySelectorAll(".navbar-backdrop").forEach((backdrop) => {
        backdrop.addEventListener("click", handleBackdropClick);
      });
  
      return () => {
        document.querySelectorAll(".navbar-burger").forEach((burger) => {
          burger.removeEventListener("click", handleMenuClick);
        });
  
        document.querySelectorAll(".navbar-close").forEach((close) => {
          close.removeEventListener("click", handleCloseClick);
        });
  
        document.querySelectorAll(".navbar-backdrop").forEach((backdrop) => {
          backdrop.removeEventListener("click", handleBackdropClick);
        });
      };
    }, []);
  
    return (
      <header>
        <nav className="fixed  w-full z-50 lg:px-14 px-4 py-2 flex justify-between items-center bg-[#263042] shadow-md ">
          <Link className="text-2xl font-bold flex gap-2  leading-none" href="/" onClick={() => handleLinks("home")}>
            <img src='/assets/ss_logo.png' alt="" className="rounded-md h-14 " />
            <div className="flex flex-col justify-center">
              <p className="text-md text-white">ServerStats</p>
            </div>
          </Link>
          <div className="lg:hidden">
            <button className="navbar-burger flex items-center text-white p-3">
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <Link
                className={` font-semibold transition duration-300 ease-in-out
                ${active === "setup"
                  ? "text-md text-white font-bold"
                  : "text-md text-gray-300 hover:text-white"}
              `}
                onClick={() => handleLinks("setup")}
                href="/setup"
              >
                Setup
              </Link>
            </li>
            <li className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <Link
                className={` font-semibold transition duration-300 ease-in-out
                  ${active === "donate"
                    ? "text-md text-white font-bold"
                    : "text-md text-gray-300 hover:text-white"}
                `}
                href="https://www.patreon.com/serverstats" target="_blank"
              >
                Donate
              </Link>
            </li>
            <li className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <Link
                className={` font-semibold transition duration-300 ease-in-out
                ${active === "commands"
                  ? "text-md text-white font-bold"
                  : "text-md text-gray-300 hover:text-white"}
              `}
                onClick={() => handleLinks("commands")}
                href="/commands"
              >
                Commands
              </Link>
            </li>
            <li className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <Link
                className={` font-semibold transition duration-300 ease-in-out
                    ${active === "status"
                        ? "text-md text-white font-bold"
                        : "text-md text-gray-300 hover:text-white"}
                    `}
                onClick={() => handleLinks("status")}
                href="/status"
              >
                Status
              </Link>
            </li>
          </ul>
        </nav>
        <div className="navbar-menu relative z-50 hidden ">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-[#263042] border-r overflow-y-auto">
            <div className="flex items-center mb-8 ">
              <Link className="mr-auto  text-3xl font-bold leading-none" href="/">
              <img src='/assets/ss_logo.png' alt="" className="rounded-md h-14 " />
              </Link>
              <button className="navbar-close">
                <svg
                  className="h-6 w-6 text-gray-300 cursor-pointer hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <Link
                    className={` font-semibold block p-4 transition duration-300 ease-in-out
                        ${active === "setup"
                            ? "text-md text-white font-bold"
                            : "text-md text-gray-300 hover:text-white"}
                        `}
                    onClick={() => handleLinks("setup")}
                    href="/setup"
                    >
                    Setup
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className={` font-semibold block p-4 transition duration-300 ease-in-out
                    ${active === "donate"
                        ? "text-md text-white font-bold"
                        : "text-md text-gray-300 hover:text-white"}
                    `}
                    href="https://www.patreon.com/serverstats" target="_blank"
                  >
                    Donate
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className={` font-semibold block p-4 transition duration-300 ease-in-out
                    ${active === "commands"
                        ? "text-md text-white font-bold"
                        : "text-md text-gray-300 hover:text-white"}
                    `}
                    href="/commands"
                    onClick={() => handleLinks("commands")}
                  >
                    Commands
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className={` font-semibold block p-4 transition duration-300 ease-in-out
                        ${active === "status"
                            ? "text-md text-white font-bold"
                            : "text-md text-gray-300 hover:text-white"}
                        `}
                    href="/status"
                    onClick={() => handleLinks("status")}
                  >
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Navbar;
  