const ScoresSection = () => {
  return (
    <div className="relative  pb-16 pt-32 ">
      <div className=" px-4 max-w-[1250px] mx-auto sm:px-6 lg:px-8">
        <h2 className="text-3xl font-[600] text-center text-gray-900 sm:text-4xl">
          What Scores Should I Try to Reach?
        </h2>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white z-20 border border-gray-200 rounded-lg p-2 py-10 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-600">
              Top 30 University
            </h3>
            <p className="mt-4 text-gray-700">SAT Scores 1550+</p>
            <p className="text-gray-700">ACT Scores 35+</p>
          </div>
          <div className="bg-white z-20 border border-gray-200 rounded-lg p-2 py-10 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-600">
              Top 100 University
            </h3>
            <p className="mt-4 text-gray-700">SAT Scores 1450+</p>
            <p className="text-gray-700">ACT Scores 33+</p>
          </div>
          <div className="bg-white z-20 border border-gray-200 rounded-lg p-2 py-10 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-[#03B3C6]">
              Top 200 University
            </h3>
            <p className="mt-4 text-gray-700">SAT Scores 1440+</p>
            <p className="text-gray-700">ACT Scores 31+</p>
          </div>
          <div className="bg-white z-20 border border-gray-200 rounded-lg p-2 py-10 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-green-600">Less Selective</h3>
            <p className="mt-4 text-gray-700">SAT Scores 1280+</p>
            <p className="text-gray-700">ACT Scores 27+</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600 md:w-[60%] mx-auto text-lg">
          <p>
            People may want to tell you your score is “high enough”, but you
            must always consider your goals and the people in the Typical
            Applicant Pool of each university you want to attend.
          </p>
        </div>
      </div>
      <div
        className="absolute right-0 top-0 hidden md:block md:w-[350px] md:h-[685px]  bg-no-repeat"
        style={{ backgroundImage: "url('/images/ScoresBG.png')" }}
      ></div>
    </div>
  );
};

export default ScoresSection;
