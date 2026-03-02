import Image from "next/image";

const Page = () => {
  return (
    <main className="min-h-screen  flex flex-col gap-11  md:pt-10 items-center justify-center">
      <div className="max-w-4xl  flex flex-col gap-11 ">
        <div className="px-6">
          <h1 className="font-bold text-4xl text-left md:text-center">
            Return Cascade
          </h1>
          <p className="font-light py-2 md:text-center">
            A first-person Unity experiment focused on flow, timing, and a
            push-only weapon mechanic.
          </p>
        </div>
        <div className="relative flex justify-center">
          {" "}
          <div
            aria-hidden="true"
            className="
      absolute
      inset-5
      bg-gradient-to-r
      from-[#F5672D]/30
      via-purple-500/60
      to-transparent
      blur-3xl
      opacity-70
      pointer-events-none
    "
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
            className="flex underline text-[#F5672D] "
          >
            Download & Play
            <Image
              height={600}
              width={600}
              src="/icons/yellow-arrow-left.svg"
              alt=""
              aria-hidden="true"
              className="w-3 sm:w-5  ml-2"
            />
          </a>
          <a
            href="https://www.youtube.com/watch?v=Vfq_1EhHR1I"
            className="underline text-[#F5672D] flex "
          >
            Watch demo
            <Image
              height={600}
              width={600}
              src="/icons/yellow-arrow-left.svg"
              alt=""
              aria-hidden="true"
              className="w-3 sm:w-5  ml-2"
            />
          </a>
        </div>{" "}
        <section className="flex flex-col gap-2 px-6">
          <h2 className="font-bold text-xl">Problem</h2>
          <p>
            I was fascinated by the “juggling” sensation: tension, timing, and
            flow while catching and controlling motion. I rarely felt that kind
            of satisfying feedback loop in games.
          </p>
          <p>
            Return Cascade explores how far a single mechanic can carry an
            experience when the challenge is about control, rhythm, and
            positioning rather than shooting or slicing.
          </p>
        </section>
        <div className="flex flex-col gap-2 px-6">
          <h3 className="font-bold text-xl">What I built</h3>
          <p>
            A small first-person prototype set on a snowy, abandoned Earth. The
            player wields “Cascade”, a weapon that only pushes air. There are no
            bullets or melee attacks. Instead, the player charges the weapon by
            interacting with enemies, then releases a high-impact burst when
            fully charged. The same pushing mechanic is also used for
            environmental puzzles and progression.
          </p>
        </div>
        <div className="flex flex-col gap-2 px-6">
          <h3 className="font-bold text-xl">Key Features</h3>
          <ul className="list-disc flex flex-col gap-2 pl-3">
            <li>Single-mechanic design: push-only combat and traversal</li>
            <li>
              Charge-and-release loop: build energy through enemy interaction,
              then trigger bursts
            </li>
            <li>
              Physics-based puzzles using force to move objects and clear paths
            </li>
            <li>Atmospheric exploration in a snowy, abandoned setting</li>
          </ul>
        </div>
        <p className="px-6">
          Core loop: explore → engage enemies to build charge → manage
          positioning and timing → release burst → use pushing to solve
          environmental obstacles and continue.
        </p>
        <div className="flex flex-col gap-2 px-6">
          <h3 className="font-bold text-xl">What I learned</h3>

          <ul className="list-disc flex flex-col gap-2 pl-3 px-6">
            <li>
              Building feedback loops (charge, impact, and risk/reward timing)
              to create “feel”
            </li>
            <li>
              Learning new tools fast: Unity + C# fundamentals by shipping a
              playable prototype
            </li>
          </ul>
        </div>
        <section aria-labelledby="tech-stack">
          <h2 id="tech-stack" className="sr-only">
            Tech stack
          </h2>

          <ul className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/80 justify-center px-6 py-10">
            <li>Unity</li>
            <li>C#</li>
            <li>Physics-based interaction</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Page;
