import Image from "next/image";

const StatisticsSection = () => {
    return (
      <div className="bg-secondary py-4 mt-20">
        <div className="px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white py-12 flex flex-col justify-center px-12 rounded-lg">
              <div className="text-5xl font-bold text-secondary">100</div>
              <p className="mt-4 text-lg">of high achievers got into a Top 30 university 2024</p>
            </div>
            <div className="text-center bg-white py-12 flex flex-col justify-center px-12 rounded-lg">
              <div className="text-5xl font-bold text-secondary">94%</div>
              <p className="mt-4 text-lg">of our clients got one of their top 3 choices in 2 years.</p>
            </div>
            <div className="text-center bg-white py-12 flex flex-col justify-center px-12 rounded-lg">
              <Image src={"/images/Star.png"} alt="star" height={100} width={100} className="mx-auto" />
              <p className="mt-4 text-lg">Perfect ACT scorers in 2024 School Year</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default StatisticsSection;
  