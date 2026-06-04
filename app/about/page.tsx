import Image from "next/image";

const About = () => {
  return (
    <main className="min-h-screen text-black bg-[#F0F0F0]">
      <div className="grid grid-cols-1  min-h-screen">
        <div className="relative flex flex-col items-center justify-center lg:justify-center px-6 mt-4 sm:my-6 lg:my-0 lg:px-10 gap-[clamp(2.2rem,4vw,3rem)] max-w-4xl  mx-auto">
          <div className="lg:px-8 flex flex-col items-center gap-2 lg:gap-10 mb-10">
            <h2 className="font-gilda text-4xl text-center lg:text-5xl ">
              About Me
            </h2>
            <p className="font-light  text-left lg:text-xl ">
              I recently graduated from the Frontend Developer program at Jensen
              Yrkeshögskola, where my final thesis focused on web accessibility
              and inclusive design.
              <br /> And it turns out those instincts transfer.
            </p>
            <p className="font-light text-base lg:text-xl">
              Before frontend, I studied film production and worked in flight
              coordination. Both shaped how I think about digital interfaces:
              timing, structure, clarity and how small details affect the
              overall experience.
            </p>
            <p className="font-semibold text-sm lg:text-lg  mt-2">
              Today, I focus on building accessible, interaction-driven
              interfaces with React, TypeScript and Next.js.
            </p>
          </div>

          <div>
            <figure className="absolute bottom-8 lg:bottom-10 left-0 right-0 px-8 md:px-14">
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
                  />{" "}
                  <span
                    aria-hidden="true"
                    className="text-xs sm:text-sm font-semibold ml-0.5 md:ml-2 text-[#0F0F0F]/80  leading-none"
                  >
                    React
                  </span>
                </div>
                <div className="flex items-end justify-center">
                  {" "}
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
    </main>
  );
};

export default About;
