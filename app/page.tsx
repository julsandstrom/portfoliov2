import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-black text-white p-2 z-50"
      >
        Skip to main content
      </a>
      <div id="home" className="min-h-screen bg-[#0B0B0B] text-[#F4F3F1]">
        <Header />
        <main id="main" tabIndex={-1}>
          <Hero />

          <Featured />

          <Projects />

          <About />

          <Footer />
        </main>
      </div>
    </>
  );
}
