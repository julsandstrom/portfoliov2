import Image from "next/image";

const About = () => {
  return (
    <main className="min-h-screen text-black bg-[#F0F0F0]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="relative min-h-[50vw] lg:min-h-0">
          <Image
            src="/images/julian.jpg"
            alt="About"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative flex flex-col items-center justify-center lg:justify-center px-6 mt-4 sm:my-6 lg:my-0 lg:px-10 gap-[clamp(2.2rem,4vw,3rem)] max-w-2xl  mx-auto">
          <div className="lg:px-8 flex flex-col items-center gap-2">
            <h2 className="font-gilda text-4xl text-center lg:text-5xl">
              About Me
            </h2>
            <p className="font-light py-2 lg:py-6 text-left lg:text-xl ">
              Background in film production and flight coordination. I got into
              frontend because I wanted to build experiences with the same
              attention to timing, rhythm, and feel that good filmmaking
              requires...
              <br /> And it turns out those instincts transfer.
            </p>
            <p className="font-semibold text-base mt-10 lg:text-xl">
              Graduating from Jensen Yrkeshögskola in 2026
            </p>
            <p className="font-light text-sm lg:text-lg  mt-2">
              Final thesis on web accessibility and inclusive design.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
};

export default About;
