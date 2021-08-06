import {useEffect} from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import gsap from 'gsap'


function App() {
  useEffect(()=>{
    const tl = gsap.timeline();

    tl.from(".images__small", 1.4, {
      opacity: 0,
      y:100,
      delay: 1,
      ease: "power4.out",
      stagger: 0.3

    }).from("images__big", 1.4, {
      opacity: 0,
      y: -100,
      delay: 1,
      ease: "power4.out",
      stagger: 0.3
    })
  }, {})
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
