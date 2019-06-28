import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import Summary from './Summary.js'
import AddData from './AddData.js';
import ListPersons from './ListPersons';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "showData" component = {ListPersons} title = "Show persons list" />
         <Scene key = "newData" component = {AddData} title = "Add new data" />
         <Scene key = "summary" component = {Summary} title = "Summary" />
      </Scene>
   </Router>
)
export default Routes