"use client";
import Image from 'next/image';
import heroImage from '@assets/hero-image.jpg';
export const Hero = () => {
  return <div className="h-screen text-white relative overflow-auto before:content-[''] before:absolute before:inset-0 before:bg-black/45 before:z-10">
  {/* Background Image */}
  <Image 
    src={heroImage} 
    alt="Hero Image" 
    layout="fill" 
    objectFit="cover" 
    className="z-0" 
  />

</div>;
};
