import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode;
};

const variants = {
  hidden: { opacity: 0, x: 0, y: 200 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 200 },
};

const TransitionLayout = ({ children }: Props): JSX.Element => (
  <motion.div
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ type: 'tween', ease: 'anticipate', duration: 0.5 }}
    className=""
  >
    {children}
  </motion.div>
);

export default TransitionLayout;
