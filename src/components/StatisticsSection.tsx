'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3, // Stagger the animation
      duration: 0.6,
    },
  }),
};

const StatisticsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div className="bg-secondary py-4 mt-20 md:mt-32">
      <div className="px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={ref}>
          {[
            { value: "100", text: "of high achievers got into a Top 30 university 2024" },
            { value: "94%", text: "of our clients got one of their top 3 choices in 2 years." },
            { image: "/images/Star.png", text: "Perfect ACT scorers in 2024 School Year" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center bg-white py-12 flex flex-col justify-center px-12 rounded-lg"
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              {item.value ? (
                <div className="text-5xl font-bold text-secondary">{item.value}</div>
              ) : item.image ? (
                <Image src={item.image} alt="star" height={100} width={100} className="mx-auto" />
              ) : null}
              <p className="mt-4 text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
