import React from 'react';
import { /*StyleSheet*/ Text, View,Image } from 'react-native';
import {createAppContainer,createSwitchNavigator}from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WelcomeScreen from './Screens/WelcomeScreen'
import { AppTabNavigator } from './components/AppTabNavigator'

export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>
  );
}
}

    const SwitchNavigator = createSwitchNavigator({
      WelcomeScreen: {screen: WelcomeScreen},
      BottomTab: {screen: AppTabNavigator},
    })
    const AppContainer = createAppContainer(SwitchNavigator);    
    
    
    