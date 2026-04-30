import React from 'react'
import { ShoppingBag } from 'lucide-react'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-[#f5fafa] py-12 md:py-16'>
      <div className='max-w-[80%] mx-auto'>
        <div className='flex justify-between items-start'>

        <div className='mx-auto max-w-md md:mx-0'>
          
          <h1 className='mx-auto flex w-fit items-center gap-4 text-3xl font-extrabold leading-none text-[#008080] md:mx-0'>
            <div className='relative flex items-center justify-center group'>
              <span className='relative z-10 bg-[#008080] p-2.5 rounded-2xl flex items-center justify-center shadow-lg'>
                <ShoppingBag className='h-7 w-7 text-white' strokeWidth={1.5}></ShoppingBag>
              </span>
              <div className='absolute inset-0 bg-[#008080] rounded-full blur-xl opacity-30 -z-10'></div>
            </div>
            <span className='tracking-tight'>
              SunCart
            </span>
          </h1>
          
          <p className='mt-6 text-[16px] leading-relaxed text-gray-700 md:text-[17px]'>
            Elevate your summer with SunCart. Explore our <br></br> curated collection of seasonal  outfits, skincare,<br></br> and accessories. Experience a modern way to <br></br>browse, authenticate, and shop for your ultimate<br></br> sun-ready essentials.
          </p>
        </div>


        <div className='md:justify-self-start'>
          <h4 className='text-[24px] font-semibold text-gray-900'>
            Shop
          </h4>
          <ul className='mt-5 space-y-2.5 leading-relaxed text-gray-700'>
            <li>
              <a href="" className="group relative inline-flex items-center pl-0 transition-all duration-300 hover:pl-3 hover:text-[#008080]">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-xl font-semibold leading-none opacity-0 transition-all duration-300 group-hover:opacity-100">-</span>
                <span>
                All Collections
                </span>
              </a>
            </li>
            <li>
              <a href="" className="group relative inline-flex items-center pl-0 transition-all duration-300 hover:pl-3 hover:text-[#008080]">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-xl font-semibold leading-none opacity-0 transition-all duration-300 group-hover:opacity-100">-</span>
                <span>
                Artisan Frames
                </span>
              </a>
            </li>
            <li>
              <a href="" className="group relative inline-flex items-center pl-0 transition-all duration-300 hover:pl-3 hover:text-[#008080]">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-xl font-semibold leading-none opacity-0 transition-all duration-300 group-hover:opacity-100">-</span>
                <span>
                Summer Skincare
                </span>
              </a>
            </li>
            <li>
              <a href="" className="group relative inline-flex items-center pl-0 transition-all duration-300 hover:pl-3 hover:text-[#008080]">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-xl font-semibold leading-none opacity-0 transition-all duration-300 group-hover:opacity-100">-</span>
                <span>
                Beach Totes
                </span>
              </a>
            </li>
          </ul>
        </div>


        <div className='md:justify-self-start'>
          <h4 className='text-[24px] font-semibold text-gray-900'>
            Company
          </h4>
          <ul className='mt-5 space-y-2.5 leading-relaxed text-gray-700'>
            <li>
              <a href="" className="group relative inline-flex items-center pl-0 transition-all duration-300 hover:pl-3 hover:text-[#008080]">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-xl font-semibold leading-none opacity-0 transition-all duration-300 group-hover:opacity-100">-</span>
                <span>
                About Us
                </span>
              </a>
            </li>
            <li>
              <a href="" className="group relative inline-flex items-center pl-0 transition-all duration-300 hover:pl-3 hover:text-[#008080]">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-xl font-semibold leading-none opacity-0 transition-all duration-300 group-hover:opacity-100">-</span>
                <span>
                Shipping Policy
                </span>
              </a>
            </li>
            <li>
              <a href="" className="group relative inline-flex items-center pl-0 transition-all duration-300 hover:pl-3 hover:text-[#008080]">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-xl font-semibold leading-none opacity-0 transition-all duration-300 group-hover:opacity-100">-</span>
                <span>
                Returns
                </span>
              </a>
            </li>
            <li>
              <a href="" className="group relative inline-flex items-center pl-0 transition-all duration-300 hover:pl-3 hover:text-[#008080]">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-xl font-semibold leading-none opacity-0 transition-all duration-300 group-hover:opacity-100">-</span>
                <span>
                Contact Us
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className='md:justify-self-start'>
          <h4 className='text-[24px] font-semibold text-gray-900'>Social Link</h4>
          <div className="mt-5 flex items-center justify-center gap-4 text-[28px] text-gray-700 md:justify-start">
          {/* Facebook */}
          <a href="https://www.facebook.com/share/1E5ZMLxiUb/" target='_blank' rel='noopener noreferrer' className='rounded-md p-1 transition-colors duration-200 hover:text-[#1877F2]'>
            <FaFacebook></FaFacebook>
          </a>
      {/* Instagram */}
          <a href="https://www.instagram.com/cod3x_who?igsh=YnA4bG03NGRjdjE3" target='_blank' rel='noopener noreferrer' className='rounded-md p-1 transition-colors duration-200 hover:text-[#E4405F]'>
            <FaInstagram></FaInstagram>
          </a>

      {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/abid-hossain-sifat" target='_blank' rel='noopener noreferrer' className='rounded-md p-1 transition-colors duration-200 hover:text-[#0A66C2]'>
            <FaLinkedin></FaLinkedin>
          </a>

      {/* GitHub */}
      <a href="https://github.com/Abid-Hossain-Sifat" target='_blank' rel='noopener noreferrer' className='rounded-md p-1 transition-colors duration-200 hover:text-[#171515]'>
        <FaGithub></FaGithub>
      </a>
          </div>
        </div>
        </div>
        <div className='h-0.5 bg-[#008080]/50 mt-10'></div>

      <div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-gray-700 mt-6 md:mt-7.5 text-sm md:text-base text-center md:text-left'>
        <p className='order-2 md:order-1'>
          © 2026 KeenKeeper. All rights reserved.
        </p>
        <ol className='order-1 md:order-2 flex flex-wrap justify-center gap-5 md:gap-10 items-center'>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookies</li>
        </ol>
      </div>
      </div>
      
      

    </footer>
  )
}

export default Footer
