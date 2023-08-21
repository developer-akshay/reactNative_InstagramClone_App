import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Image } from "react-native";
import logo from '../assets/images/logo.png';
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen/EditProfileScreen";

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen 
            name="Profile" 
            component={ProfileScreen} 
            
            />
            <Stack.Screen 
            name="Edit Profile" 
            component={EditProfileScreen} 
            />
        </Stack.Navigator>
    );
}

export default ProfileStackNavigator