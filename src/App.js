import './App.css';
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import { AnimatePresence, animatePresence } from "framer-motion";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";

function App() {
  // whenever the route changes it updates this constant
  const location = useLocation()
  return (
    
    
      <AnimatePresence exitBeforeEnter>
        {/* provide the switch with location props. This lets us use exit in our compenents*/}
        <Switch location={location} key={location.key}>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    
   
  );
}

export default App;
