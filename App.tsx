import { StyleSheet, View,SafeAreaView,ScrollView } from "react-native";
import FeedPost from "./src/components/FeedPost";
import posts from './src/assets/data/posts.json'


// const post={
//   "id": "1",
//   "createdAt": "24 April, 2023",
//   "images": "https://c0.wallpaperflare.com/preview/994/314/324/stones-on-hilltop-during-daytime.jpg",
//   "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus unde blanditiis. Eos fugiat dolorem ea fugit aut sapiente corrupti autem dolores deleniti architecto, omnis, amet unde dignissimos quam minima?",
//   "user": {
//     "image": "https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
//     "username": "Akshay__5073"
//   },
//   "nofComments": 11,
//   "nofLikes": 34,
//   "comments": [
//     {
//       "id": "1",
//       "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. H",
//       "user": {
//         "username": "faded_void"
//       }
//     },
//     {
//       "id": "2",
//       "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. H",
//       "user": {
//         "username": "Akshay__5073_travel"
//       }
//     }
//   ]
// }


const App = () =>{

  
  debugger
  return <View style={styles.app}>
    <SafeAreaView>
    <ScrollView>
      {/* if the array is of short length then only we use map otherwise we will have different approach */}
    {posts.map(postArr=>(
      <FeedPost key={postArr.id} post={postArr}/>
    ))}   

    </ScrollView>
    </SafeAreaView>
  </View>
}

const styles= StyleSheet.create({
  app:{
    flex:1,
  },
    
});


export default App;