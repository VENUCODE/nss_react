const pageVariant = {
  initial: {
    opacity: 0,
    y: 10,
    scale: 0.5,
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
};
const scrollVariant = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 1,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};
const containerVariant = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 1,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const childrenVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export { pageVariant, scrollVariant, containerVariant, childrenVariant };
