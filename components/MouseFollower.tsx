import { motion } from "framer-motion";

interface MouseFollowerProps {
  mousePosition: { x: number; y: number };
}

const MouseFollower = ({ mousePosition }: MouseFollowerProps) => {
  return (
    <motion.div
      className="fixed w-6 h-6 bg-indigo-600 rounded-full pointer-events-none z-50"
      style={{
        x: mousePosition.x - 3,
        y: mousePosition.y - 3,
      }}
      animate={{
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
};

export default MouseFollower;
