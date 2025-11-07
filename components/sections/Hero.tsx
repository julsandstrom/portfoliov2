'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.6 });

  useEffect(() => {
    if (inView) controls.start('visible');
    else controls.set('hidden');
  }, [inView, controls]);
  return (
    <section className="mx-auto max-w-5xl sm:max-6xl md:max-w-6xl px-5 min-h-[80vh] xl:min-h-screen flex flex-col items-center justify-center gap-3">
      <div className="relative inline-block">
        <img
          src="/images/hero-title.svg"
          alt="Frontend"
          className="w-70 sm:w-[500px] md:w-[700px] lg:w-[900px] h-auto"
          loading="eager"
        />
        <p className="font-grotesk text-sm sm:text-xl md:text-2xl lg:text-3xl font-extralight opacity-60 uppercase tracking-[0.4em] text-[#ECECEC] mt-1 sm:mt-6 md:mt-7 lg:mt-14 text-right">
          Developer
        </p>
        <img
          src="/images/PixelJulle.png"
          alt="Avatar Image"
          className="w-20 z-10 absolute left-10 sm:w-40 sm:left-16 top-[-9px] sm:top-[-15px] md:w-[210px] lg:w-[295px] md:left-24 md:-top-5 lg:-top-8"
        />
      </div>

      <div className="mt-11 sm:mt-28 lg:mt-40 text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 2 } },
          }}
        >
          <motion.span
            className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[0.03em] inline-block"
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: { opacity: 1, y: 0, transition: { duration: 2 } },
            }}
          >
            Building interfaces
          </motion.span>
          &nbsp;&nbsp;
          <motion.span
            className="opacity-70 text-xs sm:text-base md:text-xl lg:text-3xl lg:ml-2 font-thin inline-block"
            variants={{
              hidden: { opacity: 0, x: 20, y: -1 },
              visible: {
                opacity: 1,
                x: 0,
                y: -1,
                transition: { duration: 2, ease: 'easeOut' },
              },
            }}
          >
            that feel alive
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
