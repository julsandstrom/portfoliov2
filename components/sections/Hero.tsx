"use client";

import {
  motion,
  useAnimation,
  useInView,
  useReducedMotion,
} from "framer-motion";
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
      className="mx-auto max-w-5xl sm:max-6xl md:max-w-6xl px-5 min-h-[40vh] md:min-h-[70vh]  flex flex-col items-center justify-center gap-3"
    >
      <div className="relative flex gap-5 w-full justify-center">
        {" "}
        <div
          aria-hidden="true"
          className="
      absolute
      inset-10 md:inset-20
      bg-linear-to-r
      from-[#F5672D]/20
      via-purple-500/20
      to-transparent
      blur-3xl
      opacity-70
      pointer-events-none
    "
        />
        <Image
          src="/images/profile.jpg"
          alt="asasfasf"
          width={900}
          height={200}
          priority
          className="relative w-36 md:w-64 rounded-xl"
        />{" "}
        <div className="flex flex-col justify-start  md:justify-center gap-2 md:ml-5">
          {" "}
          <h1 className="font-bold md:text-2xl"> Accessibility Specialist</h1>
          <p className="font-thin md:text-lg">Julian Sandström</p>
          <a
            aria-label="View dashboard demo"
            href="#work"
            className="mt-3 md:mt-6
              inline-flex w-fit items-center
              rounded-[1px] px-5 py-2 text-sm sm:text-lg md:px-6 md:py-3
              font-normal tracking-[0.03em]
              text-[#F5672D]
              ring-1 ring-[rgba(245,103,45,0.6)]
              bg-transparent
              transition-colors duration-200
          
              hover:text-[#ECA85A]
              hover:bg-[rgba(245,103,45,0.08)]
              hover:ring-[rgba(245,103,45,0.9)]
          
              focus-visible:outline-none
              focus-visible:text-[#ECA85A]
              focus-visible:bg-[rgba(245,103,45,0.08)]
              focus-visible:ring-2 focus-visible:ring-[#F5672D]
              focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B] border p-2
            "
          >
            <span className="relative z-10">See Projects</span>
            <Image
              src="/icons/yellow-arrow-right.svg"
              alt=""
              height={9}
              width={9}
              className="ml-2 w-[9px] sm:w-3  h-auto"
              loading="eager"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
