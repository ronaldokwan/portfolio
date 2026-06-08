import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "./animations";

/**
 * Reveal — drop-in wrapper that fades/slides its children into view once.
 * Defaults to a fade-up; pass a different variant for directional reveals.
 */
export function Reveal({
  children,
  variants = fadeUp,
  className,
  style,
  as = "div",
}) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </MotionTag>
  );
}
