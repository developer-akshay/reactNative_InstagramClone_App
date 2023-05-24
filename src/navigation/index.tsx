import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import React from 'react'

const Navigation = () => {
  return (
    <NavigationContainer>
        <HomeScreen />
    </NavigationContainer>
  )
}

export default Navigation;