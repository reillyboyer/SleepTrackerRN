import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen.js';
import JournalScreen from '../Screens/JournalScreen.js';
import ToolkitScreen from '../Screens/ToolKitScreen.js';
import SettingsScreen from '../Screens/SettingsScreen.js';

const Tab = createBottomTabNavigator();

function BottomTabNavigator () {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tool Kit" component={ToolkitScreen} />
      <Tab.Screen name="Journal" component={JournalScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}
   

export default BottomTabNavigator;


