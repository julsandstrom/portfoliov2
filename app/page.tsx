import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F4F3F1]">
      <header className="sticky top-0 z-50 ">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-2">
          <span className="text-xs font-regular tracking-[0.03em]">
            Julian Sandstrom
          </span>
          {/* mobile menu button */}
          <button
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-xs "
            aria-label="Open navigation"
          >
            <span className="h-0.5 w-5 rounded-[0.5px] bg-[#F4F3F1]"></span>
            <span className="h-0.5 w-5 rounded-[0.5px] bg-[#F4F3F1]"></span>
            <span className="h-0.5 w-5 rounded-[0.5px] bg-[#F4F3F1]"></span>
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
            <p className="text-lg opacity-85 font-semibold tracking-[0.03em] text-center">
              Building interfaces{' '}
              <span className="font-inter  opacity-70 text-xs font-thin ">
                that feel alive
              </span>
            </p>
          </div>
        </section>

        {/* CARTLAG FEATURE */}
        <section className=" text-[#0B0B0B] py-7 tracking-[0.03em] ">
          <div className="mx-auto max-w-5xl py-8  flex flex-col">
            <img
              src="/images/CartlagPage.png"
              alt="Cartlag Poster"
              className="w-full"
            />
            <div className="mt-6 space-y-2 px-5 text-sm font-extralight  ">
              <p className="text-[#F4F3F1] flex items-center h-fit">
                <span className="text-[#F5672D] pr-1 text-xs self-center">
                  +
                </span>
                Designed and built in React
              </p>
              <p className="text-[#F4F3F1] flex items-center h-fit">
                <span className="text-[#F5672D] pr-1 text-xs self-center">
                  +
                </span>{' '}
                Built-in AI size recommendations
              </p>
              <p className="text-[#F4F3F1] flex items-center h-fit">
                <span className="text-[#F5672D] pr-1 text-xs self-center">
                  +
                </span>{' '}
                Avatar system and sharable digital card
              </p>
            </div>

            <button className="flex items-center h-fit mt-6 w-fit rounded-xs border border-[rgba(245,103,45,0.4)] py-2 px-5 text-sm font-normal tracking-[0.03em] self-center  text-[#F5672D]">
              Try it out{' '}
              <Image
                src="/icons/yellow-arrow-right.svg"
                alt="Yellow Arrow"
                width={9}
                height={1}
                priority
                className="ml-1.5"
              />
            </button>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="bg-[#0B0B0B] py-10">
          <div className="mx-auto max-w-5xl px-5">
            <h2 className="font-grotesk text-3xl font-semibold tracking-[0.03em] text-[#F4F3F1]">
              Projects
            </h2>

            <div className="mt-6 flex gap-8  scroll-smooth snap-x snap-mandatory overflow-x-auto scrollbar-none">
              {/* project card Puppeteer Me */}
              <article className="shrink-0 snap-start  overflow-hidden">
                <img
                  src="/images/PuppeteerMobile.png"
                  alt="Cartlag Poster"
                  className="w-[300px] h-[220px] rounded-[1px]"
                />
                <div className="flex items-center justify-between px-2 py-1">
                  <h3 className="text-2xl font-light text-[#F5672D] flex">
                    Puppeteer Me{' '}
                    <Image
                      src="/icons/yellow-arrow-left.svg"
                      alt="Yellow Arrow"
                      width={16}
                      height={1}
                      priority
                      className="ml-2 "
                    />
                  </h3>
                </div>
              </article>
              {/* project card Mekoja */}
              <article className="shrink-0 snap-start rounded-md  overflow-hidden">
                <img
                  src="/images/MekojaMobile.png"
                  alt="Mekoja Poster"
                  className="w-[300px] h-[220px] rounded-[1px]"
                />
                <div className="flex items-center justify-between px-2  py-1">
                  <h3 className="text-2xl font-light text-[#F5672D] flex">
                    Mekoja{' '}
                    <Image
                      src="/icons/yellow-arrow-left.svg"
                      alt="Yellow Arrow"
                      width={16}
                      height={1}
                      priority
                      className="ml-2"
                    />
                  </h3>
                </div>
              </article>
              {/* project card Driftus */}
              <article className="shrink-0 snap-start rounded-md overflow-hidden">
                <img
                  src="/images/DriftusMobile.png"
                  alt="Driftus Poster"
                  className="w-[300px] h-[220px] rounded-[1px]"
                />
                <div className="flex items-center justify-between px-2  py-1">
                  <h3 className="text-2xl font-light text-[#F5672D] flex">
                    Driftus{' '}
                    <Image
                      src="/icons/yellow-arrow-left.svg"
                      alt="Yellow Arrow"
                      width={16}
                      height={1}
                      priority
                      className="ml-2"
                    />
                  </h3>
                </div>
              </article>
              {/* project card Cartlag */}
              <article className="shrink-0 snap-start rounded-md overflow-hidden">
                <img
                  src="/images/CartlagMobile.png"
                  alt="Cartlag Poster"
                  className="w-[300px] h-[220px] rounded-[1px]"
                />
                <div className="flex items-center justify-between px-2  py-1">
                  <h3 className="text-2xl font-light text-[#F5672D] flex">
                    Cartlag{' '}
                    <Image
                      src="/icons/yellow-arrow-left.svg"
                      alt="Yellow Arrow"
                      width={16}
                      height={1}
                      priority
                      className="ml-2"
                    />
                  </h3>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="bg-[#EAE6E1] text-[#1C1C1C] mx-auto px-5 py-10">
          <h2 className="font-grotesk text-3xl font-semibold tracking-[0.03em] text-[#1C1C1C]">
            About
          </h2>

          <p className="font-grotesk mt-6 text-lg tracking-[0.03em] text-[#1C1C1C] text-center">
            I value code that reads like design
          </p>
          <p className="font-grotesk font-light text-sm text-[#1C1C1C] text-right">
            and design that works like code.
          </p>

          {/* eye image */}

          <img
            src="/images/eye.png"
            alt="eye"
            className="h-12 w-12 mx-auto block mt-11"
          />

          <p className="font-grotesk font-light block mx-auto tracking-[0.03em] mt-1 text-base text-[#1C1C1C] max-w-md">
            A background in film production and flight coordination, combining
            structure with emotion to craft scalable experiences.
          </p>

          <button className="w-fit rounded-xs bg-[#0D0D0D] text-[#F5672D] tracking-[0.03em] px-7 py-2 text-sm font-regular  md:px-8 mx-auto block mt-6">
            Contact Me
          </button>

          {/* tech row */}
          <div className="mt-14 flex justify-center place-items-end gap-6 text-sm text-[#1C1C1C]/70">
            <Image
              src="/icons/Nextjs-logo.svg"
              alt="Next.js logo"
              width={38}
              height={0}
              priority
              className="ml-2"
            />
            <Image
              src="/icons/Tailwind_CSS_logo_with_dark_text.svg"
              alt="Tailwind logo"
              width={70}
              height={0}
              priority
              className="ml-2"
            />
            <div className="flex">
              {' '}
              <Image
                src="/icons/React-icon.svg"
                alt="Tailwind logo"
                width={12}
                height={0}
                priority
                className="ml-2"
              />
              <span className="text-[9px] font-semibold ml-0.5 text-[#0F0F0F]/90">
                {' '}
                React
              </span>
            </div>
            <div className="flex">
              {' '}
              <Image
                src="/icons/Typescript_logo_2020.svg"
                alt="Tailwind logo"
                width={12}
                height={0}
                priority
                className="ml-2"
              />
              <span className="text-[9px] font-semibold ml-0.5 text-[#0F0F0F]/90">
                {' '}
                TypeScript
              </span>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#0B0B0B] py-6  tracking-[0.03em]">
          <div className="mx-auto flex max-w-5xl items-start justify-between px-5">
            <div>
              <p className="text-sm font-medium ">Based in</p>
              <p className="text-sm text-[#F4F3F1] font-extralight mt-1">
                Stockholm
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">Get in touch</p>
              <div className=" flex justify-center gap-6 mt-1">
                <a
                  href="#"
                  className="flex items-center justify-center  text-[#0B0B0B] text-xs"
                >
                  <Image
                    src="/icons/Gmail_icon_(2020).svg"
                    alt="Tailwind logo"
                    width={20}
                    height={0}
                    priority
                    className=""
                  />
                </a>
                <a
                  href="#"
                  className="flex  items-center justify-center  text-[#F4F3F1] text-xs"
                >
                  <Image
                    src="/icons/LinkedIn_icon.svg"
                    alt="Tailwind logo"
                    width={20}
                    height={0}
                    priority
                    className=""
                  />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
