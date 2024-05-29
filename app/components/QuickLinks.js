
import React from 'react'
import Link from 'next/link'
import { GoCommandPalette } from "react-icons/go";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaRobot } from "react-icons/fa";

const QuickLinks = () => {
  return (
    <section className="bg-[#222a3a] px-[4%] text-center ">
      <div className="grid md:grid-cols-3 gap-4 py-10">
        <Link href="/setup" className="cursor-pointer relative border cursor-default border-gray-300 flex flex-col group items-center py-5 px-5 rounded-lg overflow-hidden">
        <FaRobot size={80} className="text-white"/>     
          <h3 className="text-xl font-semibold text-white">Setup Bot</h3>
          <p className="text-sm pt-3 text-gray-300 ">
          Follow the setup guide to configure the bot to your needs. Unlock its advanced features for seamless integration and optimal performance.{" "}
          </p>
          <div className="absolute top-[-350px] w-full h-full opacity-15 bg-white duration-500 group-hover:top-0"></div>
        </Link>
        <Link href="https://discord.com/invite/vE8qKNV" target="_blank" className="cursor-pointer relative border cursor-default border-gray-300 flex flex-col group items-center py-5 px-5 rounded-lg overflow-hidden">
          <MdOutlineSupportAgent size={80} className="text-white"/>
          <h3 className="text-xl font-semibold text-white">Support</h3>
          <p className="text-sm pt-3 text-gray-300">
          Need help? Our support team is here to assist with troubleshooting, guidance, and any questions you might have.
          </p>
          <div className="absolute top-[-350px] w-full h-full opacity-15 bg-white duration-500 group-hover:top-0"></div>
        </Link>
        <Link href="/commands" className="cursor-pointer relative border cursor-default border-gray-300 flex flex-col group items-center py-5 px-5 rounded-lg overflow-hidden">
        <GoCommandPalette size={80} className="text-white"/>  
          <h3 className="text-xl font-semibold text-white">
            Commands
          </h3>
          <p className="text-sm pt-3 text-gray-300">
          Discover the full range of commands to control and customize your experience. Learn how to use each command effectively.
          </p>
          <div className="absolute top-[-350px] w-full h-full opacity-15 bg-white duration-500 group-hover:top-0"></div>
        </Link>
      </div>
    </section>
  )
}

export default QuickLinks