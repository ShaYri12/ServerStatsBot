import gradient from '@material-tailwind/react/theme/components/timeline/timelineIconColors/gradient';
import Link from 'next/link'
import React from 'react'
import Marquee from "react-fast-marquee";

const Partners = () => {
    var settings = {
        speed:50,
        pauseOnHover:true,
    };

  return (
    <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-white text-center mb-8">Our Partners</h2>
            <Marquee {...settings}  direction="right">
              <div className="flex justify-between">
                <Link href="https://securitybot.gg/" target="_blank" className="w-[320px] flex flex-col items-center justify-center rounded-lg p-4 space-y-2">
                    <img src="/assets/security_logo.png" alt="Partner 1" className="h-32 w-32 object-contain  rounded-lg"/>
                    <span className='text-white text-lg'>Security Bot</span>
                </Link>
                <Link href="https://erisly.com/" target="_blank" className="w-[320px] flex flex-col items-center justify-center rounded-lg p-4 space-y-2">
                    <img src="/assets/erisly_logo.png" alt="Partner 2" className="h-32 w-32 object-contain rounded-lg"/>
                    <span className='text-white text-lg'>Erisly</span>
                </Link>
                <Link href="https://studiofow.com/" target="_blank" className="w-[320px] flex flex-col items-center justify-center rounded-lg p-4 space-y-2">
                    <img src="/assets/fow_logo.png" alt="Partner 3" className="h-32 w-32 object-contain rounded-lg"/>
                    <span className='text-white text-lg'>Studio FOW</span>
                </Link>
                <Link href="https://discords.com/" target="_blank" className="w-[320px] flex flex-col items-center justify-center rounded-lg p-4 space-y-2">
                    <img src="/assets/discords_logo.png" alt="Partner 4" className="h-32 w-32 object-contain rounded-lg"/>
                    <span className='text-white text-lg'>Discords</span>
                </Link>
              </div>
            </Marquee>
        </div>
    </div>
  )
}

export default Partners
