"use client";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Stagger the animation
      duration: 0.6,
    },
  }),
};

const TestPrepPrograms: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  const programs = [
    {
      id: 1,
      category: "test-prep",
      title: "Test Prep",
      description:
        "SAT and ACT prep for students with starting scores under 1350 SAT and 28 ACT",
      image: "/images/Test.png",
    },
    {
      id: 2,
      category: "high-scorers",
      title: "High Scorers",
      description:
        "SAT and ACT prep for students with starting scores of 1350+ SAT and 28+ ACT",
      image: "/images/HighScorer.png",
    },
    {
      id: 3,
      category: "psat",
      title: "PSAT Prep",
      description:
        "PSAT tutoring to qualify for National Merit Scholar or to increase lower scores",
      image: "/images/PSAT.png",
    },
    {
      id: 4,
      category: "test-anxiety",
      title: "Test Anxiety",
      description:
        "For students not able to demonstrate their abilities on tests because of nerves",
      image: "/images/TestAnxiety.png",
    },
  ];

  const filteredPrograms =
    activeTab === "all"
      ? programs
      : programs.filter((p) => p.category === activeTab);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false, // Trigger animation every time it comes into view
  });

  return (
    <div className="py-16">
      <div className="max-w-[1250px] mx-auto">
        <h2 className="text-3xl font-[500] text-center text-gray-900 sm:text-4xl">
          Our Test Prep Programs
        </h2>
        <div className="mt-14 mx-auto flex justify-center flex-wrap w-auto rounded-full py-1">
          <button
            className={`mx-2 py-2 px-4 rounded-full ${
              activeTab === "all" ? "bg-blue-600 text-white" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("all")}
          >
            View all
          </button>
          <button
            className={`mx-2 py-2 px-4 rounded-full ${
              activeTab === "test-prep"
                ? "bg-blue-600 text-white"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("test-prep")}
          >
            Test Prep
          </button>
          <button
            className={`mx-2 py-2 px-4 rounded-full ${
              activeTab === "high-scorers"
                ? "bg-blue-600 text-white"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("high-scorers")}
          >
            High Scorers
          </button>
          <button
            className={`mx-2 py-2 px-4 rounded-full ${
              activeTab === "psat" ? "bg-blue-600 text-white" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("psat")}
          >
            PSAT
          </button>
          <button
            className={`mx-2 py-2 px-4 rounded-full ${
              activeTab === "test-anxiety"
                ? "bg-blue-600 text-white"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("test-anxiety")}
          >
            Test Anxiety
          </button>
        </div>
        <div
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-0"
          ref={ref}
        >
          {filteredPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              className="bg-white border border-gray-200 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 relative min-h-[20em]" 
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <div className="absolute object-contain h-[60%] max-h-72 right-0 top-0 overflow-hidden">
              <img src='/images/ScoresBG.png' alt="bg" className="w-full h-full object-contain" />
              </div>
              <div className="z-30 h-1/2 w-full absolute top-0 mx-auto mb-4 pt-6">
              <img
                src={program.image}
                alt={program.title}
                className=" w-full h-full object-contain"
              />
              </div>
              <div className="mt-[60%]">
              <p className="mt-4 font-[600] text-gray-700 px-6">{program.description}</p>
              <div className="mt-8 pb-6">
                <Link
                  href="#"
                  className="inline-block px-6 py-2 border border-transparent text-base font-medium rounded-md bg-primary text-white hover:bg-primary-dark"
                >
                  Read More
                </Link>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button title="I WANT TO RAISE MY SCORES!" type="filled" />
        </div>
      </div>
    </div>
  );
};

export default TestPrepPrograms;
