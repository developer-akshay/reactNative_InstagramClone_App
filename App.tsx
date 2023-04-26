import { StyleSheet, View,SafeAreaView,ScrollView, FlatList } from "react-native";
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
      {/* if the array is of short length then only we use map otherwise we will have different approach Flatlist */}
    {/* {posts.map(postArr=>(
      <FeedPost key={postArr.id} post={postArr}/>
    ))}    */}
    <FlatList 
    data={posts}
    
    // incase we don't have id or key element at the data so we need to use keyextracter and mention the key here
    // Here we are creating a unique key by concatinating post-
    // keyExtractor={(item)=>{
    //   (`post-${item.createdAt}`)
    // }}

    // if we don't do destructring here then you have to write extra word at renderitems
    // renderItem={(data)=> <FeedPost post={DataView.item}/> }
    renderItem={({item})=> <FeedPost post={item}/> }
    showsVerticalScrollIndicator={false}
    />


    </ScrollView>
    </SafeAreaView>

    {/* Here we are using flatlist inside scrollview so it will create problem like flatlist can't use the  window function like screenlength 
    so to resolve it we use ListHeaderComponent AND ListFooterComponent
      For ref
      <FlatList
      ListHeaderComponent={
      <>
        <CoverPhoto src={images[0]} />
        <Title>Welcome</Title>
        <Text>Take a look at the list of recipes below:</Text>
      </>}
      data={recipes}
      renderItem={renderItem}
      ListFooterComponent={
        <Footer/>
      }/> */}


  </View>
}

const styles= StyleSheet.create({
  app:{
    flex:1,
  },
    
});


export default App;