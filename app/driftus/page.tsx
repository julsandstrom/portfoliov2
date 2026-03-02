import Image from "next/image";

const Page = () => {
  return (
    <main className="min-h-screen  flex flex-col gap-11  md:pt-10 items-center justify-center">
      <div className="max-w-4xl  flex flex-col gap-11 ">
        <div className="px-6">
          <h1 className="font-bold text-4xl text-left md:text-center">
            DriftUs
          </h1>
          <p className="font-light py-2 md:text-center">
            AI-assisted chat prototype that analyzes tone and suggests replies
            using a simple energy signal (red / yellow / green).
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
            src="/images/driftus-page.png"
            height={600}
            width={600}
            alt="AI-assisted chat prototype displaying a negative sentiment indicator (red) and three suggested responses to a critical message."
            className="relative w-full md:max-w-[600px] md:rounded-xl"
          />
        </div>
        <div className="flex gap-12 justify-center px-6">
          <a
            href="https://driftus.netlify.app/login"
            className="flex underline text-[#F5672D] "
          >
            Try DriftUs
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
            href="https://github.com/julsandstrom/driftus"
            className="underline text-[#F5672D] flex "
          >
            Github for DriftUs
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
            In spoken conversation, words disappear. In modern chat, they
            persist with timestamps and history. This permanence changes how we
            respond, replies feel evaluable and static rather than fluid.
          </p>
          <p>
            DriftUs explores whether removing conversational noise and adding
            lightweight tone feedback can reduce hesitation and improve response
            clarity.
          </p>
        </section>
        <div className="flex flex-col gap-2 px-6">
          <h3 className="font-bold text-xl">What I built</h3>
          <p>
            A minimal chat experience that shows only the latest message from
            each participant. A user can request AI help to analyze the last
            message and receive three suggested replies, plus a red/yellow/green
            indicator based on sentiment and energy.
          </p>
        </div>
        <div className="flex flex-col gap-2 px-6">
          <h3 className="font-bold text-xl">Key Features</h3>
          <ul className="list-disc flex flex-col gap-2 pl-3">
            <li>Minimal conversation view (latest message per user)</li>
            <li>AI-powered tone detection</li>
            <li>Energy-based visual signal (red / yellow / green)</li>
            <li>Three contextual reply suggestions</li>
          </ul>
        </div>
        <p className="px-6">
          Single pipeline: parse → analyze → compute → present (list, speech,
          warnings) from one normalized representation.
        </p>
        <div className="flex flex-col gap-2 px-6">
          <h3 className="font-bold text-xl">What I learned</h3>

          <ul className="list-disc flex flex-col gap-2 pl-3 px-6">
            <li>Turning probabilistic AI output into deterministic UI state</li>
            <li>Handling async flows (loading, error, retry)</li>
            <li>Separating analysis logic from presentation</li>
          </ul>
        </div>
        <section aria-labelledby="tech-stack">
          <h2 id="tech-stack" className="sr-only">
            Tech stack
          </h2>

          <ul className="flex flex-wrap gap-x-7 gap-y-3 text-base text-white/80 justify-center px-6 py-10">
            <li>OpenAI API (via Netlify function)</li>
            <li>Teacher-provided REST API (Swagger documented)</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Page;
