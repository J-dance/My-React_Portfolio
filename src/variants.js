import React from "react";

export const introVariant = {
  initial: {
    scale: 1,
    x: 0,
    y: 0
  },
  animate: {
    scale: [1, 2, 2, 2],
    x: [0, -200, -200, 100],
    y: [0, -200, -200, -200]
  },
  
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