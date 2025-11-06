import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Featured from '@/components/sections/Featured';

import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-[#0B0B0B] text-[#F4F3F1]">
      <Header />
      <main>
        <Hero />

        <Featured />

        <Projects />

        <About />

        <Footer />
      </main>
    </div>
  );
}
