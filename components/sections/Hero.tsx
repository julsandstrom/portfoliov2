"use client";
import { useAnimation, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.6, once: true });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    if (inView) controls.start("visible");
  }, [inView, controls, shouldReduceMotion]);

  return (
    <section
      id="main"
      aria-labelledby="heroTitle"
      className="sticky top-0 h-screen flex items-center justify-center bg-[#F0F0F0] text-black"
    >
      <div
        aria-hidden="true"
        className="absolute inset-10 md:inset-20 blur-3xl opacity-70 pointer-events-none"
      />

      <div
        className="relative grid grid-cols-1 md:grid-cols-2 w-full h-full grid-rows-2  md:grid-rows-1   [grid-template-areas:'text''image']
  md:[grid-template-areas:'image_text']"
      >
        <div className="relative h-full [grid-area:image]">
          <Image
            src="/images/profile.png"
            alt="Profile photo of Julian Sandström"
            fill
            priority
            className=" object-cover"
          />
        </div>

        <div className="[grid-area:text] relative flex flex-col items-start justify-center  gap-4 px-8 md:px-14 ">
          <div className="font-gilda w-full flex flex-col items-center justify-center gap-5 md:gap-9">
            <h1
              id="heroTitle"
              className="text-5xl md:text-3xl lg:text-8xl text-center"
            >
              I'm Julian
            </h1>
            <p className="font-thin text-lg md:text-xl lg:text-4xl mt-1 text-center">
              Frontend Developer graduating in 2026
            </p>{" "}
            <a
              href="/about"
              aria-label="Learn more about Julian"
              className=" font-display
    w-fit mx-auto block 
    rounded-xs bg-[#0D0D0D]
    px-5 sm:px-7 py-2 md:py-3 md:px-8 
    text-sm sm:text-lg lg:text-xl tracking-[0.03em]
    text-[#EAE6E1]

    hover:bg-[#1f1f1f]
   


  "
            >
              About me
            </a>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
