import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from 'react'
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PostUploadScreen from "../screens/PostUploadScreen/PostUploadScreen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from "../theme/colors";
import HomeStackNavigator from "./HomeStackNavigator";

const Tab=createBottomTabNavigator(); 

const BottomTabNavigator = () => {

  return (
    <Tab.Navigator 
    initialRouteName="HomeStack" 
    screenOptions={{
        tabBarShowLabel:false,
        tabBarActiveTintColor:colors.black
        }}
    >
        <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
            headerShown:false,
            tabBarIcon:({color,size}) => (
                <MaterialIcons 
                name= "home-filled"
                size={size}
                color={color} 
                />
            )}}
        />

        <Tab.Screen
        name="Search"
        component={ProfileScreen}
        options={{
            tabBarIcon:({color,size}) => (
                <MaterialIcons 
                name= "search"
                size={size}
                color={color} 
                />
            )}}
        />

        <Tab.Screen
        name="Upload"
        component={PostUploadScreen}
        options={{
            headerShown:false,
            tabBarIcon:({color,size}) => (
                <MaterialCommunityIcons
                name= "plus-circle-outline"
                size={size}
                color={color} 
                />
            )}}
        />

        <Tab.Screen
        name="Notifications"
        component={HomeScreen}
        options={{
            tabBarIcon:({color,size}) => (
                <MaterialCommunityIcons
                name= "heart-outline"
                size={size}
                color={color} 
                />
            )}}
        />  

        <Tab.Screen
        name="MyProfile"
        component={ProfileScreen}
        options={{
            tabBarIcon:({color,size}) => (
                <MaterialCommunityIcons
                name= "account-circle"
                size={size}
                color={color} 
                />
            )}}
        />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator