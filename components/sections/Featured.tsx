"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Featured = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <motion.section
      id="featured"
      className="relative z-10 bg-[#F0F0F0] text-black min-h-screen"
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="relative min-h-[50vw] lg:min-h-0">
          <Image
            src="/images/perfect-parry-mobile.png"
            alt=""
            aria-hidden="true"
            fill
            className="object-cover"
          />
          <span
            aria-label="Featured project"
            className="
              absolute -bottom-12 md:-bottom-20 right-10 lg:-right-16 lg:bottom-20 rounded-full
              bg-[#f8b577] text-[#1c1c1c]
               text-base xl:text-xl 2xl:text-2xl
              font-bold    uppercase
              md:py-12 md:px-6 py-9 xl:py-16 px-2 select-none
            "
          >
            May 2026
          </span>
        </div>

        <div className="flex flex-col items-center justify-start lg:justify-center gap-10 lg:gap-10 px-4 md:px-8 sm:px-14 py-14 lg:py-0">
          <h2 className="text-3xl font-extrabold leading-none  sm:text-4xl lg:text-5xl xl:text-6xl">
            Perfect Parry
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mx-auto text-center">
            A turn-based game built without game libraries, hooks, context, &
            requestAnimationFrame.
          </p>

          <ul className="space-y-4 mt-5 text-sm font-light sm:text-xl lg:mt-5">
            <li className="flex items-start ">
              <span
                aria-hidden="true"
                className="pr-2 text-xs text-[#0B0B0B] sm:text-xl font-bold"
              >
                +
              </span>
              Built with Next.js, TypeScript, and Tailwind
            </li>
            <li className="flex items-start ">
              <span
                aria-hidden="true"
                className="pr-2 text-xs text-[#0B0B0B] sm:text-xl font-bold"
              >
                +
              </span>
              Frame-rate independent sprite animations via requestAnimationFrame
            </li>
            <li className="flex items-start ">
              <span
                aria-hidden="true"
                className="pr-2 text-xs text-[#0B0B0B] sm:text-xl font-bold"
              >
                +
              </span>
              Phase-based state machine with locked transition states
            </li>
          </ul>

          <div className="flex gap-10 items-center lg:mt-10 lg:gap-16">
            {" "}
            <a
              aria-label="Try featured demo"
              href="https://perfectparry.vercel.app/"
              className="w-fit inline-flex items-center rounded-[1px] bg-transparent
    px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg
    font-normal tracking-[0.03em] text-[#0B0B0B]
    border border-[#0B0B0B]/40
    transition-colors duration-200
    hover:bg-[rgba(0,0,0,0.05)] hover:border-[#0B0B0B]/80
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-[#0B0B0B]
    focus-visible:ring-offset-2 focus-visible:ring-offset-[#F0F0F0] hover:border-1"
            >
              <span className="relative z-10">Try it out</span>
            </a>
            <a
              aria-label="Read more about the project on its dedicated page"
              href="/perfectparry"
              className="w-fit inline-flex items-center rounded-[1px]
    px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg
    font-normal tracking-[0.03em]  text-[#EAE6E1]

    hover:bg-[#1f1f1f]
    border border-[#0B0B0B]/40
    transition-colors duration-200
    bg-[#0D0D0D] hover:border-[#0B0B0B]/80
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-[#0B0B0B]
    focus-visible:ring-offset-2 focus-visible:ring-offset-[#F0F0F0] hover:border-1"
            >
              <span className="relative z-10">Read more</span>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Featured;
