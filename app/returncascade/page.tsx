import Image from "next/image";

const Page = () => {
  return (
    <main className="min-h-screen flex flex-col gap-11 md:pt-10 items-center justify-center">
      <div className="max-w-4xl flex flex-col gap-11">
        <div className="px-6">
          <h1 className="font-bold text-4xl text-left md:text-center">
            Return Cascade
          </h1>
          <p className="font-light py-2 md:text-center">
            A first-person Unity prototype built in 30 days while learning C#
            from scratch.
          </p>
        </div>

        <div className="relative flex justify-center">
          <div
            aria-hidden="true"
            className="absolute inset-5 bg-linear-to-r from-[#F5672D]/30 via-purple-500/60 to-transparent blur-3xl opacity-70 pointer-events-none"
          />
          <Image
            src="/images/returncascade-page.png"
            height={600}
            width={600}
            alt="First-person Unity game set in a snowy environment, showing a push-based weapon aimed at distant enemies"
            className="relative w-full md:max-w-[600px] md:rounded-xl"
          />
        </div>

        <div className="flex flex-col md:flex-row md:gap-20 items-center gap-10 justify-center px-6">
          <a
            href="https://julsandstrom.itch.io/return-cascade"
            className="flex underline text-[#F5672D]"
          >
            Download & Play
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
            href="https://www.youtube.com/watch?v=Vfq_1EhHR1I"
            className="underline text-[#F5672D] flex"
          >
            Watch demo
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
              I wanted to explore how far a single mechanic could carry an
              experience. Inspired by the tension and rhythm of juggling, Return
              Cascade is built around one weapon that only pushes, no bullets,
              no melee. Everything, from combat to puzzles, flows from that
              constraint.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl">What I learned</h2>
            <p>
              Shipped a playable prototype in 30 days starting from zero
              knowledge of Unity and C#. The real challenge was building
              feedback loops, charge, impact, risk/reward timing, that made the
              single mechanic feel satisfying rather than limiting.
            </p>
          </div>
        </section>

        <ul className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/80 justify-center px-6 py-10">
          <li>Unity</li>
          <li>C#</li>
          <li>Physics-based interaction</li>
        </ul>
      </div>
    </main>
  );
};

export default Page;
