import { motion } from "framer-motion";
import DraggableCard from "../DraggableCard";

export function BECards({
  messageHistory,
  animation,
}: {
  messageHistory: Array<any>;
  animation: any;
}) {
  return (
    <>
      {messageHistory?.map((ticket: any, index: number) => (
        <motion.div
          key={index}
          variants={animation}
          transition={{
            delay: 0.3,
            type: "spring",
            duration: 0.5,
            bounce: 0.25,
            damping: 10,
            mass: 1,
            stiffness: 100,
            velocity: 2,
          }}
        >
          <DraggableCard
            type={ticket?.type.toLowerCase() || "spade"}
            color={ticket?.color || "red"}
            image={ticket?.image}
            initialX={parseFloat(ticket?.initx)}
            initialY={parseFloat(ticket?.inity)}
          />
        </motion.div>
      ))}
    </>
  );
}
