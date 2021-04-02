import React from "react";

export const introVariant = {
  initial: {
    scale: 1,
    x: 0,
    y: 0
  },
  animate: {
    scale: 2,
    x: [0, 100, 200, 300, 400],
    // y: [100, 200, 100]
  },
  transition: {
    duration: 5,
    times: [0.2, 0.4, 0.6, 0.8, 1]
  }
}

export const hoverVariant ={
  whileHover: {color: '#a83283', originX: 0, originY: 0, scale: 1.5},
  transition: {type: 'spring', stiffness: 500}
}