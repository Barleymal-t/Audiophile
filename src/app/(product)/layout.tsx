import Navrow from '@/components/navrow';
import React from 'react'

const ProductLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
  return (
    <div className='max-w-'>
        {children}
      <Navrow/>
    </div>
  )
}

export default ProductLayout
