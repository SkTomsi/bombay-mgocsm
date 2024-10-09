export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    delay: 0.6,
    duration: 0.8,
    type: "spring",
    damping: 40,
    stiffness: 100,
  },
};
