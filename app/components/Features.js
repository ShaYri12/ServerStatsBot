import React from 'react';

const FeatureCard = ({ title, description, imageSrc, reverse }) => {
  return (
    <section className="text-white body-font">
      <div className={`container shadow-lg mx-auto flex px-5 py-24 md:flex-row flex-col justify-center items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img className="object-cover object-center rounded" alt={title} src={imageSrc} />
        </div>
        <div className="md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">{title}</h1>
          <p className="mb-8 text-gray-300 text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: 'Fancy Counters',
      description:
        'The bot creates fancy counters that everyone can see, they are easy to change and make them exactly how you want them to be. All counters automatically update (every 10 minutes) so you don\'t have to think about anything after the setup.',
      imageSrc: 'https://dummyimage.com/720x600',
    },
    {
      title: 'Easy To Setup',
      description:
        'You can setup the bot with only one command \'/setup\', then you get to pick some channel options. After that - when executing the command - the counters will be created. If you need any help just join the support discord and we will help you out.',
      imageSrc: 'https://dummyimage.com/720x600',
      reverse: true,
    },
    {
      title: 'Fully Customizable',
      description:
        'All counters created by the bot are easy to customize (you don\'t even need a command), just rename the counters like a normal discord channel and the bot will pick it up. The bot will always update the first number in the name so it needs at least one number to work.',
      imageSrc: 'https://dummyimage.com/720x600',
    },
  ];

  return (
    <div>
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};

export default Features;
