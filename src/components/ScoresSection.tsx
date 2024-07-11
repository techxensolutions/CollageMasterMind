'use client'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

interface ScoreItem {
  title: string;
  sat: string;
  act: string;
  color: string;
}

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

const ScoresSection: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
  });

  // Merge refs
  const setRefs = (node: HTMLDivElement) => {
    ref.current = node;
    inViewRef(node);
  };

  const scoreItems: ScoreItem[] = [
    {
      title: "Top 30 University",
      sat: "SAT Scores 1550+",
      act: "ACT Scores 35+",
      color: "text-blue-600",
    },
    {
      title: "Top 100 University",
      sat: "SAT Scores 1450+",
      act: "ACT Scores 33+",
      color: "text-blue-600",
    },
    {
      title: "Top 200 University",
      sat: "SAT Scores 1440+",
      act: "ACT Scores 31+",
      color: "text-[#03B3C6]",
    },
    {
      title: "Less Selective",
      sat: "SAT Scores 1280+",
      act: "ACT Scores 27+",
      color: "text-green-600",
    },
  ];

  return (
    <div className="relative pb-16 pt-32 " ref={setRefs}>
      <div className="px-4 max-w-[1250px] mx-auto sm:px-6 lg:px-8">
        <h2 className="text-3xl font-[600] text-center text-gray-900 sm:text-4xl">
          What Scores Should I Try to Reach?
        </h2>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {scoreItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white z-20 border border-gray-200 rounded-lg p-2 py-10 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <h3 className={`text-xl font-bold ${item.color}`}>{item.title}</h3>
              <p className="mt-4 text-gray-700">{item.sat}</p>
              <p className="text-gray-700">{item.act}</p>
            </motion.div>
          ))}
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
        className="absolute right-0 top-0 hidden md:block md:w-[350px] md:h-[685px] bg-no-repeat"
        style={{ backgroundImage: "url('/images/ScoresBG.png')" }}
      ></div>
    </div>
  );
};

export default ScoresSection;
