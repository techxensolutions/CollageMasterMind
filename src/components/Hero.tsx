import Image from "next/image";
import TypeWriter from "./TypeWritter";
import Button from "./Button";

const Hero = () => {
    return (
      <div className="bg-blue-50">
        <div className="max-w-[1260px] mx-auto py-16 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="flex justify-between gap-20 items-center      ">
            <div>
              <TypeWriter text="Strengthen Your Application with High Test Scores"/>
              <p className="mt-4 max-w-2xl text-2xl font-[500] text-black">
                Increase your scores with a test prep program that gets the results that you want!
              </p>
              <div className="mt-8 flex">
               
                  <Button title="Book Your Strategy Session!" type="filled"/>
              </div>
            </div>
            <div className="hidden md:block mt-10 lg:mt-0">
              <Image width={700} height={500} src="/images/Hero.png" alt="Study group" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
  