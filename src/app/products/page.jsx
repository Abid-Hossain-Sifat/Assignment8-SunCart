import React from 'react'

const ProductsPage = async () => {
    const res = await fetch ('https://assignment8-sun-cart.vercel.app/Data.json');
    const products = await res.json();
    console.log (products)
  return (
    <div>
      
    </div>
  )
}

export default ProductsPage