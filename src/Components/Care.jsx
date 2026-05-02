import React from 'react'
import { MdOutlineWaterDrop } from 'react-icons/md'
import { MdOutlineWbSunny } from 'react-icons/md'
import { RiFlowerLine } from 'react-icons/ri'


const Care = () => {
  return (
    <div className='bg-[#f3f4f5]'>
      <div className='max-w-[80%] mx-auto py-14 md:py-16 lg:py-20'>
        <div className='text-center'>
            <p className='text-[#e6be8a] font-bold text-sm md:text-base'>
                SUNCART JOURNAL
            </p>
            <h3 className='text-2xl font-bold mt-3 md:text-3xl'>
                Summer Care Tips
            </h3>
        </div>
        <div className='mt-10 grid grid-cols-1 gap-10 md:mt-12 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 lg:gap-8'>
            <div className='flex flex-col justify-start items-center text-center space-y-4 px-2'>
                <span className='p-3 bg-[#93f2f2] rounded-full'>
                    <MdOutlineWaterDrop className='h-[34px] w-[34px] text-[#006565] md:h-[38px] md:w-[38px] lg:h-[40px] lg:w-[40px]'></MdOutlineWaterDrop>
                </span>
                <h1 className='font-extrabold text-[20px] text-gray-900 md:text-[22px]'>
                    Hydration Strategy
                </h1>
                <p className='text-sm text-gray-700 md:text-base leading-relaxed'>
                    Beyond just drinking water, discover the electrolytes your skin craves after a day in the mediterranean heat.
                </p>
            </div>
            <div className='flex flex-col justify-start items-center text-center space-y-4 px-2'>
                <span className='p-3 bg-[#93f2f2] rounded-full'>
                    <MdOutlineWbSunny className='h-[34px] w-[34px] text-[#006565] md:h-[38px] md:w-[38px] lg:h-[40px] lg:w-[40px]'></MdOutlineWbSunny>
                </span>
                <h1 className='font-extrabold text-[20px] text-gray-900 md:text-[22px]'>
                    The Golden Hour
                </h1>
                <p className='text-sm text-gray-700 md:text-base leading-relaxed'>
                    Timing is everything. Learn how to maximize your glow while minimizing UV stress during peak solar intensity.
                </p>
            </div>
            <div className='flex flex-col justify-start items-center text-center space-y-4 px-2'>
                <span className='p-3 bg-[#93f2f2] rounded-full'>
                    <RiFlowerLine className='h-[34px] w-[34px] text-[#006565] md:h-[38px] md:w-[38px] lg:h-[40px] lg:w-[40px]'></RiFlowerLine>
                </span>
                <h1 className='font-extrabold text-[20px] text-gray-900 md:text-[22px]'>
                    Organic Recovery
                </h1>
                <p className='text-sm text-gray-700 md:text-base leading-relaxed'>
                    Explore our curation of post-sun botanicals that repair and rejuvenate your skin barrier overnight.
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Care
