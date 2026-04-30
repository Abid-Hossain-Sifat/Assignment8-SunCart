import React from 'react'
import { FaArrowRight } from 'react-icons/fa6';
import { FaRegHeart } from 'react-icons/fa';
import Image from 'next/image';

const Products = async() => {
    const res = await fetch ('https://assignment8-sun-cart.vercel.app/Data.json');
    const products = await res.json();
    const sortedByRating = [...products].sort((a, b) => b.rating - a.rating);
    const featuredProduct = sortedByRating?.[0];
    const sideProducts = sortedByRating?.slice(1, 3) || [];
  return (
    <div>
      <div className='max-w-[80%] mx-auto mt-15 mb-10'>
        {/* heading  */}
        <div className='flex justify-between items-center'>
            <div>
                <h1 className='text-2xl font-bold text-gray-900'>
                    Popular Products
                </h1>
                <p className='text-gray-700 mt-2'>
                    Our community's most love pieces for a coastal lifestyle.
                </p>
            </div>
            <div>
                <p>
                    <a  className='flex gap-3 items-center' href="">
                        View All <span><FaArrowRight></FaArrowRight></span>
                    </a>
                </p>
            </div>
        </div>
        {/* top Products  */}
        <div className='mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3'>
            {/* Product 1  */}
          <div className='rounded-2xl bg-[#f4f5f6] p-3 shadow-sm lg:row-span-2'>
            <div className='relative overflow-hidden rounded-xl'>
              <img
                src={featuredProduct?.image}
                alt={featuredProduct?.name}
                className='h-[260px] w-full object-cover md:h-[320px]'
              />
              <button className='absolute right-3 top-3 rounded-full bg-white p-2.5 text-[#c97c6f] shadow'>
                <FaRegHeart />
              </button>
            </div>
            <div className='mt-4 flex items-center justify-between'>
              <h3 className='text-2xl font-bold text-[#1c2f34]'>{featuredProduct?.name}</h3>
              <p className='text-3xl font-semibold text-[#218a8a]'>${featuredProduct?.price}.00</p>
            </div>
            <p className='mt-2 text-sm text-gray-600'>{featuredProduct?.description}</p>
            <button className='mt-5 w-full rounded-xl bg-[#edcf9f] py-3 font-semibold text-[#2e2b25] transition-colors duration-200 hover:bg-[#e5c189]'>
              Add to Cart
            </button>
          </div>

          {/* Product 2-3  */}
          {sideProducts.map((item) => (
            <div key={item.id} className='rounded-2xl bg-[#f4f5f6] p-3 shadow-sm'>
              <img src={item.image} alt={item.name} className='h-[180px] w-full rounded-xl object-cover' />
              <h4 className='mt-3 text-2xl font-bold text-[#24363c]'>{item.name}</h4>
              <p className='mt-1 text-2xl font-semibold text-[#218a8a]'>${item.price}.00</p>
              <button className='mt-4 w-full rounded-xl border border-[#cae1dd] py-2.5 font-semibold text-[#2d8383] transition-colors duration-200 hover:bg-white'>
                Quick Add
              </button>
            </div>
          ))}


          {/* See more Card  */}
          <div className='rounded-2xl bg-gradient-to-r from-[#0c757a] to-[#0d6672] p-6 text-white shadow-sm lg:col-span-2'>
            <div className='flex items-center justify-between gap-6'>
              <div>
                <h3 className='text-4xl font-bold'>Discover More Summer Essentials</h3>
                <p className='mt-2 text-sm text-[#9be0df]'>Looking for more? Explore 15+ more items including beach floats, skincare,<br /> and trendy outfits to complete your collection.</p>
              </div>
              <button className='rounded-full bg-white px-8 py-3 text-lg font-semibold text-[#176a73] transition-colors duration-200 hover:bg-[#eafafa]'>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
