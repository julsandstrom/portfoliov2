"use client";
import Hero from "@/components/sections/Hero";
import Featured from "@/components/sections/Featured";

import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
export default function Home() {
  return (
    <>
      {" "}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2  text-white p-4 z-100  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5672D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0B0B0B]"
      >
        Skip to main content
      </a>
      <main tabIndex={-1} className="contents">
        <div className="relative">
          <Hero />

          <Featured />
        </div>
        <Projects />
        <About />
      </main>
    </>
  );
}
