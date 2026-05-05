"use client";

import Image from "next/image";

const Featured = () => {
  return (
    <section
      id="featured"
      className="py-7 tracking-[0.03em] text-[#0B0B0B] lg:py-20"
    >
      <div className="mx-auto flex flex-col md:flex-row">
        <Image
          src="/images/perfect-parry-desktop.png"
          alt=""
          aria-hidden="true"
          width={1600}
          height={900}
          className="h-auto w-full md:w-1/2"
        />

        <div className="mt-5 flex h-auto w-full flex-col items-start justify-start md:mt-0 md:w-1/2 md:pr-11 lg:justify-center">
          <div className="flex flex-col justify-center self-center gap-2 md:gap-1">
            <h2 className="self-center text-2xl font-extrabold leading-none text-[#F4F3F1] sm:text-5xl md:block md:text-4xl lg:text-5xl xl:text-6xl">
              Phase-based state machine
            </h2>
          </div>

          <ul className="mt-6 self-center space-y-2 pl-5 text-sm font-extralight sm:mt-11 sm:space-y-4 sm:pl-11 sm:text-xl md:self-center md:space-y-6 md:pl-3 md:text-xl lg:mt-16 lg:ml-0 lg:space-y-8 lg:pl-0">
            <li className="flex h-fit items-center text-[#F4F3F1]">
              <span
                aria-hidden="true"
                className="self-center pr-1 text-xs text-[#F5672D] md:text-xl lg:pr-2"
              >
                +
              </span>
              Built with Next.js, TypeScript, and Tailwind
            </li>

            <li className="flex h-fit items-center text-[#F4F3F1]">
              <span
                aria-hidden="true"
                className="self-start pr-1 text-xs text-[#F5672D] md:text-xl lg:pr-2"
              >
                +
              </span>
              Frame-rate independent sprite animations via requestAnimationFrame
            </li>

            <li className="flex h-fit items-center text-[#F4F3F1]">
              <span
                aria-hidden="true"
                className="self-center pr-1 text-xs text-[#F5672D] md:text-xl lg:pr-2"
              >
                +
              </span>
              Phase-based state machine with locked transition states
            </li>
          </ul>

          <a
            aria-label="Try featured demo"
            href="https://perfectparry.vercel.app/"
            className="mt-6 ml-5 inline-flex w-fit self-center rounded-[1px] border bg-transparent px-5 py-2 p-2 text-sm font-normal tracking-[0.03em] text-[#F5672D] ring-1 ring-[rgba(245,103,45,0.6)] transition-colors duration-200 hover:bg-[rgba(245,103,45,0.08)] hover:text-[#ECA85A] hover:ring-[rgba(245,103,45,0.9)] focus-visible:outline-none focus-visible:bg-[rgba(245,103,45,0.08)] focus-visible:text-[#ECA85A] focus-visible:ring-2 focus-visible:ring-[#F5672D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B] sm:mt-8 sm:ml-11 sm:text-lg md:px-6 md:py-3 lg:mt-12"
          >
            <span className="relative z-10">Try it out</span>
            <Image
              src="/icons/yellow-arrow-right.svg"
              alt=""
              height={9}
              width={9}
              className="ml-2 h-auto w-[9px] sm:w-3"
              loading="eager"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Featured;
