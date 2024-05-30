'use client';
import React, { useEffect, useState } from 'react';
import { Tooltip, Button, Input } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";

const Status = () => {
    const [data, setData] = useState(null);
    const [nextUpdate, setNextUpdate] = useState(60); // Initial countdown until next update
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState(null);

    useEffect(() => {
        window.scrollTo(0, -1);
    }, []);

  useEffect(() => {
    fetchData(); // Fetch data initially
    const intervalId = setInterval(fetchData, 60000); // Fetch data every 60 seconds

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const fetchData = () => {
    // Fetch the data from the API
    fetch('https://api.serverstatsbot.com/stats') // replace with your actual API endpoint
      .then(response => response.json())
      .then(data => {
        setData(data);
        setNextUpdate(60); // Reset countdown after each successful fetch
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    // Update countdown every second
    const intervalId = setInterval(() => {
      setNextUpdate(prevTime => (prevTime > 0 ? prevTime - 1 : 60)); // Decrease countdown every second
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searched = searchTerm;
    const result = data.clusters.find(cluster => {
        return cluster.shardsStats.some(shard => shard.id.toString() === searched);
    });

    if (result) {
        // Assuming shardID is a property of the shard object inside the result
        const shardID = result.shardsStats.find(shard => shard.id.toString() === searched)?.id;
        setSearchResult({ ...result, shardID: shardID });
    } else {
        setSearchResult(null);
    }
};
    
  const formatUptime = (totalMilliseconds) => {
    const totalSeconds = Math.floor(totalMilliseconds / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);

    const formattedTime = [];

    if (days > 0) {
        formattedTime.push(`${days}d`);
    }
    if (hours > 0) {
        formattedTime.push(`${hours}h`);
    }
    if (minutes > 0 || days === 0 && hours === 0) {
        formattedTime.push(`${minutes}m`);
    }

    return formattedTime.join(' ');
};

  if (!data) {
    return <div className='flex items-center justify-center min-h-screen font-bold text-white text-lg'>Loading...</div>;
  }

  return (
    <section className='py-24'>
      <div className="bg-zinc-900 min-h-screen p-6 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Bot Status</h1>
          <div className="mb-6 space-y-1">
            <p>Next update: <span className="font-semibold">{nextUpdate}</span></p>
            <p>Counter Updates: <span className="font-semibold">{data.totalCounterUpdates}</span></p>
            <p>Unavailable Servers: <span className="font-semibold">{data.totalUnavailableGuilds}</span></p>
          </div>
            <form className="flex md:w-96 w-auto text-white mb-6" onSubmit={handleSearch}>
                <Input 
                    color="light-blue" 
                    className='text-white rounded-none rounded-l-lg' 
                    type="number"
                    variant="outlined" 
                    label="Search for a server by ID"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    
                />
                <Button onClick={handleSearch} className="bg-blue-500 text-white px-4 rounded-none rounded-r-lg"><FaSearch size="16"/></Button>
            </form>
            {searchResult && (
                <div className="mb-4">
                    <p className="text-lg text-white">
                    * Located in cluster {searchResult.cluster + 1} and shard {searchResult.shardID} *
                    </p>
                </div>
            )}
          <div className="flex items-center flex-wrap mb-6">
            <div className="flex items-center p-2">
              <span className="w-4 h-4 bg-green-400 rounded-full inline-block mr-2"></span>
              <span>Online</span>
            </div>
            <div className="flex items-center p-2">
              <span className="w-4 h-4 bg-yellow-700 rounded-full inline-block mr-2"></span>
              <span>Partial Outage</span>
            </div>
            <div className="flex items-center p-2">
              <span className="w-4 h-4 bg-red-600 rounded-full inline-block mr-2"></span>
              <span>Outage</span>
            </div>
            <div className="flex items-center p-2">
              <span className="w-4 h-4 bg-gray-600 rounded-full inline-block mr-2"></span>
              <span>Offline</span>
            </div>
          </div>
          <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-10 gap-2">
            {data.clusters.map(cluster => (
              <Tooltip className="bg-gray-800/95"
                key={cluster.cluster}
                content={(
                    
                  <div className="p-2">
                    {cluster.shardsStats.map(shard => (
                      <div
                        key={shard.id}
                        className={`p-1 rounded-lg text-left  ${getStatusClass(shard.status)}`}
                      >
                        {`Shard ${shard.id} - ${shard.latency}ms`}
                      </div>
                    ))}
                    <hr className='my-2'/>
                    <div className="p-1 space-y-1">
                        <p><span>Uptime:</span> {formatUptime(cluster.clusterUptime)}</p>
                        <p><span>Guilds:</span> {cluster.guilds}</p>
                    </div>
                  </div>
                )}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
                placement="left"
              >
                <Button
                  className={`md:p-4 p-2 rounded-lg text-center text-lg font-semibold ${getClusterStatusClass(cluster.shardsStats)}`}
                >
                  {cluster.cluster + 1}
                </Button>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </section>
);
}

export default Status;

function getClusterStatusClass(shardsStats) {
const allStatuses = shardsStats.map(shard => shard.status);
const allReady = allStatuses.every(status => status === 'ready');
const allOffline = allStatuses.every(status => status === 'offline');
const someReady = allStatuses.some(status => status === 'ready');
const someOffline = allStatuses.some(status => status === 'offline');

if (allReady) return 'text-green-400';
if (allOffline) return 'text-gray-600';
if (someReady && someOffline) return 'text-yellow-700';
if (someReady) return 'text-yellow-500'; // Adjust this based on your needs
return 'text-zinc-800'; // Default case if none of the conditions match
}

function getStatusClass(status) {
switch (status) {
  case 'ready':
    return 'text-green-400';
  case 'partial':
    return 'text-yellow-700';
  case 'outage':
    return 'text-red-600';
  case 'offline':
    return 'text-gray-600';
  default:
    return '';
}
}