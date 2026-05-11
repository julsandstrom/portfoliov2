import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] py-6 md:py-11 lg:py-16  tracking-[0.03em] sm:px-11 lg:px-14">
      <div className="mx-auto flex  items-center justify-between px-5 ">
        <dl className="flex flex-col">
          <dt className="text-base sm:text-lg md:text-xl  font-medium text-[#F4F3F1] self-center">
            Based in
          </dt>
          <dd className="text-base sm:text-lg md:text-xl  text-[#F4F3F1] font-extralight">
            Stockholm
          </dd>
        </dl>
        <nav
          aria-label="Footer contact links"
          className="text-right flex flex-col gap-1"
        >
          <div className="flex items-center justify-center gap-10 md:gap-20 lg:gap-28 mt-1">
            <a
              aria-label="Email Julian Sandstrom"
              href="mailto:juliansandstrom@gmail.com"
              className="    group h-16 flex flex-col gap-2 items-center justify-center
    text-[#F4F3F1] text-xs
    cursor-pointer

   
    focus-visible:text-[#000000]

   
    focus-visible:bg-white/5

    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-[#000000]
    focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]"
            >
              <Image
                src="/icons/Gmail_icon_(2020).svg"
                alt=""
                aria-hidden="true"
                height={20}
                width={20}
                className=" w-8 sm:w-11  h-20 "
              />{" "}
            </a>
            <a
              href="https://se.linkedin.com/in/juliansandstrom"
              aria-label="Julian Sandstrom on LinkedIn"
              className="    group h-16 flex flex-col gap-2 items-center justify-center
    text-[#F4F3F1] text-xs
    cursor-pointer

   
    focus-visible:text-[#000000]

   
    focus-visible:bg-white/5

    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-[#000000]
    focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]"
            >
              <Image
                src="/icons/LinkedIn_icon.svg"
                alt=""
                aria-hidden="true"
                height={20}
                width={20}
                className=" w-8 sm:w-10   h-20"
              />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
