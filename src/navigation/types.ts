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

export type HomeStackNavigatorParamList = {
    Feed:undefined;
    userProfile:{userId:string}
}
