'use client'
import React, { useState, useEffect } from 'react';
import { Select, Option, Input } from "@material-tailwind/react";

const Commands = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    window.scrollTo(0, -1);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredCommands = commandsData.filter((command) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    const matchesSearch = 
      command.command.toLowerCase().includes(lowerSearchTerm) ||
      command.description.toLowerCase().includes(lowerSearchTerm) ||
      command.category.toLowerCase().includes(lowerSearchTerm);

    const matchesFilter = filter === "All" || command.category.toLowerCase() === filter.toLowerCase();

    return matchesSearch && matchesFilter;
  });

  return (
    <section className='container mx-auto py-20 text-white px-10'>
      <h1 className='font-extrabold text-center text-4xl py-10'>Commands</h1>
      <div className='px-1 flex flex-col md:flex-row justify-between py-5 items-center space-y-4 md:space-y-0 md:space-x-2'>
        <div className="w-72 text-white">
          <Input 
            color="light-blue" 
            className='text-white' 
            variant="outlined" 
            label="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="w-72">
          <Select 
          className='text-white' 
          color="light-blue" 
          variant="outlined" 
          label="Filter"
          value={filter}
          onChange={(value) => handleFilterChange(value)}
        >
          <Option value="All">All</Option>
          <Option value="General">General</Option>
          <Option value="Admin">Admin</Option>
          <Option value="Info">Info</Option>
        </Select>
        </div>
      </div>
      <div className='space-y-2 flex flex-col w-full'>
        {filteredCommands.map((command) => (
          <div key={command.id} className='text-md flex items-center md:flex-row flex-col text-center justify-between bg-[#22313f] hover:bg-[#384f64] rounded-lg py-3 px-4 md:space-x-4 space-x-0 space-y-2 transition duration-300 ease-in-out'>
            <h3 className='font-bold text-lg'>{command.command}</h3>
            <p className='text-gray-300'>{command.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Commands;

const commandsData = [
  {
    "id": "1",
    "command": "help",
    "description": "Shows a list of commands or information about a certain command.",
    "category": "general"
  },
  {
    "id": "2",
    "command": "ping",
    "description": "Shows the latency for the client and the shard.",
    "category": "general"
  },
  {
    "id": "3",
    "command": "invite",
    "description": "Shows a list of invite links for our bots.",
    "category": "general"
  },
  {
    "id": "4",
    "command": "vote",
    "description": "Shows information about voting for the bot.",
    "category": "general"
  },
  {
    "id": "5",
    "command": "donate",
    "description": "Shows information about donate/premium tiers and perks.",
    "category": "general"
  },
  {
    "id": "6",
    "command": "support",
    "description": "Shows information about how to get support.",
    "category": "general"
  },
  {
    "id": "7",
    "command": "partners",
    "description": "Shows information about our partners.",
    "category": "general"
  },
  {
    "id": "8",
    "command": "customize",
    "description": "Shows information about changing the counters.",
    "category": "admin"
  },
  {
    "id": "9",
    "command": "setup",
    "description": "Sets the bot up with some base counters.",
    "category": "admin"
  },
  {
    "id": "10",
    "command": "premium",
    "description": "Manage your premium servers.",
    "category": "admin"
  },
  {
    "id": "11",
    "command": "reset",
    "description": "Completely resets the bot and counters.",
    "category": "admin"
  },
  {
    "id": "12",
    "command": "counter",
    "description": "Create and manage the counters in your server.",
    "category": "admin"
  },
  {
    "id": "13",
    "command": "data",
    "description": "Gives you an export of all stored data from your server.",
    "category": "admin"
  },
  {
    "id": "14",
    "command": "members",
    "description": "Exports your members to a text file.",
    "category": "admin"
  },
  {
    "id": "15",
    "command": "category",
    "description": "Create and manage the category used to place counters under.",
    "category": "admin"
  },
  {
    "id": "16",
    "command": "welcome",
    "description": "Create and manage the welcome channel in your server.",
    "category": "admin"
  },
  {
    "id": "17",
    "command": "goal",
    "description": "Create and manage the goal counters in your server.",
    "category": "admin"
  },
  {
    "id": "18",
    "command": "command",
    "description": "Manage who can use and/or run slash commands.",
    "category": "admin"
  },
  {
    "id": "19",
    "command": "game",
    "description": "Create and manage game counters in your server.",
    "category": "admin"
  },
  {
    "id": "20",
    "command": "social",
    "description": "Create and manage social counters in your server.",
    "category": "admin"
  },
  {
    "id": "21",
    "command": "bot",
    "description": "Shows information about the bot itself.",
    "category": "info"
  },
  {
    "id": "22",
    "command": "serverinfo",
    "description": "Shows information about your server.",
    "category": "info"
  },
  {
    "id": "23",
    "command": "userinfo",
    "description": "Shows information about a member.",
    "category": "info"
  },
  {
    "id": "24",
    "command": "roleinfo",
    "description": "Shows information about a role.",
    "category": "info"
  },
  {
    "id": "25",
    "command": "channelinfo",
    "description": "Shows information about a channel or category.",
    "category": "info"
  },
  {
    "id": "26",
    "command": "inviteinfo",
    "description": "Shows information about an invite link or invite creators.",
    "category": "info"
  },
  {
    "id": "27",
    "command": "emojiinfo",
    "description": "Shows information about an emoji.",
    "category": "info"
  },
  {
    "id": "28",
    "command": "avatar",
    "description": "Shows the avatar for you or another member.",
    "category": "info"
  },
  {
    "id": "29",
    "command": "check",
    "description": "Check all counters and permissions for common mistakes.",
    "category": "admin"
  },
  {
    "id": "30",
    "command": "debug",
    "description": "Shows debug information for support.",
    "category": "admin"
  }
];
