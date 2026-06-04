import Image from "next/image";

const page = () => {
  return (
    <main className="min-h-screen text-black bg-[#F0F0F0]">
      <div className="lg:grid lg:grid-cols-2 ">
        <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-screen">
          <Image
            src="/images/julian.jpg"
            alt="About"
            fill
            className="object-cover "
          />
        </div>
        <div className="relative flex flex-col items-center justify-center lg:justify-center px-6 mt-4 sm:my-6 lg:my-0 lg:px-10 gap-[clamp(2.2rem,4vw,3rem)] max-w-3xl  mx-auto">
          <div className="lg:px-8 flex flex-col items-center gap-2 mb-10">
            <h2 className="font-gilda text-4xl text-center lg:text-5xl">
              Internship at Sprinto
            </h2>
            <p className="font-light py-2 lg:py-6 text-left lg:text-xl ">
              During my internship, I worked in an agile product team of two
              frontend developers and two backend developers, building platform
              features for a real client. The work focused mainly on chat
              functionality and meeting booking flows, with surrounding features
              such as notifications, online status, pinned chats, muted chats,
              emojis and related UI states.
            </p>
            <p className="font-light text-base  lg:text-xl">
              In addition to frontend development, I took on the Scrum Master
              role and facilitated daily standups, sprint planning, refinements,
              sprint reviews and retrospectives.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
