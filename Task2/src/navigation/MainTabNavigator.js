import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import WeeklyScreen from '../screens/WeeklyScreen';

import Colors from '../constants/Colors';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Daily',
  tabBarIcon: ({ focused }) => (
    <MaterialIcons
      name={'today'}
      size={35}
      style={{ marginBottom: -3 }}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: WeeklyScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Weekly',
  tabBarIcon: ({ focused }) => (
    <Entypo
      name={'forward'}
      size={35}
      style={{ marginBottom: -3 }}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
});
