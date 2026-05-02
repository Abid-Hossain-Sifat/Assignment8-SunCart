import React from 'react';
import { SiNike, SiAdidas, SiZara } from 'react-icons/si';
import { FaTshirt } from 'react-icons/fa';

const Brands = () => {
  const brands = [
    {
      name: "Zara",
      description: "A Spanish apparel retailer specializing in fast fashion, offering trendy clothing, accessories, and shoes.",
      icon: <SiZara className="w-10 h-10 md:w-12 md:h-12 text-[#006565]" />
    },
    {
      name: "Easy",
      description: "A popular fashion brand providing comfortable and stylish casual wear for your everyday coastal lifestyle.",
      icon: <FaTshirt className="w-10 h-10 md:w-12 md:h-12 text-[#006565]" />
    },
    {
      name: "Nike",
      description: "An American multinational corporation engaged in the design, development, and worldwide marketing of footwear.",
      icon: <SiNike className="w-10 h-10 md:w-12 md:h-12 text-[#006565]" />
    },
    {
      name: "Adidas",
      description: "A German multinational corporation that designs and manufactures premium sports shoes, clothing, and accessories.",
      icon: <SiAdidas className="w-10 h-10 md:w-12 md:h-12 text-[#006565]" />
    }
  ];

  return (
    <div className='bg-white'>
      <div className='max-w-[80%] mx-auto py-12 md:py-16 lg:py-20'>
        {/* Heading */}
        <div className='text-center animate__animated animate__fadeInDown'>
            <p className='text-[#e6be8a] font-bold text-sm md:text-base tracking-wider uppercase'>
                Top Brands
            </p>
            <h3 className='text-2xl font-bold mt-2 md:text-3xl text-gray-900'>
                Our Featured Partners
            </h3>
            <p className='text-sm text-gray-600 mt-3 md:text-base max-w-2xl mx-auto'>
                We collaborate with the world's most renowned brands to bring you premium quality and unmatched style for your everyday coastal needs.
            </p>
        </div>

        {/* Cards */}
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
          {brands.map((brand, index) => (
            <div 
              key={brand.name} 
              className={`flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-[#f4f5f6] shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1 animate__animated animate__fadeInUp animate__delay-${index + 1}s`}
            >
              <div className='w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300'>
                {brand.icon}
              </div>
              <h4 className='text-xl font-extrabold text-gray-900 mb-3'>
                {brand.name}
              </h4>
              <p className='text-sm text-gray-600 leading-relaxed'>
                {brand.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Brands;
