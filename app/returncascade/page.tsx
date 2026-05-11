import Image from "next/image";

const Page = () => {
  return (
    <main className="min-h-screen text-black bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen ">
        <div className="relative min-h-[50vw] lg:min-h-0">
          <Image
            src="/images/cascade-about.png"
            fill
            alt="Interface for adding body measurements showing a mannequin with labeled measurements and a side panel to adjust leg length using a slider, with save and delete buttons."
            className="object-cover"
          />
        </div>
        <div className="relative flex flex-col items-center justify-start lg:justify-center px-6 mt-4 sm:my-6 lg:my-0 lg:px-10 lg:mt-10 gap-[clamp(2.2rem,4vw,3rem)] max-w-lg md:max-w-xl 2xl:max-w-2xl mx-auto">
          <div className=" lg:px-8 flex flex-col  gap-2 ">
            <h1 className="font-bold text-4xl text-center lg:text-5xl">
              Return Cascade
            </h1>
            <p className="font-light py-2 text-center lg:text-xl xl:text-2xl">
              A first-person Unity prototype built in 30 days while learning C#
              from scratch.
            </p>
            <div className="flex gap-8 mt-3 lg:text-xl xl:text-2xl justify-center lg:gap-12 font-light">
              <a
                href="https://julsandstrom.itch.io/return-cascade"
                className="underline"
              >
                Download
              </a>
              <a
                href="https://www.youtube.com/watch?v=Vfq_1EhHR1I"
                className="underline"
              >
                Youtube Clip
              </a>
            </div>
          </div>

          <div className="">
            <section className="flex flex-col gap-10 md:mb-16">
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl font-gilda">The idea</h2>
                <p className="font-light">
                  I wanted to explore how far a single mechanic could carry an
                  experience. Inspired by the tension and rhythm of juggling,
                  Return Cascade is built around one weapon that only pushes, no
                  bullets, no melee. Everything, from combat to puzzles, flows
                  from that constraint.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl font-gilda">What I learned</h2>
                <p className="font-light">
                  Shipped a playable prototype in 30 days starting from zero
                  knowledge of Unity and C#. The real challenge was building
                  feedback loops, charge, impact, risk/reward timing, that made
                  the single mechanic feel satisfying rather than limiting.
                </p>
              </div>
            </section>
            <ul className="absolute bottom-5 sm:bottom-0 left-0 right-0 flex justify-center flex-wrap gap-x-7 lg:gap-x-12 lg:bottom-10  text-sm lg:text-base  ">
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
