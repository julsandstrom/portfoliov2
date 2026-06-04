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
      className="sticky top-0 h-screen flex items-center justify-center  text-black"
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
            src="/images/profile_bw.jpg"
            alt="Profile photo of Julian Sandström"
            fill
            priority
            className=" object-cover object-top"
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
            <p className="font-thin text-lg md:text-xl lg:text-2xl mt-1 text-center">
              Building accessible interfaces with Next.js, React and TypeScript.
            </p>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
