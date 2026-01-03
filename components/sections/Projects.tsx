"use client";
import { useState } from "react";
import { projects } from "../../lib/data/project";
import Image from "next/image";

export default function Projects() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      id="work"
      className="bg-[#0B0B0B] py-10 sm:py-20 md:pt-36 pl-5 sm:pl-11 lg:pl-14"
    >
      <h2 className="font-grotesk text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[0.03em] text-[#F4F3F1]">
        Projects
      </h2>

      <div
        aria-label="Projects carousel"
        className="mt-6 sm:mt-14 md:mt-20 flex gap-4 sm:gap-10 pb-6  scroll-smooth motion-reduce:scroll-auto snap-x snap-mandatory overflow-x-auto scrollbar-visible "
      >
        {projects.map((p) => {
          const isActive = active === p.title;
          return (
            <article
              key={p.title}
              className="group relative shrink-0 snap-start w-[300px] sm:w-[400px] md:w-[600px] rounded-[1px] overflow-hidden  "
              onMouseEnter={() => setActive(p.title)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive((v) => (v === p.title ? null : p.title))}
            >
              <Image
                height={600}
                width={600}
                src={p.image}
                alt=""
                className={`h-[220px] w-[300px] sm:h-[350px] sm:w-[400px] md:h-[441px] md:w-[600px] object-cover transition-[filter] duration-600 
                    ${isActive ? " brightness-10" : " brightness-100"}
                    group-hover:brightness-10`}
              />

              <div
                className={`pointer-events-none absolute inset-0 flex items-center justify-center mb-11
                    px-4 text-center  transition-opacity duration-300
                    ${isActive ? "opacity-100 " : "opacity-0"}
                    group-hover:opacity-100`}
              >
                <div className="text-[#F4F3F1] text-base sm:text-xl md:text-3xl">
                  <p className="opacity-90 font-bold mb-5 md:mb-11 ">
                    {p.overlayTitle}
                  </p>
                  <p className=" font-extralight md:max-w-[500px]">
                    {p.overlayBody}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between px-2 py-3 md:py-5">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl sm:text-3xl  font-light text-[#F5672D] flex cursor-pointer hover:text-[#ECA85A]  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5672D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]"
                >
                  {p.title}
                  <Image
                    height={600}
                    width={600}
                    src="/icons/yellow-arrow-left.svg"
                    alt=""
                    className="w-3 sm:w-5  ml-2"
                  />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
