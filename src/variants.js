import React, { useState } from "react";

// for responsive anaimation -> factor scales the animation values and depends on screen width
let factor = 1;
const screenWidth = window.innerWidth;

// on page load
if (screenWidth < 480) {
  factor = 0.6;
} else if (screenWidth < 768) {
  factor = 0.75
} else if (window.innerWidth < 1024) {
  factor = 0.8
}

// On page resize (chrom dev tool)
const handleResize = () => {
  if (window.innerWidth < 480) {
    factor = 0.6;
  } else if (window.innerWidth < 768) {
    factor = 0.75
  } else if (window.innerWidth < 1024) {
    factor = 0.8
  }
}
window.addEventListener('resize', handleResize);

// intro/landing page animation
const introWidth = [100, 100, 100, 150, 150, 70, 70, 120, 120, 160, 160, 190, 190];
const introHeight= [100, 100, 100, 70, 70, 70, 70, 200, 200, 50, 50, 50, 50];
const introX = [0, -200, -200, 150, 150, 150, 150, -180, -180, 0, 0, 30, 0];
const introY = [0, -200, -200, -200, -200, 0, 0, 0, 0, 0, 0, 0, 0];

const introWidthResponsive = introWidth.map(width => width * factor);
const introHeightResponsive = introHeight.map(height => height * factor);
const introXResponsive = introX.map(x => x * factor * 0.9);
const introYResponsive = introY.map(y => y * factor);

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
    width: introWidthResponsive,
    height: introHeightResponsive,
    scale: [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    x: introXResponsive,
    y: introYResponsive,
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
    x: [0, 0, 0, -39*factor, -39*factor, -100],
    y: [80, 0, 0, -50*factor, -50*factor, -50*factor]
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
    x: [0, 0, 0, -100],
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
    x: [0, 0, 0, -100],
    y: [50*factor, 50*factor, 50*factor, 40*factor]
  }
}

export const softwareVariant = {
  hidden: {
    opacity: 0,
    x: 50,
    y: 0
  },
  visible: {
    opacity: [0, 1, 1, 0],
    x: [50, 0, 0, 0],
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