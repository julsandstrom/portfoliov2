import Image from "next/image";

const Page = () => {
  return (
    <main className="min-h-screen  flex flex-col gap-11  md:pt-10 items-center justify-center">
      <div className="max-w-4xl  flex flex-col gap-11 ">
        <div className="px-6 ">
          <h1 className="font-bold text-4xl text-left md:text-center ">
            Cartlag
          </h1>
          <p className="font-light py-2 md:text-center">
            Digital Body ID for size recommendations
          </p>
        </div>
        <div className="relative flex justify-center">
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
            src="/images/cartlag-page.png"
            height={600}
            width={600}
            alt="Interface for adding body measurements showing a mannequin with labeled measurements and a side panel to adjust leg length using a slider, with save and delete buttons."
            className="relative w-full md:max-w-[600px] md:rounded-xl"
          />
        </div>
        <div className="flex gap-12 justify-center">
          {" "}
          <a
            href="https://cartlag.com/"
            className="flex underline text-[#F5672D] "
          >
            Try Cartlag{" "}
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
            href="https://github.com/julsandstrom/Cartlag"
            className="underline text-[#F5672D] flex "
          >
            Github for Cartlag{" "}
            <Image
              height={600}
              width={600}
              src="/icons/yellow-arrow-left.svg"
              alt=""
              aria-hidden="true"
              className="w-3 sm:w-5  ml-2"
            />
          </a>
        </div>
        <section className="flex flex-col gap-2 px-6 ">
          <h2 className="font-bold text-xl">Problem</h2>
          <p>
            Online clothing returns contribute to a large global transport
            chain. Many returned garments are shipped across continents and end
            up in landfills or deserts in South America.
          </p>
          <p>
            A significant portion of returns happen because clothes do not fit.
            There is no persistent, reusable way for individuals to store and
            apply their body measurements across brands.
          </p>
        </section>
        <div className="flex flex-col gap-2 px-6 ">
          <h3 className="font-bold text-xl">What I built</h3>
          <p>
            Cartlag allows users to create a reusable digital body profile
            through an interactive mannequin interface. Measurements can be
            edited visually and exported as a portable “Body ID”.
          </p>
        </div>
        <div className="flex flex-col gap-2 px-6 ">
          <h3 className="font-bold text-xl">Key Features</h3>
          <ul className="list-disc flex flex-col gap-2 pl-3">
            <li>Interactive mannequin with clickable body parts</li>
            <li>Persist profile locally (name, colors, measurements)</li>
            <li>Export profile as PNG card + JSON import/export</li>
            <li>Prototype brand sizing via mock API</li>
          </ul>
        </div>
        <p className="px-6 ">
          Single source of truth: measurements are stored in one bodyParts
          object , and the UI + export are derived from that state.
        </p>
        <div className="flex flex-col gap-2 px-6 ">
          <div className="flex flex-col gap-2">
            {" "}
            <h3 className="font-bold text-xl">What I learned</h3>{" "}
            <p>
              This was my first full application and revealed architectural
              weaknesses:
            </p>
          </div>
          <ul className="list-disc flex flex-col gap-2 pl-3">
            <li>Large “God component” managing too many concerns</li>
            <li>Overuse of individual useState flags</li>
            <li>UI and domain logic too tightly coupled</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 px-6 ">
          {" "}
          <p className="font-medium">If rebuilt today, I would:</p>{" "}
          <ul className="list-disc flex flex-col gap-2 pl-3">
            <li>Extract domain logic into custom hooks</li>
            <li>Use a reducer or state machine for UI state</li>
            <li>Centralize validation rules</li>
            <li>Improve separation between presentation and logic</li>
          </ul>
        </div>{" "}
        <section aria-labelledby="tech-stack px-6 ">
          <h2 id="tech-stack" className="sr-only">
            Tech stack
          </h2>
          <ul className="flex flex-wrap gap-x-7 gap-y-2 text-base text-white/80 justify-center px-6 py-10">
            <li>React</li>
            <li>LocalStorage</li>
            <li>html2canvas</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Page;
