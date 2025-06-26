// components/ResponsiveImage.tsx
import Image from "next/image";
import { cn } from "@/lib/utils/twMerge";


interface ResponsiveImageProps {
  alt: string;
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  width?: number;
  height?: number;
  className?: string;
}

export default function ResponsiveImage({
  alt,
  images,
  className,
  height,
  width
}: ResponsiveImageProps) {
    
  const imageConfigs = [
    {
      src: images.mobile,
      className: cn("block sm:hidden", className),
      imgwidth:480,
      imgheight:480
    },
    {
      src: images.tablet,
      className: cn("hidden sm:block lg:hidden", className),imgwidth:720,
      imgheight:720
    },
    {
      src: images.desktop,
      className: cn("hidden lg:block", className),
      imgwidth:1024,
      imgheight:1024
    },
  ];

  return (
    <>
      {imageConfigs.map(({ src, className,imgwidth,imgheight }, idx) => (
        <Image
          key={idx}
          src={src}
          alt={alt}
          height={height??imgheight}
          width={width??imgwidth}
          className={className}
        />
      ))}
    </>
  );
}
