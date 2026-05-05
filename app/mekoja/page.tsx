import Image from "next/image";

const Page = () => {
  return (
    <main className="min-h-screen flex flex-col gap-11 md:pt-10 items-center justify-center">
      <div className="max-w-4xl flex flex-col gap-11">
        <div className="px-6">
          <h1 className="font-bold text-4xl text-left md:text-center">
            Mekoja
          </h1>
          <p className="font-light py-2 md:text-center">
            A digital reflection platform built around values and balance.
          </p>
        </div>

        <div className="relative flex justify-center">
          <div
            aria-hidden="true"
            className="absolute inset-5 bg-linear-to-r from-[#F5672D]/30 via-purple-500/60 to-transparent blur-3xl opacity-70 pointer-events-none"
          />
          <Image
            src="/images/mekoja-page.png"
            height={600}
            width={600}
            alt="Mekoja interface showing a balance scale where users place their chosen values between two opposing life perspectives."
            className="relative w-full md:max-w-[600px] md:rounded-xl"
          />
        </div>

        <div className="flex items-center gap-12 justify-center px-6">
          <a
            href="https://julsandstrom.github.io/mekoja/"
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
            href="https://github.com/julsandstrom/mekoja"
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
              Mekoja is a space to pause and reflect. You pick three values from
              ten, then place them across a series of balance scales: what keeps
              you grounded versus what pushes you forward, what you influence
              versus what you need to accept. The guidance feature, matching
              messages between users who share the same values, is designed but
              awaits a backend layer.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl">What I learned</h2>
            <p>
              Building an experience where the UI has to carry emotional weight,
              not just functional clarity. The balance mechanic needed to feel
              deliberate and calm, Framer Motion was central to making
              interactions feel considered rather than instant.
            </p>
          </div>
        </section>

        <ul className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/80 justify-center px-6 py-10">
          <li>React</li>
          <li>CSS</li>
          <li>Framer Motion</li>
        </ul>
      </div>
    </main>
  );
};

export default Page;
