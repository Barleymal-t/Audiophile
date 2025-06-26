import { BackButton } from '@/components/button'
import React from 'react'
import Checkout from './checkout'

const CheckoutPage = () => {
  return (
    <div className=' bg-gray'>
      <div className="p-8 max-w-285 mx-auto">

      <BackButton/>

      <Checkout/>
      </div>
    </div>
  )
}

export default CheckoutPage
