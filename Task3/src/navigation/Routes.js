import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from '../scenes/Home.js'
import HamburgerScreen from '../scenes/HamburgerScreen.js'
import DemonScreen from '../scenes/DemonScreen.js'
import MjolnirScreen from '../scenes/MjolnirScreen.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "hamburger" component = {HamburgerScreen} title = "Hamburger" />
         <Scene key = "demon" component = {DemonScreen} title = "Demon" />
         <Scene key = "mjolnir" component = {MjolnirScreen} title = "Mjolnir" />
      </Scene>
   </Router>
)
export default Routes