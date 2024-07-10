import Link from "next/link";

const GpaToTestScores = () => {
  return (
    <div
      className="relative max-w-[1250px] md:mx-auto rounded-xl bg-cover bg-center py-16 mx-4"
      style={{ backgroundImage: "url('/images/StrategyBg.png')" }}
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-[500] text-white sm:text-4xl">
        GPA to Test Scores Calculate
        </h2>
        <div className="mt-8">
          <Link
            href="#"
            className="inline-block px-5 py-3 border border-transparent text-base font-medium rounded-md bg-white text-primary hover:bg-gray-200"
          >
           What Score Should I Get?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GpaToTestScores;
