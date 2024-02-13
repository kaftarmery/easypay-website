import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

// TODO:
// - make font lighter (add to custom fonts)
// make them responsive
// add some animations (subtle)

export const Pill = () => {
  const constraintsRef = useRef(null);

  return (
    <motion.div ref={constraintsRef} className="cursor-pointer">
      {/* left side pills container */}

      {/* first set of pills */}
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.4}
        className="absolute left-2 top-20 transform rotate-12"
      >
        <div className="bg-pill-gray transform rotate-12 border-[1px] border-pill-border text-gray-400 font-thiccboi-regular py-3 px-5 rounded-full w-[200px]">
          Solutions
        </div>
      </motion.div>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.4}
        className="absolute left-2 top-20 transform rotate-12"
      >
        <div className="bg-pill-gray hover:bg-red-200 transform rotate-12 border-[1px] border-pill-border text-gray-400 font-thiccboi-regular py-3 px-5 rounded-full w-[200px]">
          Better
        </div>
      </motion.div>

      {/* second set of pills */}
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className="absolute left-[5rem] bottom-[-1rem] transform rotate-[-15deg] bg-pill-gray border-[1px] border-pill-border text-gray-400 font-thiccboi-regular py-3 px-5 rounded-full w-[200px]"
      >
        Payments
      </motion.div>

      <motion.div
        drag
        dragConstraints={constraintsRef}
        className="absolute left-[5rem] bottom-[-1rem] transform rotate-[-15deg] bg-pill-gray border-[1px] border-pill-border text-gray-400 font-thiccboi-regular py-3 px-5 rounded-full w-[200px]"
      >
        Simplify
      </motion.div>

      <div className="absolute left-[-5rem] bottom-20 transform rotate-[-15deg] bg-pill-gray border-[1px] border-pill-border text-gray-400 font-thiccboi-regular py-3 px-5 rounded-full w-[200px]">
        Manage
      </div>
    </motion.div>
  );
};
