import Image from "next/image";

const Page = () => {
  return (
    <main className="min-h-screen flex flex-col gap-11 md:pt-10 items-center justify-center">
      <div className="max-w-4xl flex flex-col gap-11">
        <div className="px-6">
          <h1 className="font-bold text-4xl text-left md:text-center">
            Perfect Parry
          </h1>
          <p className="font-light py-2 md:text-center">
            A turn-based combat game built in Next.js, no game libraries, just
            hooks, context, and requestAnimationFrame.
          </p>
        </div>

        <div className="relative flex justify-center">
          <div
            aria-hidden="true"
            className="absolute inset-5 bg-linear-to-r from-[#F5672D]/30 via-purple-500/60 to-transparent blur-3xl opacity-70 pointer-events-none"
          />
          <Image
            src="/images/perfect-parry-desktop.png"
            height={600}
            width={600}
            alt="Turn-based combat game showing a pixel art skeleton enemy and a timing bar with action zones the player must release on to attack or defend."
            className="relative w-full md:max-w-[600px] md:rounded-xl"
          />
        </div>

        <div className="flex gap-12 justify-center px-6">
          <a
            href="https://perfectparry.vercel.app/"
            className="flex underline text-[#F5672D]"
          >
            Demo
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
            href="https://github.com/julsandstrom/perfectparry"
            className="underline text-[#F5672D] flex"
          >
            Github
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
              A turn-based combat game built without game libraries, just hooks,
              context, and requestAnimationFrame. The attack phase uses a
              hold-and-release mechanic mapped to variable-width zones on a
              moving timing bar, while the defense phase switches to a tap
              mechanic with different valid actions and consequences. Two
              inputs, one button, built entirely in Next.js.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl">What I learned</h2>
            <p>
              Sprite animations are driven by timestamp deltas rather than frame
              counts, keeping timing frame-rate independent across devices. A
              locked transition phase between attack and defense prevents input
              during animations and eliminates race conditions between game
              logic and visual state, the same problem a real game engine
              solves, built from scratch with hooks and context.
            </p>
          </div>
        </section>

        <ul className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/80 justify-center px-6 py-10">
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>requestAnimationFrame</li>
        </ul>
      </div>
    </main>
  );
};

export default Page;
