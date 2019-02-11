import React from 'react'

import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Home from './Home'
import Resources from './Resources'
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo'
import JSXRules from '../concepts/JSXRules'
import ClassComponentDemo from '../ClassComponentDemo'
import PropsDemo from '../concepts/PropsDemo'
import LifeCycleCodepen from '../concepts/LifeCycleCodepen'


const Sidebar = () => (

  <div className="sidebar">
    <div className="sidebar-list-styling">
      <ul className="sidebar-list list-unstyled">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rationale">Rationale</Link></li>
        <li><Link to="/functionalcomponent">Functional Component</Link></li>
        <li><Link to="/jsxrules">JSX Rules</Link></li>
        <li><Link to="/classcomponent">Class Component</Link></li>
        <li><Link to="/propsdemo">Props Demo</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/lifecyclediagram">Life Cycle Diagram</Link></li>
        <li><Link to="/timer">Timers</Link></li>
      </ul>
    </div>
  <div className="sidebar-route">
        <Switch>
            <Route exact path="/home"><Home /></Route>
            <Route exact path="/resources"><Resources /></Route>
            <Route exact path="/"><Home/></Route>
            <Route exact path= "/functionalcomponent"><FunctionalComponentDemo /></Route>
            <Route exact path="/jsxrules"><JSXRules/></Route>
            <Route exact path="/classcomponent"><ClassComponentDemo/></Route>
            <Route exact path="/propsdemo"><PropsDemo/></Route>   
            <Route exact path="/lifecyclediagram"><LifeCycleCodepen/></Route>
            <Route exact patch="/timer">TimePiecesApp /></Route>  
        </Switch>
    </div>
  </div>

)

export default Sidebar;
