"use client";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";

const InfoSection = () => {
  return (
    <div className="pt-16 mt-5 max-w-[100vw] overflow-x-hidden">
      <div className="max-w-[1250px] mx-auto ">
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-between items-center flex-col md:flex-row mb-16 gap-8 md:gap-20 px-4 md:px-0"
        >
          <div className="md:w-[60%]">
            <h2 className="text-3xl font-[500] text-secondary sm:text-4xl">
              Get the plan, accountability, and the motivation you need to
              achieve the scores you want!
            </h2>
            <p className="mt-4 text-xl text-gray-700">
              Our test prep programs were designed to get amazing results!
            </p>
            <div className="mt-8">
              <Button title="LEARN MORE" type="filled" />
            </div>
          </div>
          <div className="mt-10 ml-auto">
            <Image
              width={400}
              height={400}
              src="/images/Info1.png"
              alt="Test Prep"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-between items-center flex-col md:flex-row gap-8 md:gap-20 px-4 md:px-0"
        >
          <div className="mt-15 lg:mt-0 border">
            <Image
              width={400}
              height={400}
              src="/images/Info2.png"
              alt="Test Optional"
            />
          </div>
          <div className="md:w-[60%]">
            <h2 className="text-3xl font-[500] text-secondary sm:text-4xl">
              Do we need test prep, or can I go test-optional?
            </h2>
            <p className="mt-4 text-xl text-gray-700">
              A score is a key way that universities can judge a student.
            </p>
            <div className="mt-8">
              <Button title="LEARN MORE" type="filled" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InfoSection;
