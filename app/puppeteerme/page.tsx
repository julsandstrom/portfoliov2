import Image from "next/image";

const Page = () => {
  return (
    <main className="min-h-screen  flex flex-col gap-11  md:pt-10 items-center justify-center">
      {" "}
      <div className="max-w-4xl  flex flex-col gap-11 ">
        <div className="px-6">
          <h1 className="font-bold text-4xl text-left md:text-center">
            Puppeteer Me
          </h1>
          <p className="font-light py-2 md:text-center">
            A social personality quiz where you answer as someone you know.
          </p>
        </div>
        <div className="relative flex justify-center">
          {" "}
          <div
            aria-hidden="true"
            className="
      absolute
      inset-5
      bg-gradient-to-r
      from-[#F5672D]/30
      via-purple-500/60
      to-transparent
      blur-3xl
      opacity-70
      pointer-events-none
    "
          />
          <Image
            src="/images/puppeteerme-page.png"
            height={600}
            width={600}
            alt="Personality quiz interface showing question slider and story-style result card"
            className="relative w-full md:max-w-[600px] md:rounded-xl"
          />
        </div>
        <div className="flex flex-col items-center gap-10 justify-center px-6">
          <a
            href="https://puppeteerme.netlify.app/"
            className="flex underline text-[#F5672D] "
          >
            Try Puppeteer Me
            <Image
              height={600}
              width={600}
              src="/icons/yellow-arrow-left.svg"
              alt=""
              aria-hidden="true"
              className="w-3 sm:w-5  ml-2"
            />
          </a>
          <a
            href="https://github.com/julsandstrom/puppeteerme"
            className="underline text-[#F5672D] flex "
          >
            Github for Puppeteer Me
            <Image
              height={600}
              width={600}
              src="/icons/yellow-arrow-left.svg"
              alt=""
              aria-hidden="true"
              className="w-3 sm:w-5  ml-2"
            />
          </a>
        </div>{" "}
        <section className="flex flex-col gap-2 px-6">
          <h2 className="font-bold text-xl">Problem</h2>
          <p>
            We assume we know the people closest to us, but daily life rarely
            tests that assumption. Personality quizzes are usually private and
            self-reported, not social.
          </p>
          <p>
            Puppeteer Me explores a playful question: How accurately can you
            answer as someone else? Can your version of them match reality?
          </p>
        </section>
        <div className="flex flex-col gap-2 px-6">
          <h3 className="font-bold text-xl">What I built</h3>
          <p>
            A five-question personality quiz where the user enters the name of
            someone they know and answers on their behalf. The responses are
            mapped to a category and transformed into a short, story-style
            character summary designed to be shared.
          </p>
        </div>
        <div className="flex flex-col gap-2 px-6">
          <h3 className="font-bold text-xl">Key Features</h3>
          <ul className="list-disc flex flex-col gap-2 pl-3">
            <li>Name-based quiz framing (personalized instantly)</li>
            <li>Five-question flow with sliders and visual choices</li>
            <li>Category mapping based on structured responses</li>
            <li>Story-style result card designed for sharing</li>
          </ul>
        </div>
        <p className="px-6">
          Simple pipeline: collect answers → calculate category → generate
          narrative summary. The UI collects input, a scoring layer assigns a
          personality type, and a narration layer formats the final result.
        </p>
        <div className="flex flex-col gap-2 px-6">
          <h3 className="font-bold text-xl">What I learned</h3>

          <ul className="list-disc flex flex-col gap-2 pl-3 px-6">
            <li>Balancing playful design with readable UI</li>
            <li>
              Designing a complete interaction loop (hook → interaction →
              payoff)
            </li>
            <li>Translating structured answers into narrative output</li>
          </ul>
        </div>
        <section aria-labelledby="tech-stack">
          <h2 id="tech-stack" className="sr-only">
            Tech stack
          </h2>

          <ul className="flex flex-wrap gap-x-7 gap-y-3 text-base text-white/80 justify-center px-6 py-10">
            <li>React</li>
            <li>CSS</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Page;
