import Link from "next/link";
import Button from "./Button";

const GpaToTestScores = () => {
  return (
    <div
      className="relative max-w-[1250px] md:mx-auto rounded-xl bg-cover bg-center py-16 mx-4 md:mt-10"
      style={{ backgroundImage: "url('/images/StrategyBg.png')" }}
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-[500] text-white sm:text-4xl">
        GPA to Test Scores Calculate
        </h2>
        <div className="mt-8">
        <Button title="What Score Should I Get?"/> 
        </div>
      </div>
    </div>
  );
};

export default GpaToTestScores;
