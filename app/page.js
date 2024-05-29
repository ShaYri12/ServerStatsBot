'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@material-tailwind/react";
import QuickLinks from './components/QuickLinks';
import Partners from './components/Partners';
import Stats from './components/Stats';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, -1);
  }, []);

  return (
    <div>
      <section class="text-gray-600 lg:px-10 px-0 body-font  pt-10">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center lg:space-x-6">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src="/assets/hero-img.svg"/>
          </div>
          <div class="w-fit lg:pl-22 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">ServerStats</h1>
            <p class="mb-8 text-white">Welcome to the website of ServerStats bot!.</p>
            <div class="flex justify-center space-x-4">
            <Link href="https://www.patreon.com/serverstats" target="_blank" >
              <Button className="text-center w-full bg-[#22a7f0] py-2 rounded-md focus:bg-[#44bbfc] hover:bg-[#44bbfc] text-white transition duration-300 ease-in-out">
                INVITE BOT
              </Button>
            </Link>
            <Link href="https://discord.com/invite/vE8qKNV" target="_blank" >
              <Button className="text-center w-full border border-[#22a7f0] py-2 rounded-md focus:bg-[#22a8f021] hover:bg-[#22a8f021] hover:text-[#22a7f0] text-[#22a7f0] transition duration-300 ease-in-out">
                GET SUPPORT
              </Button>
            </Link>
            </div>
          </div>
        </div>
      </section>

      <Stats/>

      <TrustedBy/>

      <Features/>

      <QuickLinks/>

      <Partners/>

    </div>
  );
}
