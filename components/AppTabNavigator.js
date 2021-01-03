import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FunScreen from '../Screens/FunScreen';
import CalmScreen from '../Screens/CalmScreen'


export const AppTabNavigator = createBottomTabNavigator({
  Calm : {
    screen: CalmScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/Writelogo.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Calm",
    }
  },
  Fun: {
    screen: FunScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/Readlogo.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Fun",
    }
  }
});
