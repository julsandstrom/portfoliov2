import Image from "next/image";

const Page = () => {
  return (
    <main className="min-h-screen  flex flex-col gap-11  md:pt-10 items-center justify-center">
      <div className="max-w-4xl  flex flex-col gap-11 ">
        <div className="px-6">
          <h1 className="font-bold text-4xl text-left md:text-center">
            Auralize
          </h1>
          <p className="font-light py-2  md:text-center">
            A screen reader preview tool for developers
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
            src="/images/auralize.png"
            height={600}
            width={600}
            alt="mannequinn with measurement stamps on its head and arm"
            className="relative  w-full md:max-w-[600px] md:rounded-xl"
          />
        </div>
        <div className="flex gap-12 justify-center px-6">
          <a
            href="https://auralize-one.vercel.app/"
            className="flex underline text-[#F5672D] "
          >
            Try Auralize
            <Image
              height={600}
              width={600}
              src="/icons/yellow-arrow-left.svg"
              alt="Screenshot of the Auralize interface showing a focusable ‘Open Filters’ button, simulated screen reader output describing it as collapsed, and a details panel with computed name, role, ARIA attributes, and related code."
              aria-hidden="true"
              className="w-3 sm:w-5  ml-2"
            />
          </a>
          <a
            href="https://github.com/julsandstrom/auralize"
            className="underline text-[#F5672D] flex "
          >
            Github for Auralize
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
        <section className="flex flex-col gap-2 px-6">
          <h2 className="font-bold text-xl">Problem</h2>
          <p>
            Accessibility issues often go unnoticed during development because
            developers cannot easily experience how a screen reader interprets
            their UI.
          </p>
          <p>
            There is a gap between writing markup and understanding how
            assistive technology will announce it.
          </p>
        </section>
        <div className="flex flex-col gap-2 px-6">
          <h3 className="font-bold text-xl">What I built</h3>
          <p>
            Auralize parses user-provided markup, extracts focusable elements,
            computes accessible names, simulates announcements, and highlights
            issues with suggested fixes.
          </p>
        </div>
        <div className="flex flex-col gap-2 px-6">
          <h3 className="font-bold text-xl">Key Features</h3>
          <ul className="list-disc flex flex-col gap-2 pl-3">
            <li>
              Paste HTML/JSX and generate focusable elements list (tab order)
            </li>
            <li>Simulated NVDA-style announcement per element</li>
            <li>
              Accessible name breakdown (label/aria-labelledby/aria-label/text)
            </li>
            <li>
              Warnings + suggested improvements with references to the source
              snippet
            </li>
          </ul>
        </div>
        <p className="px-6">
          Single pipeline: parse → analyze → compute → present (list, speech,
          warnings) from one normalized representation.
        </p>
        <div className="flex flex-col gap-2 px-6">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl">What I learned</h3>
          </div>
          <ul className="list-disc flex flex-col gap-2 pl-3 px-6">
            <li>
              Accessible name computation is a rule system (precedence +
              fallbacks)
            </li>
            <li>
              Keyboard focus order is a product of DOM order + tabindex +
              focusability rules
            </li>
            <li>
              Tooling needs deterministic analysis (pure functions) + debuggable
              output (explanations)
            </li>
          </ul>
        </div>

        <section aria-labelledby="tech-stack">
          <h2 id="tech-stack" className="sr-only">
            Tech stack
          </h2>

          <ul className="flex flex-wrap gap-x-7 gap-y-2 text-base py-10 text-white/80 justify-center px-6">
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>React</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Page;
