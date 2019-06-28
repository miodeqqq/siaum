import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import Summary from './Summary.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "summary" component = {Summary} title = "Summary" />
      </Scene>
   </Router>
)
export default Routes