import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import React from 'react'
import { Text, View,Image } from "react-native";
import BottomTabNavigator from "./BottomTabNavigator";
import CommentsScreen from "../screens/CommentsScreen/CommentsScreen";
import { RootNavigatorParamList } from "./types";

const linking : LinkingOptions<RootNavigatorParamList> = {
  //we are defining the allowed prefixes which will work with the link 
  prefixes:[
    'notjustdev://','https://notjustdev.com','https://*.notjustdev.com'
  ],
  config:{
    //we need to povide this because it will not load back option as it will 
    //directly open the comment screen and not provide back option to go back to home  
    initialRouteName:'Home',
    screens:{
      //here we will take care of link like when or where it should be loaded 
      //depend on the link  basically mapping from navigation structure to the url suffixes
      // we want to handle 
      Comment:'comments', //notjustdev -> comments

      // Nested Navigation of screens

      Home:{
        
        screens:{
          initialRouteName:"Feed",
          HomeStack :{
            screens:{
              userProfile: 'user/:userId'
            }
          }
        }
      }
    }
  }
}

// this will create stak navigator which will return a object with navigator and screen
const Stack =createNativeStackNavigator<RootNavigatorParamList>(); // return object with {Navigator,Screen}

const Navigation = () => {
  return (
    <NavigationContainer linking={linking}>
        <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{headerShown:true}}
        >
            {/* we are nesting navigator here  */}
            <Stack.Screen 
            name='Home' 
            component={BottomTabNavigator} 
            options={{headerShown:false}}
            />
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
            name="Comment" 
            component={CommentsScreen} 
            options={{title: "Comment at post"}} 
            />
            {/* </Stack.Group> */}
            
        </Stack.Navigator>
    </NavigationContainer>
  )
}



export default Navigation;