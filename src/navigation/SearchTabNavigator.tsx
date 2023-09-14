import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CommentsScreen from "../screens/CommentsScreen/CommentsScreen";
import UserSearchScreen from "../screens/UserSearchScreen.tsx/UserSearchScreen";
import {useSafeAreaInsets,SafeAreaView} from 'react-native-safe-area-context'
import { SearchTabNavigatorParamList } from "./types";
import colors from "../theme/colors";


const Tab = createMaterialTopTabNavigator<SearchTabNavigatorParamList>();


const SearchTabNavigator = () => {

    const insets = useSafeAreaInsets();

  return (
   
        <Tab.Navigator screenOptions={{
            tabBarStyle:{paddingTop:insets.top},
            tabBarIndicatorStyle:{backgroundColor:colors.primary}
            }}>
            <Tab.Screen name="Users" component={UserSearchScreen} />
            <Tab.Screen name="Posts" component={CommentsScreen} />
        </Tab.Navigator>
   
  )
}

export default SearchTabNavigator