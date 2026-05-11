import Image from "next/image";

const Experience = () => {
  return (
    <div className="  mx-auto min-h-screen text-black bg-[#F0F0F0] w-full px-4 py-10">
      <div className="sm:pl-8 lg:pl-10 max-w-[1500px] mx-auto py-4">
        <h4 className="font-gilda text-3xl sm:text-5xl md:text-6xl font-semibold  tracking-[0.03em] text-[#1B1B1B] shrink-0 w-full sm:w-auto">
          Experience
        </h4>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen -mx-4 ">
        <div className="relative min-h-[80vw] lg:min-h-0 ">
          <Image
            src="/images/experience-mobile.png"
            alt="Experience"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative flex flex-col items-center justify-center lg:justify-center px-6 mt-4 sm:my-6 lg:my-0 lg:px-10 gap-[clamp(2.2rem,4vw,3rem)] max-w-lg md:max-w-xl 2xl:max-w-2xl mx-auto">
          <div className="lg:px-8 flex flex-col items-center gap-2">
            <h2 className="font-gilda text-2xl text-center ">
              Internship 2026 at Sprinto
            </h2>
            <ul className="space-y-4 mt-5 text-sm font-light sm:text-xl lg:mt-5">
              <li className="flex items-start ">
                <span
                  aria-hidden="true"
                  className="pr-2 pt-0.5 text-xs text-[#0B0B0B] sm:text-xl font-bold"
                >
                  +
                </span>
                Designed and implemented a full mobile chat interface from Figma
                to production.
              </li>
              <li className="flex items-start ">
                <span
                  aria-hidden="true"
                  className="pr-2 pt-0.5 text-xs text-[#0B0B0B] sm:text-xl font-bold"
                >
                  +
                </span>
                Built workspace navigation, real-time chat flow, reactions.
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
