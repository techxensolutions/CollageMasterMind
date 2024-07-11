'use client'
import Link from "next/link";
import Button from "./Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, 
      duration: 0.6,
    },
  }),
};

const StepsSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const steps = [
    {
      title: "Step 1",
      description: "Take a Free Diagnostic Test",
    },
    {
      title: "Step 2",
      description: "Get your results automatically",
    },
    {
      title: "Step 3",
      description: "Get a Free Score Analysis",
    },
    {
      title: "Step 4",
      description: "Implementation of Custom Plan",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-[500] text-center text-gray-900 sm:text-4xl">
          College Mastermind Steps
        </h2>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" ref={ref}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <h3 className="text-xl font-bold text-blue-600 text-left">{step.title}</h3>
              <p className="mt-4 text-gray-700 text-lg text-left">{step.description}</p>
              <div className="mt-8">
                <Link
                  href="#"
                  className="inline-block px-5 py-3 border border-transparent text-base font-medium rounded-md bg-primary text-white w-full hover:bg-primary-dark"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button title="I'M READY TO GET STARTED!" type="filled" />
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
