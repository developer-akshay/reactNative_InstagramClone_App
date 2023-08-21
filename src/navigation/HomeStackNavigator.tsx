import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Image } from "react-native";
import logo from '../assets/images/logo.png';
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { HomeStackNavigatorParamList } from "./types";

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen 
            name="Feed" 
            component={HomeScreen} 
            options={{headerTitle:HeaderTitle, headerTitleAlign:'center'}}
            />
            <Stack.Screen 
            name="userProfile" 
            component={ProfileScreen} 
            options={{title: "Profile"}} 
            />
        </Stack.Navigator>
    );
}

const HeaderTitle = () => {
    return <Image 
    source={logo} 
    resizeMode='contain'
    style={{width:120, height:50}} 
    />;

}
export default HomeStackNavigator