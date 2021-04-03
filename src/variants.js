import React from "react";

export const introVariant = {
  initial: {
    borderRadius: "50%",
    width: 100,
    height: 100,
    scale: 1,
    x: 0,
    y: 0
  },
  animate: {
    width: [100, 100, 100, 150],
    height: [100, 100, 100, 70],
    scale: [1, 2, 2, 2],
    x: [0, -200, -200, 150],
    y: [0, -200, -200, -200],
    borderRadius: ["50%", "50%", "50%", "30px"]
  }
  
}

export const hiVariant = {
  hidden: {
    opacity: 0,
    x: 40
  },
  visible: {
    opacity: [0, 1, 1, 0],
    x: [40, 40, -100, -100]
  }
}

export const nameVariant = {
  hidden: {
    opacity: 0,
    x: 200
  },
  visible: {
    opacity: 1,
    x: 0
  }
}

export const hoverVariant ={
  whileHover: {color: '#a83283', originX: 0, originY: 0, scale: 1.5},
  transition: {type: 'spring', stiffness: 500}
}

// for component mount and exit
export const componentTransition = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5}
  },
  exit: {
    opacity: 0,
    transition: {ease: 'easeInOut'}
  }
}