"use client";
import {
  motion,
  useAnimation,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { useEffect, useRef } from "react";

const container: Variants = {
  hidden: { opacity: 1, transition: { staggerChildren: 0 } },
  visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
};
import Image from "next/image";

const Featured = () => {
  const shouldReduceMotion = useReducedMotion();
  const controls = useAnimation();
  const ref = useRef(null);

  const inView = useInView(ref, {
    amount: 0.9,
    margin: "10% 0px -10% 0px",
    once: true,
  });

  useEffect(() => {
    if (shouldReduceMotion) return;
    if (inView) controls.start("visible");
  }, [inView, controls, shouldReduceMotion]);

  return (
    <section
      id="featured"
      className=" text-[#0B0B0B] py-7 lg:py-20 tracking-[0.03em] "
    >
      <div className=" mx-auto   flex flex-col md:flex-row ">
        <Image
          src="/images/DashPage.png"
          alt=""
          width={1600}
          height={900}
          className="w-full md:w-1/2 h-auto"
        />
        <div className="flex flex-col items-start justify-start lg:justify-center w-full md:w-1/2 h-auto md:pr-11 mt-5 md:mt-0">
          <div className="flex flex-col justify-center self-center gap-2 md:gap-1">
            <h2 className=" text-4xl sm:text-5xl md:block text-[#F4F3F1] md:text-4xl lg:text-5xl xl:text-6xl   font-extrabold self-center  justify-start   leading-none">
              Data Presentation
            </h2>
            <h3 className="text- sm:text-base font-extralight md:block text-[#F4F3F1] md:text-xl self-center md:font-light lg:text-2xl text-center">
              Dashboard
            </h3>
          </div>

          <motion.ul
            ref={ref}
            className="mt-6 sm:mt-11 lg:mt-16 space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-8   pl-5 sm:pl-11 md:pl-3 lg:ml-0 lg:pl-0 self-start md:self-center   text-sm sm:text-xl md:text-xl font-extralight"
            initial={shouldReduceMotion ? false : "hidden"}
            animate={shouldReduceMotion ? undefined : controls}
            variants={shouldReduceMotion ? undefined : container}
          >
            <motion.li
              className="text-[#F4F3F1] flex items-center h-fit"
              variants={shouldReduceMotion ? undefined : item}
            >
              <span
                aria-hidden="true"
                className="text-[#F5672D] pr-1 text-xs md:text-xl self-center lg:pr-2"
              >
                +
              </span>
              Built with Next.js, TypeScript, and Tailwind
            </motion.li>

            <motion.li
              className="text-[#F4F3F1] flex items-center h-fit"
              variants={shouldReduceMotion ? undefined : item}
            >
              <span
                aria-hidden="true"
                className="text-[#F5672D] pr-1 text-xs self-center md:text-xl lg:pr-2"
              >
                +
              </span>
              UI powered by shadcn/ui components
            </motion.li>

            <motion.li
              className="text-[#F4F3F1] flex items-center h-fit "
              variants={shouldReduceMotion ? undefined : item}
            >
              <span
                aria-hidden="true"
                className="text-[#F5672D] pr-1  text-xs self-center md:text-xl lg:pr-2"
              >
                +
              </span>
              Clear, readable data presentation
            </motion.li>
          </motion.ul>

          <a
            aria-label="View dashboard demo"
            href="https://dashboard-psi-topaz.vercel.app/"
            rel="noopener noreferrer"
            className="ml-5 sm:ml-11 self-center  
    group relative  mt-6 sm:mt-8   lg:mt-12 md:ml-0 md:mt-8 inline-flex  w-fit items-center
    rounded-[1px] px-5 py-2  text-sm sm:text-lg  md:px-6 md:py-3 font-normal tracking-[0.03em]
    text-[#F5672D] ring-1 ring-[rgba(245,103,45,0.6)]
    transition-transform duration-300 ease-out
    hover:scale-[0.98] hover:text-[#ECA85A]

    before:absolute before:-inset-1 before:content-[''] motion-reduce:transition-none motion-reduce:hover:scale-100  focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#F5672D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]
  "
          >
            <span className="relative z-10">Try it out</span>
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

export default Featured;
