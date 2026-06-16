import Image from "next/image";

const Page = () => {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[50vw] lg:min-h-0">
          <Image
            src="/images/adaptive-components-page.png"
            fill
            alt="Adaptive Components interface showing a responsive component preview with controls for switching between narrow, medium, and large container widths."
            className="object-cover"
          />
        </div>

        <div className="relative mx-auto mt-4 flex max-w-lg flex-col items-center justify-start gap-[clamp(2.2rem,4vw,3rem)] px-6 sm:my-6 md:max-w-xl lg:my-0 lg:mt-10 lg:max-w-none lg:justify-center lg:px-10 2xl:max-w-2xl">
          <div className="flex flex-col gap-2 lg:px-8">
            <h1 className="text-center text-4xl font-bold lg:text-5xl">
              Adaptive Components
            </h1>

            <p className="py-2 text-center font-light lg:py-6 lg:text-xl xl:text-2xl">
              Accessible React components that respond to their own available
              space
            </p>

            <div className="mt-3 flex justify-center gap-8 font-light lg:gap-12 lg:text-xl xl:text-2xl">
              <a
                href="https://adaptive-components.vercel.app/"
                className="underline"
              >
                Demo
              </a>

              <a
                href="https://github.com/julsandstrom/adaptive-components"
                className="underline"
              >
                Github
              </a>
            </div>
          </div>

          <div>
            <section className="mb-16 flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <h2 className="font-gilda text-xl font-bold">The idea</h2>

                <p className="font-light">
                  Responsive interfaces are usually designed around the browser
                  viewport, but reusable components do not know whether they
                  will appear in a narrow sidebar, a dashboard grid, a dialog,
                  or a full-width section. Adaptive Components explores a more
                  local approach: each component responds to the space provided
                  by its own parent container.
                </p>

                <p className="font-light">
                  The project combines CSS Container Queries with semantic HTML,
                  accessible interaction patterns, and feature-based
                  architecture. The preview controls resize only the surrounding
                  container, while the component itself decides how its layout
                  should change through CSS.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-gilda text-xl font-bold">What I learned</h2>

                <p className="font-light">
                  Adaptability is not only a visual concern. Moving content
                  between columns, changing action placement, or compacting a
                  form can affect reading order, focus order, semantics, and the
                  relationships between labels, descriptions, and controls.
                </p>

                <p className="font-light">
                  Separating the reusable component from its demonstration
                  environment made those responsibilities clearer. React owns
                  the preview state, CSS owns the adaptive layout, and the
                  component remains independent of the size controls. I also
                  structured each example as an isolated feature with its own
                  types, configuration, demo state, and public component API.
                </p>
              </div>
            </section>

            <ul className="absolute bottom-5 left-0 right-0 flex flex-wrap justify-center gap-x-7 text-sm sm:bottom-0 lg:bottom-10 lg:gap-x-12 lg:text-base">
              <li>Next.js</li>
              <li>TypeScript</li>

              <li>Tailwind CSS</li>
              <li>Container Queries</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
