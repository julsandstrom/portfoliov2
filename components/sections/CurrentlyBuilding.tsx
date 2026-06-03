import Image from "next/image";

const CurrentlyBuilding = () => {
  return (
    <div className="mx-auto max-w-[1500px]  text-black sm:pt-48 lg:pt-20">
      {/* Header */}
      <div className="flex flex-col px-4 py-4 ">
        <h3 className="font-gilda text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[0.03em] text-[#1B1B1B] shrink-0 w-full">
          Currently building
        </h3>
        <p className="text-sm sm:text-base md:text-xl  my-2 md:my-10 text-center">
          A memory-based fashion reconstruction game disguised as an ecommerce
          storefront.
        </p>
      </div>

      <div className="md:grid md:grid-cols-2 md:items-center -mx-[max(0px,calc((100vw-1500px)/2))]">
        {/* Image */}
        <div className="relative aspect-[3/4] ">
          <Image
            src="/images/fregoli_poster.png"
            alt="Experience"
            fill
            className="object-cover object-right"
          />
        </div>

        {/* List */}
        <div className=" py-10 flex flex-col items-center gap-10 justify-center">
          <ul className="list-disc list-inside space-y-3 text-base sm:text-lg self-center lg:text-xl xl:text-2xl ">
            <li>Clothing API integration</li>
            <li>Realtime leaderboard with Supabase</li>
            <li>State-driven gameplay flow</li>
            <li>Interaction-based scoring system</li>
          </ul>{" "}
          <a
            href="https://github.com/julsandstrom/fregoli"
            className="underline lg:text-xl xl:text-2xl"
          >
            Github for the project (in progress)
          </a>
        </div>
      </div>
    </div>
  );
};

export default CurrentlyBuilding;
