import Image from "next/image";

const Page = () => {
  return (
    <main className="min-h-screen text-black bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="relative min-h-[50vw] lg:min-h-0">
          <Image
            src="/images/cartlag-about-page.png"
            fill
            alt="Interface for adding body measurements showing a mannequin with labeled measurements and a side panel to adjust leg length using a slider, with save and delete buttons."
            className="object-cover"
          />
        </div>

        <div className="relative flex flex-col items-center justify-start lg:justify-center px-6 mt-4 sm:my-6 lg:my-0 lg:px-10 lg:mt-10 gap-[clamp(2.2rem,4vw,3rem)] max-w-lg md:max-w-xl 2xl:max-w-2xl mx-auto">
          <div className=" lg:px-8 flex flex-col  gap-2 ">
            <h1 className="font-bold text-4xl text-center lg:text-5xl">
              Cartlag
            </h1>
            <p className="font-light py-2 lg:py-6 text-center lg:text-xl xl:text-2xl">
              Digital Body ID for size recommendations
            </p>
            <div className="flex gap-8 mt-3 lg:text-xl xl:text-2xl justify-center lg:gap-12 font-light">
              <a href="https://cartlag.netlify.app/" className="underline">
                Demo
              </a>
              <a
                href="https://github.com/julsandstrom/Cartlag"
                className="underline"
              >
                Github
              </a>
            </div>
          </div>

          <div className="">
            <section className="flex flex-col gap-10 mb-16">
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl font-gilda">The idea</h2>
                <p className="font-light">
                  Most clothing returns happen because sizes don't translate
                  across brands. Cartlag lets users build a reusable digital
                  body profile through an interactive mannequin, measurements
                  stored once, applied anywhere, exportable as a portable Body
                  ID card.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl font-gilda">What I learned</h2>
                <p className="font-light">
                  This was my first full application. Looking back, the main
                  weakness was a large God component managing too many concerns
                  at once, UI, domain logic, and state all tightly coupled. If
                  rebuilt today I would extract domain logic into custom hooks
                  and use a reducer for UI state. That failure taught me more
                  about architecture than any tutorial.
                </p>
              </div>
            </section>
            <ul className="absolute bottom-5 sm:bottom-0 left-0 right-0 flex justify-center flex-wrap gap-x-7 lg:gap-x-12 lg:bottom-10  text-sm lg:text-base  ">
              <li>React</li>
              <li>LocalStorage</li>
              <li>html2canvas</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
