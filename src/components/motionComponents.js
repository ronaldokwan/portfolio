import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";

// Motion-enhanced react-bootstrap layout components so existing markup can
// keep using Col/Row/Container while gaining animation props.
// Kept in a plain module (no JSX component of its own) so the React Fast
// Refresh lint rule treats these HOC exports cleanly.
export const MotionCol = motion.create(Col);
export const MotionRow = motion.create(Row);
export const MotionContainer = motion.create(Container);
