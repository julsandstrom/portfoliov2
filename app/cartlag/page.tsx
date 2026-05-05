import Image from "next/image";

const Page = () => {
  return (
    <main className="min-h-screen flex flex-col gap-11 md:pt-10 items-center justify-center">
      <div className="max-w-4xl flex flex-col gap-11">
        <div className="px-6">
          <h1 className="font-bold text-4xl text-left md:text-center">
            Cartlag
          </h1>
          <p className="font-light py-2 md:text-center">
            Digital Body ID for size recommendations
          </p>
        </div>

        <div className="relative flex justify-center">
          <div
            aria-hidden="true"
            className="absolute inset-5 bg-linear-to-r from-[#F5672D]/30 via-purple-500/60 to-transparent blur-3xl opacity-70 pointer-events-none"
          />
          <Image
            src="/images/cartlag-page.png"
            height={600}
            width={600}
            alt="Interface for adding body measurements showing a mannequin with labeled measurements and a side panel to adjust leg length using a slider, with save and delete buttons."
            className="relative w-full md:max-w-[600px] md:rounded-xl"
          />
        </div>

        <div className="flex gap-12 justify-center">
          <a
            href="https://cartlag.netlify.app/"
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
            href="https://github.com/julsandstrom/Cartlag"
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
              Most clothing returns happen because sizes don't translate across
              brands. Cartlag lets users build a reusable digital body profile
              through an interactive mannequin, measurements stored once,
              applied anywhere, exportable as a portable Body ID card.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl">What I learned</h2>
            <p>
              This was my first full application. Looking back, the main
              weakness was a large God component managing too many concerns at
              once, UI, domain logic, and state all tightly coupled. If rebuilt
              today I would extract domain logic into custom hooks and use a
              reducer for UI state. That failure taught me more about
              architecture than any tutorial.
            </p>
          </div>
        </section>

        <ul className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/80 justify-center px-6 py-10">
          <li>React</li>
          <li>LocalStorage</li>
          <li>html2canvas</li>
        </ul>
      </div>
    </main>
  );
};

export default Page;
