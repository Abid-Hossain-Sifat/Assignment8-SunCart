import React from 'react'

const Products = async() => {
    const res = await fetch ('https://assignment8-sun-cart.vercel.app/Data.json');
    const products = await res.json();
  return (
    <div>
      
    </div>
  )
}

export default Products
