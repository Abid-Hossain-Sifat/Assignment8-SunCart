import React from 'react'

const ProductsPage = async ({ searchParams }) => {
    const params = await searchParams;
    const selectedCategory = params?.category || 'All Products';
    const selectedPrice = params?.price || 'default';

    const res = await fetch('https://assignment8-sun-cart.vercel.app/Data.json', { cache: 'no-store' });
    const products = await res.json();

    const categoryOptions = ['All Products', ...new Set(products.map((item) => item.category))];
    const priceOptions = [
      { label: 'Default', value: 'default' },
      { label: 'Price: High to Low', value: 'high-to-low' },
      { label: 'Price: Low to High', value: 'low-to-high' }
    ];
    const selectedPriceLabel = priceOptions.find((item) => item.value === selectedPrice)?.label || 'Default';

    const categoryFilteredProducts = products.filter((item) => {
      const categoryMatch = selectedCategory === 'All Products' || item.category === selectedCategory;
      return categoryMatch;
    });

    const filteredProducts = [...categoryFilteredProducts];
    if (selectedPrice === 'high-to-low') {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (selectedPrice === 'low-to-high') {
      filteredProducts.sort((a, b) => a.price - b.price);
    }

  return (
    <div className='bg-[#f2f4f5] py-8 md:py-10 lg:py-12'>
      <div className='max-w-[80%] mx-auto'>
        {/* filtered  */}
        <div className='border-b border-[#dce4e7] pb-4 md:pb-5'>
          <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
            <div className='flex flex-wrap items-center gap-2 md:gap-3'>
              {categoryOptions.map((category) => (
                <a
                  key={category}
                  href={`/products?category=${encodeURIComponent(category)}&price=${selectedPrice}`}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-[#0c757a] text-white'
                      : 'bg-[#d8ebec] text-[#47636a] hover:bg-[#cfe4e6]'
                  }`}
                >
                  {category}
                </a>
              ))}
            </div>

            <div className='flex items-center gap-2 md:gap-3'>
              <p className='text-sm text-[#51686d]'>Sort by:</p>
              <details className='relative'>
                <summary className='list-none cursor-pointer rounded-lg bg-[#c7eaeb] px-3 py-1.5 text-sm font-medium text-[#0f6f77]'>
                  <span className='flex items-center gap-2'>
                    {selectedPriceLabel}
                    <span>▾</span>
                  </span>
                </summary>
                <div className='absolute right-0 z-20 mt-2 w-[180px] rounded-lg border border-[#d4e7e8] bg-white p-1.5 shadow-md'>
                  {priceOptions.map((option) => (
                    <a
                      key={option.value}
                      href={`/products?category=${encodeURIComponent(selectedCategory)}&price=${option.value}`}
                      className={`block rounded-md px-2.5 py-1.5 text-sm ${
                        selectedPrice === option.value
                          ? 'bg-[#e8f5f5] text-[#0f6f77]'
                          : 'text-[#5a7479] hover:bg-[#f2f8f8]'
                      }`}
                    >
                      {option.label}
                    </a>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </div>
        {/* products  */}
        <div className='mt-6 grid grid-cols-1 gap-5 md:mt-7 md:grid-cols-2 lg:grid-cols-4'>
          {filteredProducts.map((item) => (
            <div key={item.id} className='rounded-xl border border-[#dfe7e9] bg-[#f7f8f8] p-3'>
              <img src={item.image} alt={item.name} className='h-[220px] w-full rounded-lg object-cover md:h-[240px] lg:h-[260px]' />
              <h3 className='mt-3 text-lg font-semibold text-[#435b61]'>{item.name}</h3>
              <p className='mt-1 text-3xl font-bold text-[#0f767c]'>${item.price}.00</p>
              <button className='mt-3 rounded-lg bg-[#7a6736] px-5 py-2 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#6c5b2f]'>
                See Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsPage