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

        <div className="relative flex flex-col items-center justify-start lg:justify-center px-6 mt-4 sm:my-6 lg:my-0 lg:px-10 lg:mt-10 gap-[clamp(2.2rem,4vw,3rem)] max-w-lg md:max-w-xl 2xl:max-w-2xl mx-auto">
          <div className=" lg:px-8 flex flex-col  gap-2 ">
            <h1 className="font-bold text-4xl text-center lg:text-5xl">
              Auralize
            </h1>
            <p className="font-light py-2 lg:py-6 text-center lg:text-xl xl:text-2xl">
              A screen reader preview tool for developers
            </p>
            <div className="flex gap-8 mt-3 lg:text-xl xl:text-2xl justify-center lg:gap-12 font-light">
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

          <div className="">
            <section className="flex flex-col gap-10 mb-16">
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl font-gilda">The idea</h2>
                <p className="font-light">
                  Most developers have never heard how their UI sounds to a
                  screen reader. Auralize closes that gap, paste your HTML or
                  JSX and get a simulated NVDA-style readout, computed
                  accessible names, tab order, and suggested fixes, all without
                  leaving the browser.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl font-gilda">What I learned</h2>
                <p className="font-light">
                  Accessible name computation is a rule system with strict
                  precedence and fallbacks, not a single attribute. Implementing
                  it correctly meant building a deterministic analysis pipeline
                  where every output is traceable back to the source markup.
                </p>
              </div>
            </section>
            <ul className="absolute bottom-5 sm:bottom-0 left-0 right-0 flex justify-center flex-wrap gap-x-7 lg:gap-x-12 lg:bottom-10  text-sm lg:text-base  ">
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
