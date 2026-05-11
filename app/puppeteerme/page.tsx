import Image from "next/image";

const Page = () => {
  return (
    <main className="min-h-screen text-black bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="relative min-h-[50vw] lg:min-h-0">
          <Image
            src="/images/puppeteer-about.png"
            fill
            alt="Interface for adding body measurements showing a mannequin with labeled measurements and a side panel to adjust leg length using a slider, with save and delete buttons."
            className="object-cover"
          />
        </div>

        <div className="relative flex flex-col items-center justify-start lg:justify-center px-6 mt-4 sm:my-6 lg:my-0 lg:px-10 lg:mt-10 gap-[clamp(2.2rem,4vw,3rem)] max-w-lg md:max-w-xl 2xl:max-w-2xl mx-auto">
          <div className=" lg:px-8 flex flex-col  gap-2 ">
            <h1 className="font-bold text-4xl text-center lg:text-5xl">
              Puppeteer Me
            </h1>
            <p className="font-light py-2 lg:py-6 text-center lg:text-xl xl:text-2xl">
              A social personality quiz where you answer as someone you know.
            </p>
            <div className="flex gap-8 mt-3 lg:text-xl xl:text-2xl justify-center lg:gap-12 font-light">
              <a href="https://puppeteerme.netlify.app/" className="underline">
                Demo
              </a>
              <a
                href="https://github.com/julsandstrom/puppeteerme"
                className="underline"
              >
                Github
              </a>
            </div>
          </div>

          <div className="">
            <section className="flex flex-col gap-10 md:mb-16">
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl font-gilda">The idea</h2>
                <p className="font-light">
                  My wife wanted us to do a personality test together and I
                  thought it was more interesting to do it about each other.
                  Puppeteer Me asks you to answer five questions on behalf of
                  someone you know, then generates a short character summary.
                  The question it's really asking: does your version of them
                  match reality?
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl font-gilda">What I learned</h2>
                <p className="font-light">
                  Designing a complete interaction loop, hook, interaction,
                  payoff, where each step has to earn the next one. The result
                  card needs to feel worth sharing, otherwise the whole premise
                  falls apart.
                </p>
              </div>
            </section>
            <ul className="absolute bottom-5 sm:bottom-0 left-0 right-0 flex justify-center flex-wrap gap-x-7 lg:gap-x-12 lg:bottom-10  text-sm lg:text-base  ">
              <li>React</li>
              <li>LocalStorage</li>
              <li>Framer Motion</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
