import Image from "next/image";

const Page = () => {
  return (
    <main className="min-h-screen text-black bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="relative min-h-[50vw] lg:min-h-0">
          <Image
            src="/images/cascade-about.png"
            fill
            alt="Interface for adding body measurements showing a mannequin with labeled measurements and a side panel to adjust leg length using a slider, with save and delete buttons."
            className="object-cover"
          />
        </div>

        <div className="relative flex flex-col px-8 sm:px-14 py-14 lg:py-0 min-h-screen">
          <div className="flex-1 flex flex-col items-center justify-center md:mb-[120px]  lg:pb-[330px]">
            <h1 className="font-bold text-4xl text-center lg:text-5xl ">
              Return Cascade
            </h1>
            <p className="font-light py-2 lg:py-6 text-center lg:text-xl xl:text-2xl">
              A first-person Unity prototype built in 30 days while learning C#
              from scratch.
            </p>
            <div className="flex gap-8 mt-3 lg:text-xl xl:text-2xl justify-center lg:gap-12">
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

          <div className="lg:absolute lg:bottom-0 lg:left-0 lg:right-0 px-8 sm:px-14 pb-10">
            <section className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl">The idea</h2>
                <p className="font-light">
                  I wanted to explore how far a single mechanic could carry an
                  experience. Inspired by the tension and rhythm of juggling,
                  Return Cascade is built around one weapon that only pushes, no
                  bullets, no melee. Everything, from combat to puzzles, flows
                  from that constraint.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl">What I learned</h2>
                <p className="font-light">
                  Shipped a playable prototype in 30 days starting from zero
                  knowledge of Unity and C#. The real challenge was building
                  feedback loops, charge, impact, risk/reward timing, that made
                  the single mechanic feel satisfying rather than limiting.
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
