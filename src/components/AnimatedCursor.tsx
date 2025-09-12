import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-green-500 rounded-full pointer-events-none z-[9999]"
        animate={{ x: position.x - 8, y: position.y - 8 }}
        transition={{ type: "spring", mass: 0.6 }}
      />
      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-green-400 rounded-full pointer-events-none z-[9998] blur-sm shadow-[0_0_20px_5px_rgba(34,197,94,0.5)]"
        animate={{ x: position.x - 20, y: position.y - 20 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />
    </>
  );
};

export default AnimatedCursor;
