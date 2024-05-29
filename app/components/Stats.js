import React from 'react';
import { HiOutlineCommandLine } from "react-icons/hi2";
import { FaServer } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";

const Stats = () => {
  return (
    <div className="bg-bg_footer text-white py-8 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <FaServer size={50} />
            <div className="text-2xl font-bold mt-2">+2.7M</div>
            <div className="text-lg font-bold">Servers</div>
          </div>
          <div className="flex flex-col items-center">
            <MdOutlineTimer size={50} />
            <div className="text-2xl font-bold mt-2">+32</div>
            <div className="text-lg font-bold">Counters</div>
          </div>
          <div className="flex flex-col items-center">
            <HiOutlineCommandLine size={50} />
            <div className="text-2xl font-bold mt-2">+30</div>
            <div className="text-lg font-bold">Commands</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats;
