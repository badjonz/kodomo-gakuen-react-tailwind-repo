"use client";
import Image from 'next/image';
import heroImage from '@assets/hero-image.jpg';

export const Hero = () => {
  return (
    <div className="h-screen text-white relative overflow-auto before:content-[''] before:absolute before:inset-0 before:bg-black/45 before:z-10">
      <Image 
        src={heroImage} 
        alt="Hero Image" 
        fill
        className="z-0 object-cover" 
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center">
        <div>
          <h1 className='text-[48px] p-2 font-medium mb-3 bg-black bg-opacity-10  rounded-sm'>
            <span className="text-[#32cd32]">E</span>
            <span className="text-[#f35588]">n</span>
            <span className="text-[#ffca3a]">j</span>
            <span className="text-[#00aeff]">o</span>
            <span className="text-[#32cd32]">y</span> Learning With Us
          </h1>
        </div>
        <p className="max-w-[600px] mb-6 p-5 text-xl bg-black bg-opacity-10  rounded-sm" lang="jp">
          ふれあい保育・感謝・思いやり
        </p>
        <a href="" className="inline-block 
  bg-[#17c528] 
  text-white 
  px-10 py-4 
  rounded-full 
  border-none 
  cursor-pointer 
  transition-all 
  duration-300 
  hover:translate-y-[-3px] 
  hover:shadow-xl 
  active:translate-y-[-1px] 
  active:shadow-lgpx-[25px] py-[10px] bg-[#17c528] text-white rounded-[50px] text-4">
          <i className=""></i>
          こども学園での保育での保育活動
        </a>
      </div>
    </div>
  );
};