"use client"
import React from 'react'
import { ShoppingBag, User, UserPlus, LogOut } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    if (path.includes('/products') && pathname.includes('/products')) return true;
    return false;
  }
  return (
    <div>
      <div className='max-w-[80%] mx-auto flex justify-between py-5 items-center'>
        <div>
          <a href="/" className='flex gap-1 text-[#008080] items-center'>
            <ShoppingBag className='h-7.5 w-7.5'></ShoppingBag>
            <h1 className='text-3xl font-extrabold'>
              SunCart
            </h1>
          </a>
        </div>
        <div className='flex gap-15 text-[#566375]'>
          {[
            { name: 'Home', path: '/' },
            { name: 'Products', path: '/products/all-products/default' },
            { name: 'Profile', path: '#' }
          ].map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`relative group font-medium transition-colors duration-300 ${isActive(link.path) ? 'text-[#008080]' : 'hover:text-[#008080]'}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#008080] rounded-full transition-all duration-300 ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          ))}
        </div>
        <div className='flex gap-5'>
          <Link href="/login">
            <button className="group flex items-center gap-2 bg-white rounded-full border border-gray-200 py-1.5 px-4 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md hover:border-[#4F39F6]">

              <span className="text-gray-800 font-medium group-hover:text-[#4F39F6] transition-colors">
                Login
              </span>

              <span className="bg-gradient-to-br from-[#9514FA] to-[#4F39F6] rounded-full p-2 flex items-center justify-center  transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-lg shadow-indigo-200">
                <User className="h-4 w-4 text-white" />
              </span>

            </button>
          </Link>

          <Link href="/signup">
            <button className='group flex items-center gap-2 bg-white rounded-full border border-gray-200 py-1.5 px-4 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md hover:border-[#0f766e]'>

              <p className='text-gray-800 font-medium group-hover:text-[#0f766e] transition-colors'>
                Register
              </p>

              <span className='bg-[#0f766e] rounded-full p-2 flex items-center justify-center 
                 transition-all duration-300 
                 group-hover:scale-110 group-hover:rotate-12'>
                <UserPlus className="h-4 w-4 text-white" />
              </span>

            </button>
          </Link>


          {/* <button className="group flex items-center gap-2 bg-white rounded-full border     border-gray-200 py-1.5 px-4 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md hover:border-red-500">

            <span className="text-gray-800 font-medium group-hover:text-red-500 transition-colors">
              Logout
            </span>

            <span className="bg-red-500 rounded-full p-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
              <LogOut className="h-4 w-4 text-white" />
            </span>

          </button> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
