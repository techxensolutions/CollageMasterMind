'use client'
import React from "react";
import {motion} from "framer-motion"

type Props = {
  title: string;
  style?: string;
  type?: "outlined" | "filled";
};

const Button = (props: Props) => {
  return (
    <motion.button
    whileTap={{ scale: 0.85 }}
      type="button"
      className={`min-h-[40px] border text-center rounded-[6px] px-8 py-5 font-[500] text-base uppercase leading-[14px] transition duration-200 shadow-md  ${props.type === 'filled' ? 'bg-primary text-white hover:border-primary hover:text-primary hover:bg-transparent' : 'bg-white border-primary text-black hover:bg-primary hover:text-white'} ${props.style}`}
    >
      {props.title}
    </motion.button>
  );
};

export default Button;
