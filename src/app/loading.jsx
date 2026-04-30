'use client'

import React from 'react'
import { HashLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className='flex min-h-[60vh] items-center justify-center'>
      <HashLoader color='#008080' size={55} />
    </div>
  )
}

export default Loading
