import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect.tsx";
import MagicButton from "./ui/Magic-Button";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight  
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* now the below div will act as the ui grid */}
      <div className="h-screen w-full flex items-center justify-center bg-black-100 absolute top-0 left-0">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:110px_110px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#161a31_2px,transparent_1px),linear-gradient(to_bottom,#161a31_2px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black-100" />
        
      </div>

      <div className="flex justify-center relative my-25 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                Dynamic web magic with Next.js 
            </h2>
            
            <TextGenerateEffect 
                className="text-center text-[40px] md:text-5xl lg:text-6xl" 
                words="Transforming Concepts into Seamless User Experiences"
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                Hi, I&apos;m Manav. A Full Stack Developer & Stock Market Trader. 
            </p>

            <a href="#projects">
                <MagicButton 
                    title="Show my work"
                    icon={<FaLocationArrow /> }
                    position={"right"}
                />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
