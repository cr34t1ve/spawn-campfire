"use client";
import { useState } from "react";
import useMaxZIndex from "@/hooks/useMaxZIndex";
import { motion, type PanInfo, useAnimation } from "framer-motion";
import { memo } from "react";
import { styled } from "@/stitches.config";

export const getRandomRotation = () => {
  const isNegative = Math.random() < 0.5;
  const angle = Math.floor(Math.random() * 60);
  return isNegative ? -angle : angle;
};

const Drag = memo(function DragComponent({
  children,
  className,
  initialX,
  initialY,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  initialX?: number;
  initialY?: number;
}) {
  const [zIndex, updateZIndex] = useMaxZIndex();
  const controls = useAnimation();
  const r = getRandomRotation();
  const [initialRotate] = useState(r);
  const [x, y] = [
    initialX ?? Math.floor(Math.random() * 1300),
    initialY ?? Math.floor(Math.random() * 900),
  ];

  const handleDragEnd = (event: MouseEvent, info: PanInfo) => {
    const direction = info.offset.x > 0 ? 1 : -1;
    const velocity = Math.min(Math.abs(info.velocity.x), 1);
    controls.start({
      rotate: Math.floor(initialRotate + velocity * 40 * direction),
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 30,
        mass: 1,
        restDelta: 0.001,
      },
    });
  };

  return (
    <div
      style={{
        zIndex,
      }}
    >
      <MotionWrapper
        drag
        dragElastic={0.2}
        className="drag-elements"
        dragTransition={{ power: 0.2, timeConstant: 200 }}
        onMouseDown={updateZIndex}
        onTouchStart={updateZIndex}
        onDragEnd={handleDragEnd}
        animate={controls}
        // variants={variants}
        initial={{
          rotate: r,
          x,
          y,
        }}
        // css={{
        //   zIndex: zIndex,
        // }}
        {...props}
      >
        {children}
      </MotionWrapper>
    </div>
  );
});

export default Drag;

const MotionWrapper = styled(motion.div, {
  position: "absolute",
  userSelect: "none",
  width: "max-content",
  height: "max-content",
  maxWidth: 200,
  zIndex: 10,
});
