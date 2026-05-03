import React from 'react'
import hBanner from "../../public/Assets/hBanner.png"

const Banner = () => {
  return (
    <div className='relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden'>
      <div>
        <img src={hBanner.src} alt='Banner' className='h-[280px] w-full object-cover md:h-[380px] lg:h-[520px]' />

        <div className='pointer-events-none absolute inset-0 bg-gradient-to-r from-white/80 via-white/35 to-white/10'></div>
      </div>

      {/* Container for content */}
      <div className='absolute inset-y-0 left-1/2 z-10 flex w-full max-w-[86%] -translate-x-1/2 justify-between items-center md:max-w-[83%] lg:max-w-[80%]'>

        {/* Details (Left Side) */}
        <div className='flex flex-col justify-center animate__animated animate__fadeInLeft'>
          {/* Tooltip  */}
          <div className='w-fit rounded-full bg-[#e6be8a] px-2.5 py-1 md:px-3 lg:px-4'>
            <p className='text-[9px] font-bold tracking-[0.08em] text-black md:text-[10px] lg:text-xs'>
              SUMMER SALE 2026
            </p>
          </div>

          {/* Heading  */}
          <div className='mt-3 max-w-[270px] md:max-w-[360px] lg:max-w-[460px]'>
            <h1 className='text-4xl font-extrabold leading-[0.9] text-[#022d30] md:text-5xl lg:text-7xl'>
              SUMMER
            </h1>
            <h1 className='text-4xl font-extrabold italic leading-[0.9] text-[#008080] md:text-5xl lg:text-7xl'>
              SALE
            </h1>
          </div>

          {/* description  */}
          <div className='mt-3 max-w-[280px] md:mt-4 md:max-w-[380px] lg:max-w-[460px]'>
            <p className='max-w-[420px] text-[11px] leading-relaxed text-[#26464e] md:text-sm lg:text-base'>
              Embrace the sun-drenched lifestyle with our curated collection of artisanal essentials. Up to 40% off our Mediterranean favorites.
            </p>
          </div>

          {/* Button  */}
          <div className='mt-5 flex max-w-[320px] flex-wrap items-center gap-2.5 md:mt-6 md:max-w-[460px] md:gap-4 lg:gap-5'>
            <button className='rounded-md bg-[#007d7d] px-3.5 py-2 text-[11px] font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006868] hover:shadow-[0_10px_22px_rgba(0,125,125,0.35)] active:translate-y-0 md:px-5 md:py-2.5 md:text-xs lg:px-6 lg:py-3 lg:text-sm'>
              Shop Collections
            </button>
            <button className='group rounded-md border border-[#0f7d7d]/30 bg-white/45 px-3.5 py-2 text-[11px] font-bold text-[#0f6168] shadow-sm backdrop-blur-[1px] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0f7d7d] hover:bg-[#0f7d7d]/12 hover:shadow-[0_10px_22px_rgba(15,125,125,0.18)] md:px-5 md:py-2.5 md:text-xs lg:px-6 lg:py-3 lg:text-sm'>
              Explore Tips
            </button>
          </div>
        </div>

        {/* Right card */}
        <div className='hidden md:flex w-1/2 justify-end mr-4 lg:mr-10'>
          <div className="relative p-6 lg:p-8 rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] animate__animated animate__zoomIn animate__delay-1s">

            {/* Tooltip */}
            <div className="absolute -top-4 -left-4 bg-[#0080805d] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg animate__animated animate__bounceIn animate__delay-2s flex items-center gap-1">
              🔥 Hot Deal
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#022d30] mb-3 drop-shadow-sm">
              40% <span className="text-[#008080]">OFF</span>
            </h2>
            <p className="text-sm lg:text-base font-medium text-[#1c383e] max-w-[200px] leading-relaxed">
              On all Mediterranean favorites. Grab yours before the stock runs out!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
