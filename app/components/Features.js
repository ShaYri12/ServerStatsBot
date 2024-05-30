import React from 'react'

const Features = () => {
  return (
    <div>
      <section class="text-white body-font">
        <div class="container shadow-lg mx-auto flex px-5 py-24 md:flex-row flex-col justify-center items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div class="md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
              Fancy Counters
            </h1>
            <p class="mb-8 text-gray-300 text-lg">
              The bot creates fancy counters that everyone can see, they are
              easy to change and make them exactly how you want them to be. All
              counters automatically update (every 10 minutes) so you don't have
              to think about anything after the setup.
            </p>
          </div>
        </div>
      </section>
      <section class="text-white body-font">
        <div class="container shadow-lg mx-auto flex px-5 py-24 md:flex-row flex-col justify-center items-center">
          <div class="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center md:order-1 order-2 ">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
              Easy To Setup
            </h1>
            <p class="mb-8 text-gray-300 text-lg">
              You can setup the bot with only one command '/setup', then you get
              to pick some channel options. After that - when executing the
              command - the counters will be created. If you need any help just
              join the support discord and we will help you out.
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md-order-2 order-1 md-mb-0 mb-14">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
      <section class="text-white body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col justify-center items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div class="md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
              Fully Customizable
            </h1>
            <p class="mb-8 text-gray-300 text-lg">
              All counters created by the bot are easy to customize (you don't
              even need a command), just rename the counters like a normal
              discord channel and the bot will pick it up. The bot will always
              update the first number in the name so it needs at least one
              number to work.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features