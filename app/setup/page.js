'use client'
import React, { useEffect } from 'react'
import { Button } from "@material-tailwind/react";
import Link from 'next/link';


const Setup = () => {
  useEffect(() => {
    window.scrollTo(0, -1);
  }, []);
  return (
    <section className='py-20 px-5'>
      <div className='container flex mx-auto flex-col items-center w-full justify-center'>
        <div className='py-8 text-center'>
          <h1 className='text-white font-bold text-4xl pb-2'>How To Setup ServerStats Bot?</h1>
          <p className='text-gray-300'>On this page you'll find steps that you can follow to setup the bot.</p>
        </div>
          <span className='text-gray-100 font-medium text-md pb-5'>
            Video Provided By: <a href="https://www.youtube.com/@fleetdiscord" target="_blank" className='underline text-blue-400'>Fleet</a>
          </span>
        <div className='w-11/12 lg:h-[550px] md:h-[400px] h-[300px] rounded-lg'>
          <iframe data-v-b1260806="" className='rounded-lg' width="100%" height="100%" src="https://www.youtube.com/embed/VuC8xmG7hm4" title="YouTube video player" allow="accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture" allowFullScreen="allowFullScreen"></iframe>
        </div>
        <div className='step-by-step'>
          <section className="text-white body-font">
            <div className="container shadow-lg mx-auto flex px-5 py-24 md:flex-row flex-col justify-center items-center">
              <div className="lg:w-1/2 md:w-full flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
                <span className='bg-[#22a7f0] px-3 rounded-full'>Step 1:</span> Adding the bot
                </h1>
                <p className="mb-8 text-gray-300 text-lg">
                The first thing you have to do is add the bot to your server, use the button under this text to add the bot (You need to be login with Discord on your browser). If your on a phone that it's better to open the invite link in your browser and you don't have to change the permissions (it's already set to the bare minimum).
                </p>
                <Link href="https://discord.com/oauth2/authorize?client_id=458276816071950337&permissions=1100824&response_type=code&redirect_uri=https%3A%2F%2Fserverstatsbot.com%2Finvite&scope=bot" target="_blank" >
                  <Button className="text-center text-lg font-bold tracking-wider w-full border border-[#22a7f0] py-2 rounded-md focus:bg-[#22a8f021] hover:bg-[#22a8f021] hover:text-[#22a7f0] text-[#22a7f0] transition duration-300 ease-in-out">
                    INVITE THE BOT
                  </Button>
                </Link>
              </div>
            </div>
          </section>
          <section className="text-white body-font">
            <div className="container shadow-lg mx-auto flex px-5 py-24 md:flex-row flex-col justify-center items-center">
              <div className="md:w-1/2 lg:pr-7 md:pr-4 flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center md:order-1 order-2 ">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
                <span className='bg-[#22a7f0] px-3 rounded-full'>Step 2:</span> Start the setup
                </h1>
                <p className="mb-8 text-gray-300 text-lg">
                Type in the chat '/setup' then the channel type you wan. After the command you will get a message if there is an error or if the bot is done. If the bot doesn't respond then check the permissions in the channel you try to use it in.
                </p>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md-order-2 order-1 md-mb-0 mb-14">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="https://dummyimage.com/720x600"
                />
              </div>
            </div>
          </section>
          <section className="text-white body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col justify-center items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="https://dummyimage.com/720x600"
                />
              </div>
              <div className="md:w-1/2 lg:pl-7 md:pl-4 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white ">
                  Customize Counters (Optional)
                </h1>
                <p className="mb-8 text-gray-300 text-lg">
                You can change the counter text like normal channels, just right click on the channel and click 'Edit Channel'. keep in mind that there must be a number somewhere in the name (only the first number in the channel name will change).
                </p>
              </div>
            </div>
          </section>
          <section className="text-white body-font">
            <div className="container shadow-lg mx-auto flex px-5 py-24 md:flex-row flex-col justify-center items-center">
              <div className="md:w-1/2 lg:pr-7 md:pr-4 flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center md:order-1 order-2 ">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold  text-white">
                Add / Delete Counters (Optional)
                </h1>
                <p className="mb-8 text-gray-300 text-lg">
                You can disable counters by just deleting the counter or use the '/counter delete' command and following the steps. You can add an additional counter with the following command '/counter create' (you can see a full list of all the counter with this command '/counter').
                </p>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md-order-2 order-1 md-mb-0 mb-14">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="https://dummyimage.com/720x600"
                />
              </div>
            </div>
          </section>
        </div>
        <Link href="https://discord.com/invite/vE8qKNV" target="_blank" className='pt-24 pb-10' >
          <Button className="text-center font-bold tracking-wider text-lg w-full border border-[#22a7f0] py-2 rounded-md focus:bg-[#22a8f021] hover:bg-[#22a8f021] hover:text-[#22a7f0] text-[#22a7f0] transition duration-300 ease-in-out">
            STILL NEED MORE HELP? CLICK HERE
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default Setup