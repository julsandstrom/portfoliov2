'use client';
import { motion, useAnimation, useInView, type Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';

const container: Variants = {
  hidden: { opacity: 1, transition: { staggerChildren: 0 } },
  visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};
import Image from 'next/image';

const Featured = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, {
    amount: 0.9,
    margin: '10% 0px -10% 0px',
  });

  useEffect(() => {
    if (inView) controls.start('visible');
    else controls.set('hidden');
  }, [inView, controls]);

  return (
    <section
      id="featured"
      className=" text-[#0B0B0B] py-7 lg:py-20 tracking-[0.03em] "
    >
      <div className=" mx-auto   flex flex-col md:flex-row ">
        <img
          src="/images/CartlagPage.png"
          alt="Cartlag Poster"
          className="w-full md:w-1/2 h-auto"
        />
        <div className="flex flex-col items-start justify-start lg:justify-center w-full md:w-1/2 h-auto pr-11 ">
          <div className="flex flex-col justify-center self-center gap-5">
            <h1 className="hidden md:block text-white md:text-7xl lg:text-8xl   font-extrabold self-center  justify-start   leading-none">
              Cartlag
              <span className="md:text-xl lg:text-2xl font-extralight md:ml-1 lg:ml-3 ">
                .com
              </span>
            </h1>
            <h2 className="hidden md:block text-white  md:text-xl self-center font-light lg:text-2xl text-center">
              Digital Sizing Card
            </h2>
          </div>

          <motion.div
            ref={ref}
            className="mt-6 sm:mt-11 lg:mt-16 space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-8   pl-5 sm:pl-11 md:pl-3 lg:ml-0 lg:pl-0 self-start md:self-center   text-sm sm:text-xl md:text-xl font-extralight"
            initial="hidden"
            animate={controls}
            variants={container}
          >
            <motion.p
              className="text-[#F4F3F1] flex items-center h-fit"
              variants={item}
            >
              <span className="text-[#F5672D] pr-1 text-xs md:text-xl self-center lg:pr-2">
                +
              </span>
              Designed and built in React
            </motion.p>

            <motion.p
              className="text-[#F4F3F1] flex items-center h-fit"
              variants={item}
            >
              <span className="text-[#F5672D] pr-1 text-xs self-center md:text-xl lg:pr-2">
                +
              </span>
              Built-in AI size recommendations
            </motion.p>

            <motion.p
              className="text-[#F4F3F1] flex items-center h-fit "
              variants={item}
            >
              <span className="text-[#F5672D] pr-1  text-xs self-center md:text-xl lg:pr-2">
                +
              </span>
              Avatar and sharable digital card
            </motion.p>
          </motion.div>

          <a
            href="https://www.cartlag.com"
            target="_blank"
            rel="noopener noreferrer"
            className="self-center  
    group relative  mt-6 sm:mt-11 lg:mt-12 md:ml-0 md:mt-8 inline-flex  w-fit items-center
    rounded-[1px] px-5 py-2  text-sm sm:text-lg  md:px-6 md:py-3 font-normal tracking-[0.03em]
    text-[#F5672D] ring-1 ring-[rgba(245,103,45,0.6)]
    transition-transform duration-300 ease-out
    hover:scale-[0.98] hover:text-[#ECA85A]
    focus:outline-none
    before:absolute before:-inset-1 before:content-[''] 
  "
          >
            <span className="relative z-10">Try it out</span>
            <img
              src="/icons/yellow-arrow-left.svg"
              alt="Yellow Arrow"
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
