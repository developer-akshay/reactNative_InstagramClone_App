// import { StyleSheet, View,SafeAreaView,ScrollView, FlatList } from "react-native";
// import HomeScreen from "./src/screens/HomeScreen";
// import CommentsScreen from "./src/screens/CommentsScreen/CommentsScreen";

// import EditProfileScreen from "./src/screens/EditProfileScreen";
// import PostUploadScreen from "./src/screens/PostUploadScreen";
import Navigation from "./src/navigation";
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

//this navigationContainer is imp and must be at the top it's used to wrap all
// navigators inside it
import { NavigationContainer } from "@react-navigation/native";

          {/* <HomeScreen /> */}        
          {/* <ProfileScreen /> */}
          {/* <EditProfileScreen /> */}
          {/* <PostUploadScreen /> */}
          {/* <CommentsScreen /> */}

const App = () =>{
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  )
}




export default App;