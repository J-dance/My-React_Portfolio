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
    width: [100, 100, 100, 150, 150, 70, 70, 120, 120, 120, 120, 150, 150],
    height: [100, 100, 100, 70, 70, 70, 70, 200, 200, 50, 50, 50, 50],
    scale: [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    x: [0, -200, -200, 150, 150, 150, 150, -200, -200, 0, 0, 30, 0],
    y: [0, -200, -200, -200, -200, 0, 0, 0, 0, 0, 0, 0, 0],
    borderRadius: ["50%", "50%", "50%", "30px", "30px", "50px", "50%", "30px", "30px", "30px", "30px", "30px", "30px"]
  }
  
}

export const hiVariant = {
  hidden: {
    opacity: 1,
    x: -50,
    y: -50
  },
  visible: {
    opacity: [1, 1, 1, 0],
    x: [-50, 0, 0, -100],
    y: [-50, 0, 0, 0]
  }
}

export const nameVariant = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 0
  },
  visible: {
    opacity: [0, 1, 1, 0],
    x: [200, 0, 0, 0],
    y: [0, 0, 0, -100]
  }
}

export const aVariant = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 80
  },
  visible: {
    opacity: [0, 1, 1, 1, 0],
    x: [0, 0, 0, -25, -25, -100],
    y: [80, 0, 0, -50, -50, -50]
  }
}

export const bristolVariant = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 0
  },
  visible: {
    opacity: [0, 1, 1, 0],
    x: [0, 0, 0, 0],
    y: [0, 0, 0, 0]
  }
}

export const basedVariant = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 0
  },
  visible: {
    opacity: [0, 1, 1, 0],
    x: [0, 0, 0, 0],
    y: [0, 0, 0, 0]
  }
}

export const softwareVariant = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 0
  },
  visible: {
    opacity: [0, 1, 1, 0],
    x: [0, 0, 0, 0],
    y: [0, 0, 0, 0]
  }
}

export const developerVariant = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 0
  },
  visible: {
    opacity: [0, 1, 1, 1],
    x: [0, 0, 0, 0],
    y: [0, 0, 0, 0]
  }
}

export const enterVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
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