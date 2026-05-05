import Image from "next/image";

const Page = () => {
  return (
    <main className="min-h-screen flex flex-col gap-11 md:pt-10 items-center justify-center">
      <div className="max-w-4xl flex flex-col gap-11">
        <div className="px-6">
          <h1 className="font-bold text-4xl text-left md:text-center">
            Puppeteer Me
          </h1>
          <p className="font-light py-2 md:text-center">
            A social personality quiz where you answer as someone you know.
          </p>
        </div>

        <div className="relative flex justify-center">
          <div
            aria-hidden="true"
            className="absolute inset-5 bg-linear-to-r from-[#F5672D]/30 via-purple-500/60 to-transparent blur-3xl opacity-70 pointer-events-none"
          />
          <Image
            src="/images/puppeteerme-page.png"
            height={600}
            width={600}
            alt="Personality quiz interface showing question slider and story-style result card."
            className="relative w-full md:max-w-[600px] md:rounded-xl"
          />
        </div>

        <div className="flex  items-center gap-12 justify-center px-6">
          <a
            href="https://puppeteerme.netlify.app/"
            className="flex underline text-[#F5672D]"
          >
            Demo
            <Image
              height={600}
              width={600}
              src="/icons/yellow-arrow-left.svg"
              alt=""
              aria-hidden="true"
              className="w-3 sm:w-5 ml-2"
            />
          </a>
          <a
            href="https://github.com/julsandstrom/puppeteerme"
            className="underline text-[#F5672D] flex"
          >
            Github
            <Image
              height={600}
              width={600}
              src="/icons/yellow-arrow-left.svg"
              alt=""
              aria-hidden="true"
              className="w-3 sm:w-5 ml-2"
            />
          </a>
        </div>

        <section className="flex flex-col gap-6 px-6">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl">The idea</h2>
            <p>
              My wife wanted us to do a personality test together and I thought
              it was more interesting to do it about each other. Puppeteer Me
              asks you to answer five questions on behalf of someone you know,
              then generates a short character summary. The question it's really
              asking: does your version of them match reality?
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl">What I learned</h2>
            <p>
              Designing a complete interaction loop, hook, interaction, payoff,
              where each step has to earn the next one. The result card needs to
              feel worth sharing, otherwise the whole premise falls apart.
            </p>
          </div>
        </section>

        <ul className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/80 justify-center px-6 py-10">
          <li>React</li>
          <li>CSS</li>
        </ul>
      </div>
    </main>
  );
};

export default Page;
