import React from 'react'

const TrustedBy = () => {
  return (
    <>
    <div className="relative top-0 left-0 w-full bg-[#222a3a] overflow-hidden leading-none transform rotate-180">
      <svg className="relative block w-[calc(113%+1.3px)] h-16" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path className="fill-[#181e2a]" d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"/>
      </svg>
    </div>
    <div class="bg-[#222a3a] text-white py-16 pt-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-extrabold mb-10">Trusted by Over 120,000+ Servers</h2>
            <div class="flex flex-wrap justify-center space-x-4">
            <div class="flex items-center text-lg space-x-2  p-4 rounded-lg">
                <img src="https://cdn.discordapp.com/icons/368233883193573377/a_1483baa4d16dfc65ea935ac66fefe2cb.webp?size=128" alt="Server 2" class="w-16 h-16 rounded-full" />
                <div>
                <p class="font-semibold">Dynamo Gaming</p>
                <p class="text-sm text-zinc-400">384k+ members</p>
                </div>
            </div>
            <div class="flex items-center text-lg space-x-2 p-4 rounded-lg">
                <img src="/assets/pewdiepie.jpg" alt="Server 1" class="w-16 h-16 rounded-full" />
                <div>
                <p class="font-semibold">PewDiePie</p>
                <p class="text-sm text-zinc-400">205k+ members</p>
                </div>
            </div>
            <div class="flex items-center text-lg space-x-2  p-4 rounded-lg">
                <img src="https://cdn.pixx.ie/web/assets/img/home/monopolygo.png" alt="Server 2" class="w-16 h-16 rounded-full" />
                <div>
                <p class="font-semibold">Monopoly Go!</p>
                <p class="text-sm text-zinc-400">90k+ members</p>
                </div>
            </div>
            <div class="flex items-center text-2xl space-x-2 p-4 rounded-lg">
                <div>
                <p class="font-semibold">+120K others...</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div class="relative bottom-0 left-0 w-full overflow-hidden bg-[#222a3a] leading-none transform rotate-180">
        <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            class="relative block w-[calc(113%+1.3px)] h-[64px]"
        >
            <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="fill-[#1c2330]"
            ></path>
        </svg>
    </div>

    </>
  )
}

export default TrustedBy