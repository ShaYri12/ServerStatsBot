import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';

const marqueeSettings = {
  speed: 50,
  pauseOnHover: true,
};

const partners = [
  {
    href: 'https://securitybot.gg/',
    imgSrc: '/assets/security_logo.png',
    alt: 'Security Bot Logo',
    name: 'Security Bot',
  },
  {
    href: 'https://erisly.com/',
    imgSrc: '/assets/erisly_logo.png',
    alt: 'Erisly Logo',
    name: 'Erisly',
  },
  {
    href: 'https://studiofow.com/',
    imgSrc: '/assets/fow_logo.png',
    alt: 'Studio FOW Logo',
    name: 'Studio FOW',
  },
  {
    href: 'https://discords.com/',
    imgSrc: '/assets/discords_logo.png',
    alt: 'Discords Logo',
    name: 'Discords',
  },
];

const Partners = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white text-center mb-8">Our Partners</h2>
        <Marquee {...marqueeSettings} direction="right">
          <div className="flex justify-between space-x-4">
            {partners.map((partner, index) => (
              <Link
                key={index}
                href={partner.href}
                target="_blank"
                className="w-[320px] flex flex-col items-center justify-center rounded-lg p-4 space-y-2"
              >
                <img
                  src={partner.imgSrc}
                  alt={partner.alt}
                  className="h-32 w-32 object-contain rounded-lg"
                />
                <span className="text-white text-lg">{partner.name}</span>
              </Link>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Partners;
