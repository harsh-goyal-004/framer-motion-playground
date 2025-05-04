import { motion } from "framer-motion";

function AnimationBox({ text, animationProps }) {
  return (
    <motion.div
      {...animationProps}
      className="w-36 h-36 m-4 bg-purple-500 text-white text-center flex items-center justify-center rounded-lg cursor-pointer"
    >
      {text}
    </motion.div>
  );
}

export default AnimationBox;
