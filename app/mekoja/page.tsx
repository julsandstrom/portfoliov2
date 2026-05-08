import Image from "next/image";

const Page = () => {
  return (
    <main className="min-h-screen text-black bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="relative min-h-[50vw] lg:min-h-0">
          <Image
            src="/images/mekoja-about.png"
            fill
            alt="Interface for adding body measurements showing a mannequin with labeled measurements and a side panel to adjust leg length using a slider, with save and delete buttons."
            className="object-cover"
          />
        </div>

        <div className="relative flex flex-col px-8 sm:px-14 py-14 lg:py-0 min-h-screen">
          <div className="flex-1 flex flex-col items-center justify-center md:mb-[120px]  lg:pb-[330px]">
            <h1 className="font-bold text-4xl text-center lg:text-6xl ">
              Mekoja
            </h1>
            <p className="font-light py-2 lg:py-6 text-center lg:text-xl xl:text-2xl">
              A digital reflection platform built around values and balance.
            </p>
            <div className="flex gap-8 mt-3 lg:text-xl xl:text-2xl justify-center lg:gap-12">
              <a
                href="https://julsandstrom.github.io/mekoja/"
                className="underline"
              >
                Demo
              </a>
              <a
                href="https://github.com/julsandstrom/mekoja"
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
                  Mekoja is a space to pause and reflect. You pick three values
                  from ten, then place them across a series of balance scales:
                  what keeps you grounded versus what pushes you forward, what
                  you influence versus what you need to accept. The guidance
                  feature, matching messages between users who share the same
                  values, is designed but awaits a backend layer.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl">What I learned</h2>
                <p className="font-light">
                  Building an experience where the UI has to carry emotional
                  weight, not just functional clarity. The balance mechanic
                  needed to feel deliberate and calm, Framer Motion was central
                  to making interactions feel considered rather than instant.
                </p>
              </div>
            </section>
            <ul className="flex justify-center flex-wrap gap-x-7 gap-y-3 text-sm mt-6">
              <li>React</li>
              <li>CSS</li>
              <li>Framer Motion</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
