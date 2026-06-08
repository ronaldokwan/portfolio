import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import { fadeUp, viewportOnce } from "./animations";

// Motion-enhanced react-bootstrap layout components so existing markup can
// keep using Col/Row/Container while gaining animation props.
export const MotionCol = motion.create(Col);
export const MotionRow = motion.create(Row);
export const MotionContainer = motion.create(Container);

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
