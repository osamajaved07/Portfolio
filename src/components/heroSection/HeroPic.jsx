import React from "react";
import { PiHexagonThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div variants={fadeIn("left", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0 }} className="h-full flex items-center justify-center">
      <img src="/images/HexaPic.png" alt="Osama Javed" className="max-h-[450px] w-auto  " />

      <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
        <PiHexagonThin className=" mt-36 md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-darkCyan blur-md animate-[spin_20s_linear_infinite] " />
      </div>
    </motion.div>
  );
};

export default HeroPic;
