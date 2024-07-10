import Image from "next/image";

const Hero = () => {
    return (
      <div className="bg-blue-50">
        <div className="max-w-[1260px] mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="flex justify-between gap-20 items-center      ">
            <div>
              <h1 className="text-[44px] leading-[52.8px] font-extrabold text-primary ">
                Strengthen Your Application with High Test Scores
              </h1>
              <p className="mt-4 max-w-2xl text-2xl font-[500] text-black">
                Increase your scores with a test prep program that gets the results that you want!
              </p>
              <div className="mt-8 flex">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary"
                  >
                    Book Your Strategy Session!
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block mt-10 lg:mt-0">
              <Image className="rounded-lg shadow-lg" width={700} height={500} src="/images/Hero.png" alt="Study group" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
  