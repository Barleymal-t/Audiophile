"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from './button'
import { useRouter } from 'next/navigation'

const Navrow = () => {
    const router = useRouter();
    const items = [
        {name:"headphones",
            image:"/assets/shared/desktop/image-category-thumbnail-headphones.png",
            link:"/headphones"
        },
        {name:"speakers",
            image:"/assets/shared/desktop/image-category-thumbnail-speakers.png",
            link:"/speakers"
        },
        {name:"earphones",
            image:"/assets/shared/desktop/image-category-thumbnail-earphones.png",
            link:"/earphones"
        },
    ]
  return (
    <div className='max-w-285 mx-auto flex flex-col xs:flex-row gap-16 xs:gap-8 px-8'>
        {items.map((item,index)=>(
            <div onClick={()=>router.push(item.link)} key={index} className="w-full pt-20 bg-gray relative rounded-lg cursor-pointer">
            <Image width={1000} height={1000} className='w-32 object-contain absolute top-0 left-[50%] -translate-x-1/2 -translate-y-1/3' src={item.image} alt='Headphones'/>
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
