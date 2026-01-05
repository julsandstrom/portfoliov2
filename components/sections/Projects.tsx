"use client";

import { projects } from "../../lib/data/project";
import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="work"
      className="bg-[#0B0B0B] py-10 sm:py-20 md:pt-36 pl-5 sm:pl-11 lg:pl-14"
    >
      <h2 className="font-grotesk text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[0.03em] text-[#F4F3F1]">
        Projects
      </h2>

      <ul
        aria-label="my projects"
        tabIndex={-1}
        className="mt-6 sm:mt-14 md:mt-20 flex gap-4 sm:gap-10 pb-6  scroll-smooth motion-reduce:scroll-auto snap-x snap-mandatory overflow-x-auto scrollbar-visible "
      >
        {projects.map((p) => {
          return (
            <li key={p.title} className="shrink-0 snap-start  pb-6 rounded-xs ">
              <article
                className="      pb-4 relative w-[300px] sm:w-[400px] md:w-[600px]
    rounded-[1px] border border-gray-600
    transition-colors duration-200

    hover:border-[#F5672D] hover:bg-white/5
    focus-within:border-[#F5672D] focus-within:bg-white/5

    focus-within:outline-none
    focus-within:ring-2 focus-within:ring-[#F5672D]
    focus-within:ring-offset-4 focus-within:ring-offset-[#0B0B0B]"
              >
                <a
                  href={p.url}
                  className="block   focus-visible:outline-none
              "
                >
                  <Image
                    height={600}
                    width={600}
                    src={p.image}
                    alt=""
                    aria-hidden="true"
                    className="h-[220px] w-[300px] sm:h-[350px] sm:w-[400px] md:h-[441px] md:w-[600px] object-cover "
                  />

                  <div className="flex items-center px-4 py-3">
                    <h3 className="text-2xl sm:text-3xl  font-light text-[#F5672D] flex  ">
                      {p.title}{" "}
                    </h3>
                    <Image
                      height={600}
                      width={600}
                      src="/icons/yellow-arrow-left.svg"
                      alt=""
                      aria-hidden="true"
                      className="w-3 sm:w-5  ml-2"
                    />
                  </div>
                  <p className="px-4">{p.overlayBody}</p>
                </a>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
