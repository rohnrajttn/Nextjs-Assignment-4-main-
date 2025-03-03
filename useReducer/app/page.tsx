import ProductInputCard from '@/components/ProductInputCard'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
      <h3 className='p-4 font-bold'>This is Home Page</h3>
      <ProductInputCard/>
    </div>
  )
}
