import React from 'react'
import hBanner from "../../public/Assets/hBanner.png"

const Banner = () => {
  return (
    <div className='relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden'>
      <div>
        <img src={hBanner.src} alt='Banner' className='h-[280px] w-full object-cover md:h-[380px] lg:h-[520px]' />
      
      <div className='pointer-events-none absolute inset-0 bg-gradient-to-r from-white/80 via-white/35 to-white/10'></div>
      </div>
      {/* Details  */}
      <div className='absolute inset-y-0 left-1/2 z-10 flex w-full max-w-[86%] -translate-x-1/2 flex-col justify-center md:max-w-[83%] lg:max-w-[80%]'>
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
      
    </div>
    
  )
}

export default Banner
