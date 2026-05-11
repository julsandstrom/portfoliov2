import Image from "next/image";

const Page = () => {
  return (
    <main className="min-h-screen text-black bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="relative min-h-[50vw] lg:min-h-0">
          <Image
            src="/images/driftus-about.png"
            fill
            alt="Interface for adding body measurements showing a mannequin with labeled measurements and a side panel to adjust leg length using a slider, with save and delete buttons."
            className="object-cover"
          />
        </div>
        <div className="relative flex flex-col items-center justify-start lg:justify-center px-6 mt-4 sm:my-6 lg:my-0 lg:px-10 lg:mt-10 gap-[clamp(2.2rem,4vw,3rem)] max-w-lg md:max-w-xl 2xl:max-w-2xl mx-auto">
          <div className=" lg:px-8 flex flex-col  gap-2 ">
            <h1 className="font-bold text-4xl text-center lg:text-5xl">
              DriftUs
            </h1>
            <p className="font-light py-2 lg:py-6 text-center lg:text-xl xl:text-2xl">
              A chat app that shows only the latest message, with AI stepping in
              when words run out.
            </p>
            <div className="flex gap-8 mt-3 lg:text-xl xl:text-2xl justify-center lg:gap-12 font-light">
              <a href="https://driftus.netlify.app/login" className="underline">
                Demo
              </a>
              <a
                href="https://github.com/julsandstrom/driftus"
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
                  In real conversation, words disappear. In modern chat, they
                  accumulate, with timestamps, history, and the weight of being
                  re-read. DriftUs strips that away, showing only the latest
                  message from each person. When tone gets difficult, an AI
                  signal steps in with a red, yellow, or green energy read and
                  three suggested replies.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl font-gilda">What I learned</h2>
                <p className="font-light">
                  Turning probabilistic AI output into deterministic UI state is
                  harder than it sounds, the energy signal needed to feel
                  reliable even when the underlying model isn't certain. That
                  meant building clear loading, error, and retry states rather
                  than letting the UI reflect the model's ambiguity directly.
                </p>
              </div>
            </section>
            <ul className="absolute bottom-5 sm:bottom-0 left-0 right-0 flex justify-center flex-wrap gap-x-7 lg:gap-x-12 lg:bottom-10  text-sm lg:text-base  ">
              <li>OpenAI API</li>
              <li>Netlify Functions</li>
              <li>REST API</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
