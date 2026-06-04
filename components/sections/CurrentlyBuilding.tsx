import Image from "next/image";

const CurrentlyBuilding = () => {
  return (
    <div className="mx-auto max-w-[1500px]   text-black  px-4">
      {/* Header */}

      <div className="md:grid md:grid-cols-2 md:items-center -mx-[max(0px,calc((100vw-1500px)/2))]  ">
        {/* Image */}
        <div className="relative aspect-[3/4] -mx-4">
          <Image
            src="/images/fregoli_poster.png"
            alt="Experience"
            fill
            className="object-cover object-right"
          />
        </div>

        {/* List */}
        <div className=" py-4 flex flex-col items-center gap-3 justify-center  -mx-4">
          {" "}
          <h3 className="font-gilda text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[0.03em] shrink-0 w-full text-center">
            Building
          </h3>{" "}
          <p className="text-sm sm:text-base lg:text-xl font-light text-center md:max-w-[350px] md:ml-6">
            A memory-based fashion reconstruction game disguised as an ecommerce
            storefront.
          </p>
          <ul className="list-disc list-inside mt-5 space-y-3 text-base sm:text-lg self-center lg:text-xl xl:text-2xl md:ml-6">
            <li>Clothing API integration</li>
            <li>Realtime leaderboard with Supabase</li>
            <li>State-driven gameplay flow</li>
            <li>Interaction-based scoring system</li>
          </ul>{" "}
          <a
            href="https://github.com/julsandstrom/fregoli"
            className="underline lg:text-xl xl:text-2xl my-5"
          >
            Github for the project (in progress)
          </a>
        </div>
      </div>
    </div>
  );
};

export default CurrentlyBuilding;
