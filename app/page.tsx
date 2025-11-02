import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 ">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-2">
          <span className="text-xs font-regular tracking-tight">
            Julian Sandstrom
          </span>
          {/* mobile menu button */}
          <button
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-xs "
            aria-label="Open navigation"
          >
            <span className="h-0.5 w-5 rounded-[0.5px] bg-white"></span>
            <span className="h-0.5 w-5 rounded-[0.5px] bg-white"></span>
            <span className="h-0.5 w-5 rounded-[0.5px] bg-white"></span>
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="mx-auto max-w-5xl px-5 pt-10 pb-10 ">
          <div className="flex flex-col items-center  gap-3">
            <div className="relative inline-block">
              <Image
                src="/images/hero-title.svg"
                alt="Frontend"
                width={299}
                height={74}
                priority
              />
              <p className="font-grotesk text-sm font-extralight opacity-60   uppercase tracking-[0.4em] text-[#ECECEC] mt-1 text-right ">
                Developer
              </p>{' '}
              <img
                src="/images/PixelJulle.png"
                alt="Avatar Image"
                className=" w-[84px] z-1 absolute left-11 top-[-9px]"
              />
            </div>
          </div>

          <div className="mt-11">
            <p className="text-lg font-semibold tracking-tight text-center">
              Building interfaces{' '}
              <span className="font-inter  opacity-70 text-xs font-thin ">
                that feel alive
              </span>
            </p>
          </div>
        </section>

        {/* CARTLAG FEATURE */}
        <section className=" text-black py-7 ">
          <div className="mx-auto max-w-5xl py-8  flex flex-col">
            <img
              src="/images/CartlagPage.png"
              alt="Cartlag Poster"
              className="w-full"
            />
            <div className="mt-6 space-y-2 px-5 text-sm text-black/80">
              <p className="text-[#F4F3F1]">
                <span className="text-[#F5672D] pr-1 self-start">+</span>{' '}
                Designed and built in React
              </p>
              <p className="text-[#F4F3F1]">
                <span className="text-[#F5672D] pr-1">+</span> Built-in AI size
                recommendations
              </p>
              <p className="text-[#F4F3F1]">
                <span className="text-[#F5672D] pr-1">+</span> Avatar system and
                sharable digital card
              </p>
            </div>

            <button className="mt-6 w-fit rounded-xs border border-[rgba(245,103,45,0.4)] py-2 px-5 text-sm font-medium tracking-tight self-center  text-[#F5672D]">
              Try it out <span className="text-[#ECA85A]">↗</span>
            </button>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="bg-black py-10">
          <div className="mx-auto max-w-5xl px-5">
            <h2 className="font-grotesk text-3xl font-semibold tracking-tight text-white">
              Projects
            </h2>

            <div className="mt-6 flex gap-8  scroll-smooth snap-x snap-mandatory overflow-x-auto scrollbar-none">
              {/* project card Puppeteer Me */}
              <article className="shrink-0 snap-start rounded-md overflow-hidden">
                <img
                  src="/images/PuppeteerMobile.png"
                  alt="Cartlag Poster"
                  className="w-[300px] h-[220px]"
                />
                <div className="flex items-center justify-between px-4 py-3">
                  <h3 className="text-base font-medium text-[#F5672D]">
                    Puppeteer Me <span className="text-[#ECA85A]">↗</span>
                  </h3>
                </div>
              </article>
              {/* project card Mekoja */}
              <article className="shrink-0 snap-start rounded-md  overflow-hidden">
                <img
                  src="/images/MekojaMobile.png"
                  alt="Mekoja Poster"
                  className="w-[300px] h-[220px]"
                />
                <div className="flex items-center justify-between px-4 py-3">
                  <h3 className="text-base font-medium text-[#F5672D]">
                    Mekoja <span className="text-[#ECA85A]">↗</span>
                  </h3>
                </div>
              </article>
              {/* project card Driftus */}
              <article className="shrink-0 snap-start rounded-md overflow-hidden">
                <img
                  src="/images/DriftusMobile.png"
                  alt="Driftus Poster"
                  className="w-[300px] h-[220px]"
                />
                <div className="flex items-center justify-between px-4 py-3">
                  <h3 className="text-base font-medium text-[#F5672D]">
                    Driftus <span className="text-[#ECA85A]">↗</span>
                  </h3>
                </div>
              </article>
              {/* project card Cartlag */}
              <article className="shrink-0 snap-start rounded-md overflow-hidden">
                <img
                  src="/images/CartlagMobile.png"
                  alt="Cartlag Poster"
                  className="w-[300px] h-[220px]"
                />
                <div className="flex items-center justify-between px-4 ">
                  <h3 className="text-base font-medium text-[#F5672D]">
                    Cartlag <span className="text-[#ECA85A]">↗</span>
                  </h3>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="bg-[#e8e1da] text-black mx-auto px-5 py-10">
          <h2 className="font-grotesk text-3xl font-semibold tracking-tight text-black">
            About
          </h2>

          <p className="mt-5 text-lg tracking-tight text-black text-center">
            I value code that reads like design
          </p>
          <p className="text-sm text-black/70 text-right">
            and design that works like code.
          </p>

          {/* eye image */}

          <img
            src="/images/eye.png"
            alt="eye"
            className="h-20 w-20 mx-auto block mt-11"
          />

          <p className="block mx-auto tracking-[0.02em] mt-1 text-xs text-black/80 max-w-md">
            A background in film production and flight coordination, combining
            structure with emotion to craft scalable experiences.
          </p>

          <button className="w-fit rounded-xs bg-[#0D0D0D] text-[#F5672D] tracking-[0.03em] px-7 py-2 text-sm font-regular  md:px-8 mx-auto block mt-3">
            Contact Me
          </button>

          {/* tech row */}
          <div className="mt-14 flex justify-center gap-6 text-sm text-black/70">
            <span className="flex items-center gap-2">NEXT.js</span>
            <span className="flex items-center gap-2">tailwindcss</span>
            <span className="flex items-center gap-2">React</span>
            <span className="flex items-center gap-2">TypeScript</span>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-black py-8">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-5">
            <div>
              <p className="text-sm font-medium">Based in</p>
              <p className="text-sm text-white/60">Stockholm</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">Get in touch</p>
              <div className="mt-2 flex justify-end gap-3">
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded bg-white text-black text-xs"
                >
                  M
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded bg-[#0A66C2] text-white text-xs"
                >
                  in
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
