'use client'
import React from 'react';
import { motion } from 'framer-motion';

const TypeWriter = ({ text }: { text: string, }) => {

  return (
    <p className="text-[44px] leading-[52.8px] font-extrabold text-primary">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="block md:inline">
          {text.split("").map((char, index) => (
            <React.Fragment key={index}>
              <motion.span
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="text-3xl md:text-4xl lg:text-5xl"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </React.Fragment>
          ))}
        </span>
      </motion.span>
    </p>
  );
};

export default TypeWriter;
