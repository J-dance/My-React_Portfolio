// can translate
// .. scale
// .. rotate
// .. skew
// in 3d

// ------
// Animation props
// these can be used with useState where animation values can be changed by the user e.g. a slider or mouse position

// animation: can be set to true or false -> this means a button could toggle whether an animation occurs or not using state

// ------

// animate presence: 
// lets us control un-mounting of component
// must import { animatePresence } from framer
// when using this you need an exit: property after animate:

// variants:
// child components inherit parent variants 
// use when and staggerChildren to show list items one after the other

// Keyframes:
//  use an array with the values e.g. x: [0, 20, -20, 40, -40, 0]
// this will be increased oscillations
// transition properties can be used to alter keyframes e.g. transition: { yoyo: 10}
// this makes a something repeat 10 times. yoyo: infinity -> infinite loop

// animation routes: got to switch components in app