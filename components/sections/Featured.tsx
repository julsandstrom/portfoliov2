

import Image from "next/image";

import Link from "next/link";

const Featured = () => {


  return (
 <section
  id="featured"
  className="relative z-10 bg-[#ededed] text-black py-10"
>
      <div className="  mx-auto  text-black bg-none w-full px-4 md:pb-10">
        {" "}
        <div className="flex flex-col lg:grid lg:grid-cols-2 -mx-4 items-center">
          <div className="relative w-[60%] lg:w-[50%]  mx-auto aspect-[3/3]  lg:min-h-0">
            <Image
              src="/images/internship_mobiles.png"
              alt="Experience"
              fill
              className="object-cover overflow-visible lg:ml-5"
            />
          </div>
          <div className=" flex flex-col items-start justify-start lg:justify-center px-6 mt-4 lg:my-0 lg:px-10    md:max-w-5xl 2xl:max-w-5xl mx-auto gap-3 md:gap-5">
            <h3 className="font-gilda text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[0.03em]  shrink-0 w-full lg:text-center">
              Internship
            </h3>

            <div className="lg:px-8 flex flex-col items-start lg:items-center justify-start gap-2">
              <ul className="space-y-4  text-sm font-light sm:text-xl lg:mt-5">
                <li className="flex items-start ">
                  <span
                    aria-hidden="true"
                    className="pr-2  text-xs  sm:text-xl font-bold"
                  >
                    +
                  </span>
                  Independently designed and implemented a full mobile chat
                  interface from Figma to production.
                </li>
                <li className="flex items-start ">
                  <span
                    aria-hidden="true"
                    className="pr-2  text-xs  sm:text-xl font-bold"
                  >
                    +
                  </span>
                  Built a unified ChatContext coordinating modal state, active
                  conversations, and mobile navigation.
                </li>
                <li className="flex items-start ">
                  <span
                    aria-hidden="true"
                    className="pr-2  text-xs  sm:text-xl font-bold"
                  >
                    +
                  </span>
                  Built workspace navigation, real-time chat flow, reactions.
                </li>
              </ul>
              <Link
                href="/experience"
                className="bg-[#0D0D0D] text-white px-6 py-2 rounded-xl mx-auto my-4 hover:bg-[#2a2a2a] text-base lg:px-8 lg:py-3 lg:text-lg transition-colors duration-150 lg:my-10"
              >
                Read More
              </Link>
            </div>
            <figure className=" px-8 md:px-14 mt-5 mx-auto">
              <figcaption className="sr-only">
                Technologies I use: Next.js, Tailwind CSS, React, TypeScript.
              </figcaption>
              <div
                aria-hidden="true"
                className="flex items-end justify-center 2xl:justify-around place-items-end gap-8 "
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
    </section>
  );
};

export default Featured;
