import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

type Particle = {
  id: number;
  x: number;
  y: number;
  color: string;
  letter: string;
};

const colors = [
  "#f43f5e",
  "#3b82f6",
  "#22c55e",
  "#eab308",
  "#a855f7",
  "#06b6d4",
];
const word = "callerstudios";
const forward = word.split("");
const backward = word.split("").reverse();

const MIN_DISTANCE = 15; // minimum px movement
const PAUSE_AFTER_NAME = 1000; // 1 second pause after full word

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);

  const letterIndex = useRef(0);
  const direction = useRef<"right" | "left">("right");
  const lastPos = useRef<{ x: number; y: number } | null>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      if (isPaused.current) return;

      if (lastPos.current) {
        const dx = e.clientX - lastPos.current.x;
        const dy = e.clientY - lastPos.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MIN_DISTANCE) return;

        // Set direction
        if (dx > 0) direction.current = "right";
        else if (dx < 0) direction.current = "left";
      }
      lastPos.current = { x: e.clientX, y: e.clientY };

      // Choose letters based on direction
      const sequence = direction.current === "right" ? forward : backward;
      const currentLetter = sequence[letterIndex.current];
      letterIndex.current += 1;

      // When done, pause then reset
      if (letterIndex.current >= sequence.length) {
        letterIndex.current = 0;
        isPaused.current = true;
        setTimeout(() => {
          isPaused.current = false;
        }, PAUSE_AFTER_NAME);
      }

      const newParticle: Particle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        color: colors[Math.floor(Math.random() * colors.length)],
        letter: currentLetter,
      };

      setParticles((prev) => [...prev, newParticle]);

      // Remove after 3s
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 3000);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
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
        className="fixed top-0 left-0 w-10 h-10 border-2 border-green-400 rounded-full pointer-events-none z-[9998] blur shadow-[0_0_20px_5px_rgba(34,197,94,0.5)]"
        animate={{ x: position.x - 20, y: position.y - 20 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />

      {/* Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="fixed pointer-events-none z-[9997] font-bold"
          initial={{ opacity: 1, scale: 1, y: 0 }}
          animate={{ opacity: 0, scale: 1.5, y: -30 }}
          transition={{ duration: 3 }}
          style={{
            top: p.y,
            left: p.x,
            color: p.color,
            fontSize: "16px",
            whiteSpace: "nowrap",
          }}
        >
          {p.letter}
        </motion.div>
      ))}
    </>
  );
};

export default AnimatedCursor;
