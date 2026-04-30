'use client'

import React from 'react'
import { HashLoader } from 'react-spinners'

const ProductDetailsLoading = () => {
  return (
    <div className='flex min-h-[40vh] items-center justify-center'>
      <HashLoader color='#008080' size={35} />
    </div>
  )
}

export default ProductDetailsLoading
