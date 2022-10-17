import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();


export const TabView = () => {
    return(
        <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="dashboard" component={dashboard} />
      <Stack.Screen name="detail" component={detail} />
    </Stack.Navigator>
    )
}