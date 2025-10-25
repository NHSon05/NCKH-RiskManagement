import React from 'react'
import {motion} from 'motion/react'


interface FadeDiv{
    children: React.ReactNode;
    className?: string;
}

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // 2. Yêu cầu các con xuất hiện tuần tự, cách nhau 0.1s
      staggerChildren: 0.1 
    }
  }
};

export default function FadedDiv({children, className} : FadeDiv) {
  return (
    <motion.div className={className}
                variants={gridContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} 
    >
        {children}
    </motion.div>
  )
}
