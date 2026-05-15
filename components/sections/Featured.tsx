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
      className="relative z-10 bg-[#F0F0F0]  text-black min-h-screen"
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="  mx-auto min-h-screen text-black bg-none w-full px-4 md:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen -mx-4 ">
          <div className="relative min-h-[80vw] lg:min-h-0 ">
            <Image
              src="/images/experience-mobile.png"
              alt="Experience"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative flex flex-col items-center justify-start lg:justify-center px-6 mt-4 sm:my-6 lg:my-0 lg:px-10 gap-[clamp(2.2rem,4vw,3rem)] max-w-lg md:max-w-5xl 2xl:max-w-5xl mx-auto">
            <div className="lg:px-8 flex flex-col items-center gap-2">
              <h2 className="font-gilda text-2xl lg:text-6xl text-center ">
                Internship 2026
              </h2>
              <ul className="space-y-4 mt-5 text-sm font-light sm:text-xl lg:mt-5">
                <li className="flex items-start ">
                  <span
                    aria-hidden="true"
                    className="pr-2  text-xs text-[#0B0B0B] sm:text-xl font-bold"
                  >
                    +
                  </span>
                  Independently designed and implemented a full mobile chat
                  interface from Figma to production.
                </li>
                <li className="flex items-start ">
                  <span
                    aria-hidden="true"
                    className="pr-2  text-xs text-[#0B0B0B] sm:text-xl font-bold"
                  >
                    +
                  </span>
                  Built a unified ChatContext managing modal state, active
                  conversations, and mobile navigation across three views,
                  coordinating multiple UI states atomically to prevent
                  inconsistent transitions.
                </li>
                <li className="flex items-start ">
                  <span
                    aria-hidden="true"
                    className="pr-2  text-xs text-[#0B0B0B] sm:text-xl font-bold"
                  >
                    +
                  </span>
                  Built workspace navigation, real-time chat flow, reactions.
                </li>
              </ul>
            </div>
            <figure className="absolute bottom-15 sm:-bottom-20 lg:bottom-10 left-0 right-0 px-8 md:px-14">
              <figcaption className="sr-only">
                Technologies I use: Next.js, Tailwind CSS, React, TypeScript.
              </figcaption>
              <div
                aria-hidden="true"
                className="flex items-end justify-center 2xl:justify-around place-items-end gap-8"
              >
                <Image
                  src="/icons/Nextjs-logo.svg"
                  alt=""
                  aria-hidden="true"
                  height={30}
                  width={30}
                  className=" w-10 sm:w-16  h-fit"
                />

                <Image
                  src="/icons/Tailwind_CSS_logo_with_dark_text.svg"
                  alt=""
                  aria-hidden="true"
                  height={30}
                  width={30}
                  className="ml-2 h-fit w-20 sm:w-28"
                />

                <div className="flex items-end justify-center">
                  <Image
                    src="/icons/React-icon.svg"
                    alt=""
                    aria-hidden="true"
                    height={30}
                    width={30}
                    className="ml-2 w-3 sm:w-4 md:w-6 h-fit"
                  />
                  <span
                    aria-hidden="true"
                    className="text-xs sm:text-sm font-semibold ml-0.5 md:ml-2 text-[#0F0F0F]/80  leading-none"
                  >
                    React
                  </span>
                </div>
                <div className="flex items-end justify-center">
                  <Image
                    src="/icons/Typescript_logo_2020.svg"
                    alt=""
                    aria-hidden="true"
                    height={30}
                    width={30}
                    className="ml-2 w-3 sm:w-4 md:w-6 h-fit"
                  />
                  <span
                    aria-hidden="true"
                    className="text-xs sm:text-base  font-semibold ml-0.5 md:ml-2 text-[#0F0F0F]/80 leading-none"
                  >
                    TypeScript
                  </span>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Featured;
