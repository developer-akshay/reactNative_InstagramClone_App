import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import React from 'react'
import { Text, View,Image } from "react-native";
import logo from '../assets/images/logo.png';
import BottomTabNavigator from "./BottomTabNavigator";

// this will create stak navigator which will return a object with navigator and screen
const Stack =createNativeStackNavigator(); // return object with {Navigator,Screen}

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{headerShown:true}}
        >
            {/* we are nesting navigator here  */}
            <Stack.Screen name='Home' component={BottomTabNavigator} options={{headerShown:false}}/>
            {/* we use stack group to pass common propeties to the group other 
            then the left screen it will also recive screenOptions*/}
            {/* <Stack.Group screenOptions={{}}> */}
                {/* stack.screen requires 2 properties  1 name 2 */}
            {/* <Stack.Screen 
            name="Feed" 
            component={HomeScreen}
            //We made custom header for the screen
            options={{headerTitle:HeaderTitle,headerTitleAlign:'center'}}
            /> */}

            {/* we use title option to override the name  */}
            <Stack.Screen 
            name="userProfile" 
            component={ProfileScreen} 
            options={{title: "Profile"}} 
            />
            {/* </Stack.Group> */}
            
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const HeaderTitle = () => {
    return <Image 
    source={logo} 
    resizeMode='contain'
    style={{width:120, height:50}} 
    />;

}

export default Navigation;