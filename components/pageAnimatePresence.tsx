'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function PageAnimatePresence({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <motion.div
    key={pathname}
    initial={{ opacity: 0, x: 0, y: 30 }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.25 }}
    >
    {children}
    </motion.div>
  );
}