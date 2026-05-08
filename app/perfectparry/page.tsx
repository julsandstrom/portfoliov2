import Image from "next/image";

const Page = () => {
  return (
    <main className="min-h-screen text-black bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="relative min-h-[50vw] lg:min-h-0">
          <Image
            src="/images/perfect-parry-about.png"
            fill
            alt="Interface for adding body measurements showing a mannequin with labeled measurements and a side panel to adjust leg length using a slider, with save and delete buttons."
            className="object-cover"
          />
        </div>

        <div className="relative flex flex-col px-8 sm:px-14 py-14 lg:py-0 min-h-screen">
          <div className="flex-1 flex flex-col items-center justify-center md:mb-[120px]  lg:pb-[330px]">
            <h1 className="font-bold text-4xl text-center lg:text-6xl ">
              Perfect Parry
            </h1>
            <p className="font-light py-2 lg:py-6 text-center lg:text-xl xl:text-2xl">
              A turn-based combat game built in Next.js
            </p>
            <div className="flex gap-8 mt-3 lg:text-xl xl:text-2xl justify-center lg:gap-12">
              <a href="https://perfectparry.vercel.app/" className="underline">
                Demo
              </a>
              <a
                href="https://github.com/julsandstrom/perfectparry"
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
                  A turn-based combat game built without game libraries, just
                  hooks, context, and requestAnimationFrame. The attack phase
                  uses a hold-and-release mechanic mapped to variable-width
                  zones on a moving timing bar, while the defense phase switches
                  to a tap mechanic with different valid actions and
                  consequences. Two inputs, one button, built entirely in
                  Next.js.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl">What I learned</h2>
                <p className="font-light">
                  Sprite animations are driven by timestamp deltas rather than
                  frame counts, keeping timing frame-rate independent across
                  devices. A locked transition phase between attack and defense
                  prevents input during animations and eliminates race
                  conditions between game logic and visual state, the same
                  problem a real game engine solves, built from scratch with
                  hooks and context.
                </p>
              </div>
            </section>
            <ul className="flex justify-center flex-wrap gap-x-7 gap-y-3 text-sm mt-6">
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
