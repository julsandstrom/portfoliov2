'use client';
import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

type TypingLineProps = {
  text: string;
  className?: string;
  playing: boolean;
  startDelayMs?: number;
  stepMs?: number;
};

function TypingLine({
  text,
  className = '',
  playing,
  startDelayMs = 0,
  stepMs = 300,
}: TypingLineProps) {
  const words = useMemo(() => text.split(' '), [text]);
  return (
    <p className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          className={`inline-block transition-opacity duration-200 ${
            playing ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: `${startDelayMs + i * stepMs}ms` }}
        >
          {w}
          {'\u00A0'}
        </span>
      ))}
    </p>
  );
}

const About = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const inView = useInView(ref, { amount: 0.9, margin: '-30% 0px -10% 0px' });

  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    setPlaying(inView);
  }, [inView]);

  const line1 = 'I value code that reads like design';
  const line2 = 'and design that works like code.';
  const step = 120;
  const delayBetweenLines = 300;
  const line1Total = line1.split(' ').length * step;
  return (
    <section
      id="about"
      className=" bg-[#EAE6E1] text-[#1C1C1C] mx-auto px-5 sm:px-11 md:px-14 py-10 sm:py-16 md:py-20 "
    >
      <h2 className="font-grotesk text-3xl  sm:text-5xl md:text-6xl  font-semibold tracking-[0.03em] text-[#1C1C1C] ">
        About
      </h2>

      <div
        ref={ref}
        className="mt-6 md:mt-20 lg:max-w-4xl text-center mx-auto block 2xl:mx-0  2xl:max-w-5xl 2xl:ml-48 "
      >
        <TypingLine
          text={line1}
          playing={playing}
          stepMs={step}
          className="font-grotesk mt-6 sm:mt-11 text-lg sm:text-2xl md:text-3xl  tracking-[0.03em] text-[#1C1C1C] text-center 2xl:text-start"
        />
        <TypingLine
          text={line2}
          playing={playing}
          stepMs={step}
          startDelayMs={line1Total + delayBetweenLines}
          className="font-grotesk tracking-[0.03em] font-light text-sm sm:text-xl md:text-2xl   text-[#1C1C1C] text-right 2xl:text-center "
        />
      </div>

      <div className="mt-16 sm:mt-24 md:mt-32 flex  justify-center 2xl:justify-around place-items-end gap-10 md:gap-24 sm:gap-16 lg:gap-32 text-sm text-[#1C1C1C]/70">
        <img
          src="/icons/Nextjs-logo.svg"
          alt="Next.js logo"
          className="ml-2 w-10 sm:w-16 md:w-20"
        />

        <img
          src="/icons/Tailwind_CSS_logo_with_dark_text.svg"
          alt="Tailwind logo"
          className="ml-2 w-20 sm:w-28 md:w-36"
        />

        <div className="flex items-end justify-center">
          {' '}
          <img
            src="/icons/React-icon.svg"
            alt="Tailwind logo"
            className="ml-2 w-3 sm:w-5 md:w-7"
          />{' '}
          <span className="text-[9px] sm:text-sm md:text-xl font-semibold ml-0.5 md:ml-2 text-[#0F0F0F]/80 align-bottom self-end  leading-none">
            {' '}
            React
          </span>
        </div>
        <div className="flex items-end justify-center">
          {' '}
          <img
            src="/icons/Typescript_logo_2020.svg"
            alt="Tailwind logo"
            className="ml-2 w-3 sm:w-4 md:w-6 "
          />
          <span className="text-[9px] sm:text-sm md:text-xl  font-semibold ml-0.5 md:ml-2 text-[#0F0F0F]/80 leading-none">
            {' '}
            TypeScript
          </span>
        </div>
      </div>

      <p className="mt-16 sm:mt-24 md:mt-32 font-grotesk font-light mx-auto block  tracking-[0.03em] text-base sm:text-xl   text-[#1C1C1C] max-w-md md:max-w-xl lg:max-w-2xl">
        A background in film production and flight coordination, combining
        structure with emotion to craft scalable experiences.
      </p>

      <a
        href="mailto:juliansandstrom@gmail.com"
        className="group w-fit mx-auto block  mt-6 sm:mt-11 md:mt-14 rounded-[1px] bg-[#0D0D0D] px-5 sm:px-7 py-2 md:py-3 md:px-6 
        text-sm sm:text-lg  tracking-[0.03em] font-normal text-[#EAE6E1] transition-transform duration-300 ease-out
    hover:scale-[0.98] hover:text-[#ECA85A]
    focus:outline-none
    before:absolute before:inset-0 before:content-[''] before:pointer-events-none"
      >
        Contact me
      </a>
    </section>
  );
};

export default About;
