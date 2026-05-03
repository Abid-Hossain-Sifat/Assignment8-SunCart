"use client"
import React, { useState, useEffect, useRef } from 'react'
import { ShoppingBag, User, UserPlus, LogOut, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'

const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const { data: session, isPending } = authClient.useSession()
  const [imageError, setImageError] = useState(false)
  
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef(null)

  const handleLogout = async () => {
    await authClient.signOut();
    setIsProfileDropdownOpen(false);
    setIsMobileMenuOpen(false);
    router.push('/login');
  }

  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    if (path.includes('/products') && pathname.includes('/products')) return true;
    return false;
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products/all-products/default' },
    { name: 'Profile', path: session ? '/my-profile' : '/signup' }
  ]

  return (
    <div className={`sticky top-0 z-50 transition-all duration-300 animate__animated animate__fadeInDown ${isScrolled ? 'bg-white/70 backdrop-blur-md shadow-md' : 'bg-white shadow-sm'}`}>
      <div className='w-[90%] lg:max-w-[80%] mx-auto flex justify-between py-4 lg:py-5 items-center'>
        
        {/* Logo */}
        <div>
          <a href="/" className='flex gap-1 text-[#008080] items-center'>
            <ShoppingBag className='h-7 w-7 lg:h-8 lg:w-8'></ShoppingBag>
            <h1 className='text-2xl lg:text-3xl font-extrabold'>
              SunCart
            </h1>
          </a>
        </div>

        <div className='hidden lg:flex gap-15 text-[#566375]'>
          {navLinks.map((link) => (
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

        <div className='flex gap-3 lg:gap-4 items-center'>
          {isPending ? (
            <div className="flex gap-4 items-center">
               <div className="w-9 h-9 lg:w-10 lg:h-10 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
          ) : (
            <>
              {session ? (
                <div className="relative" ref={dropdownRef}>
                  <div 
                    className="h-9 w-9 lg:h-10 lg:w-10 overflow-hidden rounded-full border-2 border-[#008080] shadow-sm cursor-pointer hover:shadow-md transition-all"
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    onMouseEnter={() => setIsProfileDropdownOpen(true)}
                  >
                    {session.user.image && !imageError ? (
                      <img 
                        src={session.user.image} 
                        alt={session.user.name} 
                        className="h-full w-full object-cover" 
                        referrerPolicy="no-referrer"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[#008080] text-base lg:text-lg font-bold text-white uppercase">
                        {session.user.name?.charAt(0) || 'U'}
                      </div>
                    )}
                  </div>

                  {isProfileDropdownOpen && (
                    <div 
                      className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                      onMouseLeave={() => setIsProfileDropdownOpen(false)}
                    >
                      <Link href="/my-profile">
                        <button 
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#008080] transition-colors flex items-center gap-2"
                          onClick={() => setIsProfileDropdownOpen(false)}
                        >
                          <User className="h-4 w-4" />
                          See Profile
                        </button>
                      </Link>
                      <div className="h-[1px] bg-gray-100 my-1"></div>
                      <button 
                        onClick={handleLogout} 
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2"
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="hidden sm:flex gap-3 items-center">
                  <Link href="/login">
                    <button className="group flex items-center gap-1.5 lg:gap-2 bg-white rounded-full border border-gray-200 py-1.5 px-3 lg:px-4 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md hover:border-[#4F39F6]">
                      <span className="text-gray-800 text-sm lg:text-base font-medium group-hover:text-[#4F39F6] transition-colors">
                        Login
                      </span>
                      <span className="bg-gradient-to-br from-[#9514FA] to-[#4F39F6] rounded-full p-1.5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-lg shadow-indigo-200">
                        <User className="h-3.5 w-3.5 text-white" />
                      </span>
                    </button>
                  </Link>

                  <Link href="/signup">
                    <button className='group flex items-center gap-1.5 lg:gap-2 bg-white rounded-full border border-gray-200 py-1.5 px-3 lg:px-4 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md hover:border-[#0f766e]'>
                      <p className='text-gray-800 text-sm lg:text-base font-medium group-hover:text-[#0f766e] transition-colors'>
                        Register
                      </p>
                      <span className='bg-[#0f766e] rounded-full p-1.5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12'>
                        <UserPlus className="h-3.5 w-3.5 text-white" />
                      </span>
                    </button>
                  </Link>
                </div>
              )}

              {/* Mobile Menu Toggle */}
              <button 
                className="lg:hidden p-2 -mr-2 text-gray-600 hover:text-[#008080] transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 z-40 animate-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col py-4 px-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-lg font-medium py-2.5 transition-colors duration-300 rounded-lg ${isActive(link.path) ? 'text-[#008080] bg-[#f0f9f9] pl-4 border-l-4 border-[#008080]' : 'text-gray-600 hover:text-[#008080] hover:bg-gray-50 pl-4'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {!session && (
              <div className="flex flex-col sm:hidden gap-3 pt-4 border-t border-gray-100 mt-2">
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#9514FA] to-[#4F39F6] text-white rounded-xl py-3 font-medium shadow-md transition-transform active:scale-95">
                    <User className="h-5 w-5" />
                    Login
                  </button>
                </Link>
                <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full flex items-center justify-center gap-2 bg-[#0f766e] text-white rounded-xl py-3 font-medium shadow-md transition-transform active:scale-95">
                    <UserPlus className="h-5 w-5" />
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
