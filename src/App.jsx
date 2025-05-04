import { animate, motion } from "framer-motion";
import AnimationBox from "./AnimationBox";
import AnimatedOnScroll from "./AnimatedOnScroll";

function App() {
  return (
    <>
      <div className="w-full flex-wrap  h-screen flex justify-center items-center">
        <AnimationBox
          text={"Slide"}
          animationProps={{
            initial: { x: -200, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            transition: { duration: 1 },
          }}
        />
        <AnimationBox
          text={"Rotate"}
          animationProps={{
            whileHover: { rotate: 360 },
            transition: { duration: 3 },
          }}
        />
        <AnimationBox
          text={"Scale"}
          animationProps={{
            whileHover: { scale: 1.2 },
            whileTap: { scale: 0.8 },
            transition: { duration: 1 },
            transition: { type: "spring", stiffness: 200 },
          }}
        />
        <AnimationBox
          text={"Bounce"}
          animationProps={{
            animate: { y: [0, -50, 50, 0] },
            transition: { duration: 2, ease: "easeInOut", repeat: Infinity },
          }}
        />
        <AnimationBox
          text={"Fade In"}
          animationProps={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: {
              duration: 5,
              delay: 0.5,
              ease: "easeInOut",
            },
          }}
        />
        <AnimationBox
          text={"Drag Me"}
          animationProps={{
            drag: true,
            dragConstraints: { top: -50, bottom: 50, left: -50, right: 50 },
            whileTap: { scale: 1.1 },
            transition: {
              duration: 1,
              type: "spring",
              stiffness: 200,
              damping: 13,
            },
          }}
        />
      </div>
      <div className="flex flex-col gap-10  justify-center items-center">
        <AnimatedOnScroll />
        <AnimatedOnScroll />
        <AnimatedOnScroll />
        <AnimatedOnScroll />
        <AnimatedOnScroll />
        <AnimatedOnScroll />
        <AnimatedOnScroll />
      </div>
    </>
  );
}

export default App;
