import React from 'react'
import DesktopBestgear from "@/public/assets/shared/desktop/image-best-gear.jpg"
import TabletBestgear from "@/public/assets/shared/tablet/image-best-gear.jpg"
import MobileBestgear from "@/public/assets/shared/mobile/image-best-gear.jpg"
import Image from "next/image";

const Bottom = () => {
  return (
    <section className="my-16 p-8 max-w-[1000px] m-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 [direction:rtl] gap-10">
        <Image className="rounded-lg hidden lg:block" src={DesktopBestgear} alt="Bestgear"/>
          <Image className="rounded-lg w-full hidden sm:block lg:hidden" src={TabletBestgear} alt="Bestgear"/>
          <Image className="rounded-lg w-full block sm:hidden" src={MobileBestgear} alt="Bestgear"/>
        <div className="flex flex-col justify-center items-center mx-[5%] md:mx-[10%] lg:mx-0 text-center lg:text-left gap-10">
          <h1 className=" text-[40px] font-semibold uppercase">Bringing you the <span className="text-orange">best</span> audio gear</h1>
          <p className="opacity-50">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
</div>
      </section>
  )
}

export default Bottom
