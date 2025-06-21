import { Button } from "@/components/button";

export default function Home() {
  return (
    <div className="bg-[#191919]">

    <div className="max-w-[1000px] m-auto">
      <main className=" h-[620px] text-white flex  bg-[url('../public/assets/home/mobile/image-header.jpg')]  md:bg-[url('../public/assets/home/tablet/image-header.jpg')] lg:bg-[url('../public/assets/home/desktop/image-hero.jpg')] bg-center bg-cover ">
        <div className="flex flex-col items-center justify-center h-full w-full">
          <strong>New product</strong>
          <h1>XX99 Mark II Headphones</h1>
          <p>Experience natural, lifelike audio and exceptional<br/>build quality made for the passionate music<br/>enthusiast.</p>
          <Button>see product</Button>
        </div>
        <div className="hidden  h-full w-full lg:block">
          
          {/* <Image className="" src={Headphones} alt="Headphones"/> */}
          </div>
      </main>
      <section className="h-36"></section>
      <footer>

      </footer>
    </div>
    </div>
  );
}
