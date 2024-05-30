import React from 'react';
import { FaServer } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { HiOutlineCommandLine } from "react-icons/hi2";

const StatCard = ({ icon, number, label }) => (
  <div className="flex flex-col p-3 items-center flex-grow">
    {icon}
    <div className="text-2xl font-bold mt-2">{number}</div>
    <div className="text-lg font-bold">{label}</div>
  </div>
);

const Stats = () => {
  const stats = [
    { icon: <FaServer size={50} />, number: "+2.7M", label: "Servers" },
    { icon: <MdOutlineTimer size={50} />, number: "+32", label: "Counters" },
    { icon: <HiOutlineCommandLine size={50} />, number: "+30", label: "Commands" }
  ];

  return (
    <div className="bg-bg_footer text-white py-8 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between text-center">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stats;
