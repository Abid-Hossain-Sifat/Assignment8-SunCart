import React from 'react'
import { MdOutlineWaterDrop } from 'react-icons/md'
import { MdOutlineWbSunny } from 'react-icons/md'
import { RiFlowerLine } from 'react-icons/ri'


const Care = () => {
  return (
    <div className='bg-[#f3f4f5]'>
      <div className='max-w-[80%] mx-auto py-20'>
        <div className='text-center'>
            <p className='text-[#e6be8a] font-bold'>
                SUNCART JOURNAL
            </p>
            <h3 className='text-3xl font-bold mt-3'>
                Summer Care Tips
            </h3>
        </div>
        <div className='flex justify-between items-center mt-15'>
            <div className='flex flex-col justify-center items-center text-center space-y-3'>
                <span className='p-3 bg-[#93f2f2] rounded-full'>
                    <MdOutlineWaterDrop className='h-[40px] w-[40px] text-[#006565]'></MdOutlineWaterDrop>
                </span>
                <h1 className='font-extrabold text-[22px] text-gray-900'>
                    Hydration Strategy
                </h1>
                <p className='text-gray-700'>
                    Beyond just drinking water, discover the<br /> electrolytes your skin craves after a day in the<br /> mediterranean heat.
                </p>
            </div>
            <div className='flex flex-col justify-center items-center text-center space-y-3'>
                <span className='p-3 bg-[#93f2f2] rounded-full'>
                    <MdOutlineWbSunny className='h-[40px] w-[40px] text-[#006565]'></MdOutlineWbSunny>
                </span>
                <h1 className='font-extrabold text-[22px] text-gray-900'>
                    The Golden Hout
                </h1>
                <p className='text-gray-700'>
                    Timing is everything. Learn how to maximize<br /> your glow while minimizing UV stress during<br /> peak solar intensity.
                </p>
            </div>
            <div className='flex flex-col justify-center items-center text-center space-y-3'>
                <span className='p-3 bg-[#93f2f2] rounded-full'>
                    <RiFlowerLine className='h-[40px] w-[40px] text-[#006565]'></RiFlowerLine>
                </span>
                <h1 className='font-extrabold text-[22px] text-gray-900'>
                    Organic Recovery
                </h1>
                <p className='text-gray-700'>
                    Explore our curation of post-sun botanicals that<br /> repair and rejuvenate your skin barrier overnight.
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Care
