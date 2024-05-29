'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from "@material-tailwind/react";


const Footer = () => {
  return (
    <>
    <div class="relative top-0 left-0 w-full overflow-hidden bg-[#181e2a] leading-none">
      <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          class="relative block w-[calc(100%+1.3px)] h-[64px]"
      >
          <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="fill-[#1c2330]"
          ></path>
      </svg>
  </div>
    <footer className="bg-bg_footer text-white py-16 px-7">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="w-fit flex flex-col md:flex-row items-center md:space-x-2 space-y-2">
          <img src='/assets/ss_logo.png' alt="" className="rounded-md h-14 " />
            <span className="text-3xl font-bold text-gray-300">ServerStats</span>
          </div>
          <div className="md:w-1/3 w-auto flex flex-col space-y-4 text-center">
            <span className="text-lg font-semibold">Information</span>
            <Link className="hover:text-blue-500 underline text-[#22a7f0] transition duration-300 ease-in-out" href="#">
              Privacy statement
            </Link>
            <Link className="hover:text-blue-500 underline text-[#22a7f0] transition duration-300 ease-in-out" href="#">
              Terms of use
            </Link>
          </div>
          <div className="md:w-1/3 w-auto flex flex-col space-y-4 text-center">
            <span className="text-lg font-semibold ">ServerStats Premium</span>
            <p className="text-sm">Get more out of ServerStats. Get the premium by donating.</p>
            <Link href="https://www.patreon.com/serverstats" target="_blank" >
              <Button className="text-center w-full bg-[#22a7f0] py-2 rounded-lg focus:bg-[#44bbfc] hover:bg-[#44bbfc] text-white transition duration-300 ease-in-out">
                Donate
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer

