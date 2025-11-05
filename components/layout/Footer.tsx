const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] py-6 md:py-11 lg:py-16  tracking-[0.03em] sm:px-11 lg:px-14">
      <div className="mx-auto flex  items-start justify-between px-5 ">
        <div className="flex flex-col">
          <p className="text-sm sm:text-lg md:text-xl  font-medium text-[#F5672D] self-center">
            Based in
          </p>
          <p className="text-sm sm:text-lg md:text-xl  text-[#F4F3F1] font-extralight">
            Stockholm
          </p>
        </div>
        <div className="text-right flex flex-col gap-1">
          <div className="flex justify-center gap-10 md:gap-20 lg:gap-28 mt-1">
            <a
              href="mailto:juliansandstrom@gmail.com"
              className="flex items-center justify-center text-[#0B0B0B] text-xs transition-transform duration-300 hover:scale-110"
            >
              {' '}
              <img
                src="/icons/Gmail_icon_(2020).svg"
                alt="Gmail"
                className="ml-2 w-8 sm:w-11 md:w-14  h-auto"
                loading="eager"
              />
            </a>
            <a
              href="https://se.linkedin.com/in/juliansandstrom"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-[#F4F3F1] text-xs transition-transform duration-300 hover:scale-110"
            >
              {' '}
              <img
                src="/icons/LinkedIn_icon.svg"
                alt="LinkedIn"
                className="ml-2 w-8 sm:w-10 md:w-12  h-auto"
                loading="eager"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
