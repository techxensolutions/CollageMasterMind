'use client'
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Button from "./Button";

const StrategySection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div
      className="relative bg-cover bg-center py-6 min-h-[285px] rounded-xl max-w-[1260px] mx-4 md:mx-auto mt-16"
      style={{ backgroundImage: "url('/images/StrategyBg.png')" }}
    >
      <div className="relative px-4 sm:px-6 lg:px-10 " ref={ref}>
        <div className="md:w-[60%]">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <h2 className="text-3xl font-[400] text-white sm:text-4xl">
              Learn The Strategy Behind Our Success!
            </h2>
            <p className="mt-4 text-xl text-white">
              College Mastermind had two students within the past year score a
              perfect 36 on the ACT!
            </p>
            <p className="mt-10 text-xl text-white">
              Want to know how we get such great results? Watch our video:
            </p>
            <div className="mt-2">
              <Button title="YES! GET ME REGISTERED NOW!" />
            </div>
          </motion.div>
          <motion.div
            className="mt-10 lg:mt-0 hidden md:block absolute right-0 -top-[76px]"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
            transition={{ duration: 1.2 }}
          >
            <Image
              width={400}
              height={300}
              src="/images/StrategySection.png"
              alt="Strategy Image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StrategySection;
