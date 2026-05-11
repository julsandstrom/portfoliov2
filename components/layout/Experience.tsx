import Image from "next/image";

const Experience = () => {
  return (
    <main className="min-h-screen text-black bg-[#F0F0F0]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="relative min-h-[50vw] lg:min-h-0">
          <Image
            src="/images/experience-mobile.png"
            alt="Experience"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative flex flex-col items-center justify-center lg:justify-center px-6 mt-4 sm:my-6 lg:my-0 lg:px-10 gap-[clamp(2.2rem,4vw,3rem)] max-w-lg md:max-w-xl 2xl:max-w-2xl mx-auto">
          <div className="lg:px-8 flex flex-col items-center gap-2">
            <h2 className="font-gilda text-4xl text-center lg:text-5xl">
              Internship 2026
            </h2>
            <p className="font-light py-2 lg:py-6 text-center lg:text-xl xl:text-2xl">
              Designed and implemented a full mobile chat interface from Figma
              to production. Built workspace navigation, real-time chat flow,
              reactions, and @mention support.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
};

export default Experience;
