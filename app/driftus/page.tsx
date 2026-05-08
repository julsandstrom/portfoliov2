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

        <div className="relative flex flex-col px-8 sm:px-14 py-14 lg:py-0 min-h-screen">
          <div className="flex-1 flex flex-col items-center justify-center md:mb-[120px]  lg:pb-[330px]">
            <h1 className="font-bold text-4xl text-center lg:text-6xl ">
              DriftUs
            </h1>
            <p className="font-light py-2 lg:py-6 text-center lg:text-xl xl:text-2xl">
              A chat app that shows only the latest message, with AI stepping in
              when words run out.
            </p>
            <div className="flex gap-8 mt-3 lg:text-xl xl:text-2xl justify-center lg:gap-12">
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

          <div className="lg:absolute lg:bottom-0 lg:left-0 lg:right-0 px-8 sm:px-14 pb-10">
            <section className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl">The idea</h2>
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
                <h2 className="font-bold text-xl">What I learned</h2>
                <p className="font-light">
                  Turning probabilistic AI output into deterministic UI state is
                  harder than it sounds, the energy signal needed to feel
                  reliable even when the underlying model isn't certain. That
                  meant building clear loading, error, and retry states rather
                  than letting the UI reflect the model's ambiguity directly.
                </p>
              </div>
            </section>
            <ul className="flex justify-center flex-wrap gap-x-7 gap-y-3 text-sm mt-6">
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
