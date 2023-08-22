//Importing utility function 
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

//We are providing annotations for rootnavigations like when we are navigating we are 
//passing props so we are defing type of that 
export type RootNavigatorParamList = {
    Home:undefined;
    Comment:{postId : string};
  }


export type BottomTabNavigatorParamList ={
    HomeStack:undefined;
    Search:undefined;
    Upload:undefined;
    Notifications:undefined;
    MyProfile:undefined;
}

export type ProfileStackNavigatorParamList = {
    Profile:undefined;
    'Edit Profile':undefined;
}

export type EditProfileNavigationProp = NativeStackNavigationProp<
    ProfileStackNavigatorParamList,
    'Edit Profile'
>;

export type HomeStackNavigatorParamList = {
    Feed:undefined;
    userProfile:{userId:string}
}


// Now it will contain property specific for our feedscreen
export type FeedNavigationProp = NativeStackNavigationProp<
    //Parent of this feed 
    HomeStackNavigatorParamList,
    //Name of route
    'Feed'
>;