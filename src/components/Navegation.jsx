import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AvatarProfile from './AvatarProfile';
import Feed from './Feed';
import HomeStack from './stack/HomeStack';

const Tab = createBottomTabNavigator();

export default function Navegation() {
  return (
    <NavigationContainer>
        <Tab.Navigator initialRouteName='Perfil'>
            <Tab.Screen name='Instagram' component={AvatarProfile}/>
            <Tab.Screen name='Perfil' component={HomeStack}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}