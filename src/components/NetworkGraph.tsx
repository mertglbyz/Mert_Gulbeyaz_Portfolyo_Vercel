"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMounted } from "@/lib/use-mounted";

const nodes = [
  { x: 18, y: 38 },
  { x: 42, y: 18 },
  { x: 78, y: 28 },
  { x: 88, y: 62 },
  { x: 58, y: 78 },
  { x: 28, y: 72 },
  { x: 52, y: 46 },
];

const links: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 0],
  [0, 6],
  [1, 6],
  [2, 6],
  [3, 6],
  [4, 6],
  [5, 6],
];

export function NetworkGraph() {
  const mounted = useMounted();
  const reduceMotion = useReducedMotion();
  const live = mounted && !reduceMotion;

  return (
    <svg
      viewBox="0 0 100 100"
      className="h-full w-full"
      aria-hidden
      fill="none"
    >
      {links.map(([from, to], index) => {
        const a = nodes[from];
        const b = nodes[to];
        return (
          <motion.path
            key={`${from}-${to}`}
            d={`M ${a.x} ${a.y} L ${b.x} ${b.y}`}
            stroke="rgba(91, 140, 255, 0.28)"
            strokeWidth="0.6"
            initial={false}
            animate={
              live
                ? {
                    pathLength: [0.2, 1, 0.35],
                    opacity: [0.2, 0.75, 0.28],
                  }
                : { opacity: 0.7 }
            }
            transition={{
              duration: 5.5,
              delay: index * 0.12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {nodes.map((node, index) => (
        <motion.circle
          key={`${node.x}-${node.y}`}
          cx={node.x}
          cy={node.y}
          r={index === 6 ? 2.1 : 1.35}
          fill={index === 6 ? "rgba(124, 92, 255, 0.95)" : "rgba(91, 140, 255, 0.9)"}
          animate={
            live
              ? {
                  r: index === 6 ? [2.1, 2.7, 2.1] : [1.35, 1.8, 1.35],
                  opacity: [0.55, 1, 0.55],
                }
              : undefined
          }
          transition={{
            duration: 2.4 + index * 0.18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}
