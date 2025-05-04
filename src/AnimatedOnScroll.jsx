import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

function AnimatedOnScroll() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: true });

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="h-30 w-1/2 border-2 p-5"
      >
        <h1>Hello</h1>
      </motion.div>
    </>
  );
}

export default AnimatedOnScroll;
