import React from 'react';
import { HiOutlineCommandLine } from "react-icons/hi2";
import { FaServer } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";

const Stats = () => {
  return (
    <div className="bg-bg_footer text-white py-8 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap  justify-between text-center">
          <div className="flex flex-col p-3 items-center flex-grow">
            <FaServer size={50} />
            <div className="text-2xl font-bold mt-2">+2.7M</div>
            <div className="text-lg font-bold">Servers</div>
          </div>
          <div className="flex flex-col p-3 items-center flex-grow">
            <MdOutlineTimer size={50} />
            <div className="text-2xl font-bold mt-2">+32</div>
            <div className="text-lg font-bold">Counters</div>
          </div>
          <div className="flex flex-col p-3 items-center flex-grow">
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
