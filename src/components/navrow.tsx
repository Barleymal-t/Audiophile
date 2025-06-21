import Image from 'next/image'
import React from 'react'
import Headphones from "@/public/assets/shared/desktop/image-category-thumbnail-headphones.png"
import Speakers from "@/public/assets/shared/desktop/image-category-thumbnail-speakers.png"
import Earphones from "@/public/assets/shared/desktop/image-category-thumbnail-earphones.png"
import { Button } from './button'

const Navrow = () => {
    const items = [
        {name:"headphones",
            image:Headphones,
            link:"./Headphones"
        },
        {name:"speakers",
            image:Speakers,
            link:"./Speakers"
        },
        {name:"earphones",
            image:Earphones,
            link:"./Earphones"
        },
    ]
  return (
    <div className='max-w-[1000px] mx-auto flex flex-col xs:flex-row gap-16 xs:gap-8 px-8'>
        {items.map((item,index)=>(
            <div key={index} className="w-full pt-20 bg-gray relative rounded-lg">
            <Image className='w-32 object-contain absolute top-0 left-[50%] -translate-x-1/2 -translate-y-1/3' src={item.image} alt='Headphones'/>
            <div className="m-auto max-w-96 flex flex-col items-center justify-center">

            <h1 className="uppercase text-sm font-semibold">
                {item.name}
            </h1>
            <Button variant='ghost'>shop</Button>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Navrow
