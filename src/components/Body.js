import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import About from './About'
import Notification from './Notification'
import Alarms from './Alarms'
import Install from './Install'
import Home from './Home'

const Body = ({title = 'cool title'}) =>
<Router>
<div className="header">
  <Link to='/'><h1 id="title">{title}</h1></Link>
  <div className="nav">
  <ul>
    <li className="nav-link"><Link to='/install'>install</Link></li>
    <li className="nav-link"><Link to='/alarms'>alarms</Link></li>
    <li className="nav-link"><Link to='/notification'>notification</Link></li>
    <li><Link to='/about'>about</Link></li>
  </ul>
</div>

<div id="separator"></div>
<Switch>
  <Route path='/install' component={Install}/>
  <Route path='/about' component={About}/>
  <Route path='/alarms' component={Alarms}/>
  <Route path='/notification' component={Notification}/>
  <Route path='/' component={Home}/>
</Switch>
</div>
</Router>

export default Body
