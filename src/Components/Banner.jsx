import React from 'react'
import hBanner from "../../public/Assets/hBanner.png"
import { TbPlayerPlayFilled } from 'react-icons/tb'
const Banner = () => {
  return (
    <div className='relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden'>
      <div>
        <img src={hBanner.src} alt='Banner' className='h-[320px] w-full object-cover md:h-[420px] lg:h-[520px]' />
      
      <div className='pointer-events-none absolute inset-0 bg-gradient-to-r from-white/80 via-white/35 to-white/10'></div>
      </div>
      
      <div className='absolute inset-y-0 left-[6%] z-10 flex max-w-[320px] flex-col justify-center md:max-w-[460px]'>
        {/* Tooltip  */}
        <div className='w-fit rounded-full bg-[#e6be8a] px-3 py-1 md:px-4'>
        <p className='text-[10px] font-bold tracking-[0.08em] text-black md:text-xs'>
            SUMMER SALE 2026
        </p>
      </div>

      {/* Heading  */}
      <div className='mt-3'>
        <h1 className='text-4xl font-extrabold leading-[0.9] text-[#022d30] md:text-6xl'>
            The
            <span className='ml-2 text-[#008080] italic'>
                Azure
            </span>
        </h1>
        <h1 className='text-4xl font-extrabold leading-[0.9] text-[#022d30] md:text-6xl'>
            Edit
        </h1>
      </div>

      {/* description  */}
      <div className='mt-4'>
        <p className='max-w-[420px] text-xs leading-relaxed text-[#26464e] md:text-base'>
            Bask in the glow of a curated season. Discover artisan-made essentials for the modern digital curator
        </p>
      </div>

      {/* Button  */}
      <div className='mt-6 flex items-center gap-3 md:gap-5'>
        <button className='rounded-md bg-[#007d7d] px-4 py-2 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006868] hover:shadow-[0_10px_22px_rgba(0,125,125,0.35)] active:translate-y-0 md:px-6 md:py-3 md:text-sm'>
        Shop Collections
      </button>
      <button className='group flex items-center gap-3 text-xs font-bold text-[#0f6168] transition-all duration-300 hover:-translate-y-0.5 hover:text-[#075a60] md:gap-4 md:text-sm'>
        Watch the Lookbook
        <span className='flex h-8 w-8 items-center justify-center rounded-full bg-[#79e3e3] text-[#0f6168] shadow-sm transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-[#67d9d9] group-hover:shadow-md md:h-10 md:w-10'>
          <TbPlayerPlayFilled className='text-sm md:text-base' />
        </span>
      </button>
      </div>
      </div>
      
    </div>
    
  )
}

export default Banner
