// app/product/[slug]/page.tsx
import { BackButton, Button } from "@/components/button";
import PurchaseGrid from "@/components/purchasegrid";
import ResponsiveImage from "@/components/responsive-image";
import products from "@/lib/data/data.json"; // or fetch from API
import { Product } from "@/models/product";

export default async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = products.find((p: Product) => p.slug === slug);
    console.log(slug);

    if (!product) return <div>Product not found</div>;

    return (
        <div className="mt-4">
            <BackButton/>
            <PurchaseGrid product={product} />
            <div className="flex flex-col lg:flex-row p-8 gap-32 my-24">
                <div className="basis-[60%] gap-8 flex flex-col">
                    <h1 className="md:w-1/2 text-2xl font-bold tracking-[0.0625rem] uppercase">
                        Features
                    </h1>
                    <p className="opacity-50 text-sm whitespace-pre-line">
                        {product.features}
                    </p>
                </div>
                <div className="basis-[40%] flex flex-col sm:flex-row lg:flex-col ">
                    <h1 className="text-2xl font-bold tracking-[0.0625rem] uppercase mb-8 basis-[40%] lg:basis-auto">
                        In the Box
                    </h1>
                    <ul className="flex flex-col gap-1.5">
                        {product.includes.map((item, index) => (
                            <li key={index}>
                                <div className="grid grid-cols-[2rem_1fr]">
                                    <span className="font-semibold text-sm text-orange">
                                        {item.quantity}x
                                    </span>
                                    <p className="opacity-50 text-sm">
                                        {item.item}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="grid sm:grid-cols-[40%_1fr] gap-6 px-8 my-24">
                <div className="grid grid-rows-2 gap-6 ">
                    <ResponsiveImage
                        className="rounded-lg object-contain"
                        images={product.gallery.first}
                        alt="first image"
                    />
                    <ResponsiveImage
                        className="rounded-lg object-contain"
                        images={product.gallery.second}
                        alt="second image"
                    />
                </div>
                <ResponsiveImage
                    className="rounded-lg object-contain"
                    images={product.gallery.third}
                    alt="third image"
                />
            </div>
            <div className="flex flex-col items-center justify-center p-8">
                <h1 className="uppercase text-2xl mb-8 font-semibold">you may also like</h1>
                <div className="flex flex-col sm:flex-row gap-8">
                    {
                        product.others.map((other,index)=>(
                            <div className="flex flex-col justify-center items-center gap-8" key={index}>

                            <ResponsiveImage className="rounded-lg" images={other.image} alt={other.name}/>
                            <h1 className=" text-xl font-bold tracking-[0.0625rem] uppercase">{other.name}</h1>
                            <Button>see product</Button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
