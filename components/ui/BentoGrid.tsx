"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "@/components/ui/GradientBG";
import { GlobeDemo } from "@/components/ui/GridGlobe";
import { useEffect, useState } from "react";
import animationData from '@/data/confetti.json'
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });
// import { pre } from "framer-motion/client";
import MagicButton from "./Magic-Button";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:grid-cols-3 lg:grid-cols-5",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const handleCopy = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText("manavbhatt14092004@gmail.com");
      setCopied(true);
    }
  }


  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 relative overflow-hidden rounded-3xl transition duration-100 hover:shadow-xl dark:shadow-none border border-white/[0.1]",
        className,
      )}
      style={{
        background:'rgb(4,7,29)',
        backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)'
      }}
    > 
      <div className={`${id === 6 ? 'flex justify-center' : ''} w-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image 
              src={img}
              alt={img}
              fill
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5  ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <Image 
              src={spareImg}
              alt={spareImg}
              fill
              className={"object-cover object-center w-full h-full"}
            />
          )}
        </div> 
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold"/> */}
          </BackgroundGradientAnimation>
        )}

        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-5'
        )}>
          <div className="font-sans text-sm font-extralight text-[c1c2d3] md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans text-lg font-bold lg:text-3xl max-w-96 z-10">
            {title}
          </div>
        {id === 2 && <GlobeDemo />}
        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-3 lg:gap-6">
              {['','space', 'MERN', 'DSA','clerk'].map((item, idx) => (
                <span key={`tag-left-${id}-${idx}`} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
            </div>
            <div className="flex flex-col gap-3 lg:gap-6">
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              {[ '','React.js','Next.js','Trading', ''].map((item, idx) => (
                <span key={`tag-right-${id}-${idx}`} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {id ===6 && isClient && (
          <div className="relative ">
              <div className={`absolute`}>
                {isClient && (
                  <Lottie 
                    options={{
                      loop: copied,
                      autoplay: copied,
                      animationData,
                      rendererSettings:{
                        preserveAspectRatio: 'xMidYMid slice',
                      }
                    }}
                  />
                )}
              </div>
              <MagicButton 
                title={copied ? 'Email Copied!' : 'Copy my Email'}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="bg-[#161a31]"
                handleClick={handleCopy}
              />
          </div>
        )}
        {/* close inner content container */}
        </div>
      </div>
    </div>
  );
};
