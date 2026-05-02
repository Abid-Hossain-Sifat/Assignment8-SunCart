import Link from 'next/link'
import { Home, AlertCircle, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50/50 px-4 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-xl w-full text-center space-y-8 animate__animated animate__fadeIn relative z-10">
        {/* Animated 404 Illustration */}
        <div className="relative">
          <h1 className="text-[150px] md:text-[200px] leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#008080]/10 to-[#4F39F6]/10 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-6 md:p-8 rounded-full shadow-2xl shadow-teal-100/50 animate-bounce">
              <AlertCircle className="w-16 h-16 md:w-20 md:h-20 text-[#008080]" />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Page not found
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-md mx-auto">
            Oops! The page you're looking for seems to have wandered off. Let's get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link href="/">
            <button className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-gradient-to-r from-[#008080] to-[#0f766e] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-teal-200 hover:-translate-y-1">
              <Home className="w-5 h-5 group-hover:animate-pulse" />
              <span>Back to Home</span>
            </button>
          </Link>
          
          <Link href="/products/all-products/default">
            <button className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-white text-gray-700 border-2 border-gray-200 px-8 py-3.5 rounded-full font-medium transition-all duration-300 hover:border-[#4F39F6] hover:text-[#4F39F6] hover:shadow-md">
              <Search className="w-5 h-5 transition-transform group-hover:rotate-12" />
              <span>Browse Products</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
