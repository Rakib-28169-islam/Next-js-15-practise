'use client';

import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      // A unique key is crucial. When the route changes,
      // Next.js sees a new key and re-mounts the component,
      // which triggers the animation.
      key={Math.random()} // Using a random key for simplicity
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}