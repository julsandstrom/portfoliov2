import Image from "next/image";

const CurrentlyBuilding = () => {
  return (
    <div className="mx-auto px-4 max-w-[1500px] mt-10">
      <div className="pb-6 lg:pb-10 flex flex-col items-center gap-4">
        <h3 className="font-gilda text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[0.03em] text-[#1B1B1B] shrink-0 w-full ">
          In Progress
        </h3>
        <p className=" text-sm font-light sm:text-xl lg:mt-8">
          <span className="font-bold">Fregoli</span>: a memory-based fashion
          reconstruction game disguised as an ecommerce storefront.
        </p>
        <ul className="list-disc list-inside text-sm font-light sm:text-xl lg:mt-5">
          <li>Clothing API integration</li>
          <li>Realtime leaderboard with Supabase</li>
          <li>State-driven gameplay flow</li>
          <li>Interaction-based scoring system</li>
        </ul>
      </div>
      <div className="flex -mx-4">
        <div className="relative w-1/2 aspect-390/900">
          <Image
            src="/images/Fregoli_01.png"
            alt="Experience"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-1/2 aspect-390/900">
          <Image
            src="/images/Fregoli_02.png"
            alt="Experience"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CurrentlyBuilding;
