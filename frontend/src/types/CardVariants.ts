export const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 } // Card tự nó xuất hiện trong 0.5s
  }
};