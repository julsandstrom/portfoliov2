"use client";
import { useState, useRef } from "react";
import { projects } from "../../lib/data/project";
import Image from "next/image";

const ALL_TAGS = ["Next.js", "C#", "TypeScript", "React"];

export default function Projects() {
  const [active, setActive] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const ulRef = useRef<HTMLUListElement>(null);

  const visible = active
    ? projects.filter((p) => p.tags.includes(active))
    : projects;

  const handleScroll = () => {
    const el = ulRef.current;
    if (!el) return;
    const progress = el.scrollLeft / (el.scrollWidth - el.clientWidth);
    setScrollProgress(progress);
  };

  return (
    <section
      id="work"
      className="bg-[#F0F0F0] text-black py-10 sm:py-20 sm:pt-48 lg:pt-20 "
    >
      <div className="max-w-[1500px] mx-auto w-full pl-5 sm:pl-11 lg:pl-14  flex flex-col justify-center">
        <div className="flex flex-wrap items-end gap-x-6 gap-y-4 pr-5 sm:pr-11 lg:pr-14">
          <h3 className="font-gilda text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[0.03em] text-[#1B1B1B] shrink-0 w-full">
            Projects
          </h3>

          <div
            role="group"
            aria-label="Filter projects by technology"
            className="flex flex-1 flex-wrap gap-2 sm:gap-3 lg:gap-6 justify-start lg:justify-center mb-2"
          >
            <button
              onClick={() => setActive(null)}
              aria-pressed={active === null}
              className={`px-3 py-1 text-xs sm:text-sm tracking-[0.08em] uppercase rounded-xl border transition-colors duration-150 ${
                active === null
                  ? "border-[#1B1B1B] border-2 bg-[#0D0D0D] text-white"
                  : "border-gray-600 text-gray-800 hover:border-gray-400 border-[0.2px] hover:border-2"
              }`}
            >
              All
            </button>

            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActive(active === tag ? null : tag)}
                aria-pressed={active === tag}
                className={`px-3 py-1 text-xs sm:text-sm tracking-[0.08em] uppercase rounded-xl border transition-colors duration-150 ${
                  active === tag
                    ? "border-[#1B1B1B] bg-[#0D0D0D] text-white border-2"
                    : "border-gray-600/50 text-gray-800 hover:border-gray-400 border-[0.2px] hover:border-2"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <ul
          ref={ulRef}
          onScroll={handleScroll}
          aria-label="my projects"
          tabIndex={-1}
          className="
            mt-6 sm:mt-14 md:mt-20
            flex gap-4 sm:gap-10 pb-4
            scroll-smooth motion-reduce:scroll-auto
            snap-x snap-mandatory overflow-x-auto
            [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            lg:grid lg:grid-cols-2 lg:gap-10
            lg:overflow-x-visible lg:snap-none lg:pb-0
            lg:pr-14 xl:grid-cols-3
          "
        >
          {visible.map((p) => (
            <li
              key={p.title}
              className="shrink-0 snap-start pb-6 rounded-xl lg:shrink lg:snap-none lg:pb-0"
            >
              <article
                className="
    h-full  relative
    w-[300px] sm:w-[400px] md:w-[600px]
    lg:w-full
    rounded-xl border-[0.3px] border-gray-600/40
    transition-colors duration-200
  "
              >
                <a
                  href={p.url}
                  className=" h-full flex flex-col focus-visible:outline-none"
                >
                  <Image
                    height={600}
                    width={600}
                    src={p.image}
                    alt=""
                    aria-hidden="true"
                    className="
        h-[220px] w-[300px]
        sm:h-[350px] sm:w-[400px]
        md:h-[441px] md:w-[600px]
        lg:h-auto lg:w-full lg:aspect-video
        object-cover shrink-0 rounded-t-xl
      "
                  />
                  <div className="flex items-center px-4 pt-3">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-[#1B1B1B] flex">
                      {p.title}
                    </h3>
                  </div>
                  <p className="px-4 font-light pb-4 md:pt-1">
                    {p.overlayBody}
                  </p>
                </a>
              </article>
            </li>
          ))}
        </ul>

        <div aria-hidden="true" className="mt-3 pr-5 sm:pr-11 lg:hidden">
          <div className="h-[2px] w-full bg-[#1B1B1B]/15 rounded-full">
            <div
              className="h-full bg-[#1B1B1B] rounded-full transition-all duration-100"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
