import Image from "next/image";

const Page = () => {
  return (
    <main className="min-h-screen text-black bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="relative min-h-[50vw] lg:min-h-0">
          <Image
            src="/images/auralize-about.png"
            fill
            alt="Interface for adding body measurements showing a mannequin with labeled measurements and a side panel to adjust leg length using a slider, with save and delete buttons."
            className="object-cover"
          />
        </div>

        <div className="relative flex flex-col px-8 sm:px-14 py-14 lg:py-0 min-h-screen">
          <div className="flex-1 flex flex-col items-center justify-center md:mb-[120px]  lg:pb-[330px]">
            <h1 className="font-bold text-4xl text-center lg:text-6xl ">
              Auralize
            </h1>
            <p className="font-light py-2 lg:py-6 text-center lg:text-xl xl:text-2xl">
              A screen reader preview tool for developers
            </p>
            <div className="flex gap-8 mt-3 lg:text-xl xl:text-2xl justify-center lg:gap-12">
              <a href="https://auralize-one.vercel.app/" className="underline">
                Demo
              </a>
              <a
                href="https://github.com/julsandstrom/auralize"
                className="underline"
              >
                Github
              </a>
            </div>
          </div>

          <div className="lg:absolute lg:bottom-0 lg:left-0 lg:right-0 px-8 sm:px-14 pb-10">
            <section className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl">The idea</h2>
                <p className="font-light">
                  Most developers have never heard how their UI sounds to a
                  screen reader. Auralize closes that gap, paste your HTML or
                  JSX and get a simulated NVDA-style readout, computed
                  accessible names, tab order, and suggested fixes, all without
                  leaving the browser.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl">What I learned</h2>
                <p className="font-light">
                  Accessible name computation is a rule system with strict
                  precedence and fallbacks, not a single attribute. Implementing
                  it correctly meant building a deterministic analysis pipeline
                  where every output is traceable back to the source markup.
                </p>
              </div>
            </section>
            <ul className="flex justify-center flex-wrap gap-x-7 gap-y-3 text-sm mt-6">
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
