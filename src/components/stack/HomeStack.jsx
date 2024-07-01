import { View, Text } from 'react-native'
import React from 'react'
import  {createStackNavigator} from '@react-navigation/stack'
import AvatarProfile from '../AvatarProfile';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen
      name= 'HomeStack' component={AvatarProfile} options={{title: 'Instagram'}}
      />
    </Stack.Navigator>
  )
}