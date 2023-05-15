import { FlatList, ViewToken, ViewabilityConfig} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import posts from '../../assets/data/posts.json'
import FeedPost from '../../components/FeedPost/FeedPost'



const HomeScreen = () => {

  const [activePostId,setActivePostId]=useState <string|null> (null);


  const viewabilityConfig:  ViewabilityConfig= {
    // waitForInteraction: true,
    itemVisiblePercentThreshold:40
  }
  const onViewableItemsChanged = useRef(
    (data : {viewableItems: Array<ViewToken>})=>{
      debugger
    if(data.viewableItems.length > 0 ) {
      
      setActivePostId(data.viewableItems[0].item.id);
      console.log('activePostId : ',activePostId)
      
    }
  })
  console.log(onViewableItemsChanged.current, 'curent');
  return (
    //  if the array is of short length then only we use map otherwise we will have different approach Flatlist
    //  {posts.map(postArr=>(
    //   <FeedPost key={postArr.id} post={postArr}/>
    // ))}    
    
    <FlatList 
    data={posts}
    onViewableItemsChanged={onViewableItemsChanged.current}
    viewabilityConfig={viewabilityConfig}
    // incase we don't have id or key element at the data so we need to use keyextracter and mention the key here
    // Here we are creating a unique key by concatinating post-
    // keyExtractor={(item)=>{
    //   (`post-${item.createdAt}`)
    // }}

    // if we don't do destructring here then you have to write extra word at renderitems
    // renderItem={(data)=> <FeedPost post={DataView.item}/> }
    keyExtractor={item => item.id}
    renderItem={
      ({item})=> (
        console.log('activePostId : ',activePostId,' item.id : ',item.id),
      <FeedPost post={item} isVisible={activePostId === item.id}/> 
    )}
    showsVerticalScrollIndicator={false}
    
    />
  )
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
}

export default HomeScreen