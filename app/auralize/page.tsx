import Image from "next/image";

const Page = () => {
  return (
    <main className="min-h-screen flex flex-col gap-11 md:pt-10 items-center justify-center">
      <div className="max-w-4xl flex flex-col gap-11">
        <div className="px-6">
          <h1 className="font-bold text-4xl text-left md:text-center">
            Auralize
          </h1>
          <p className="font-light py-2 md:text-center">
            A screen reader preview tool for developers
          </p>
        </div>

        <div className="relative flex justify-center">
          <div
            aria-hidden="true"
            className="absolute inset-5 bg-linear-to-r from-[#F5672D]/30 via-purple-500/60 to-transparent blur-3xl opacity-70 pointer-events-none"
          />
          <Image
            src="/images/auralize.png"
            height={600}
            width={600}
            alt="Screenshot of the Auralize interface showing a focusable button, simulated screen reader output, and a details panel with computed name, role, and ARIA attributes."
            className="relative w-full md:max-w-[600px] md:rounded-xl"
          />
        </div>

        <div className="flex gap-12 justify-center px-6">
          <a
            href="https://auralize-one.vercel.app/"
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
            href="https://github.com/julsandstrom/auralize"
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
              Most developers have never heard how their UI sounds to a screen
              reader. Auralize closes that gap, paste your HTML or JSX and get a
              simulated NVDA-style readout, computed accessible names, tab
              order, and suggested fixes, all without leaving the browser.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl">What I learned</h2>
            <p>
              Accessible name computation is a rule system with strict
              precedence and fallbacks, not a single attribute. Implementing it
              correctly meant building a deterministic analysis pipeline where
              every output is traceable back to the source markup.
            </p>
          </div>
        </section>

        <ul className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/80 justify-center px-6 py-10">
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
    </main>
  );
};

export default Page;
