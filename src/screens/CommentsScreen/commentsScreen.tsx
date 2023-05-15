import { View, Text,FlatList } from 'react-native'
import React from 'react'
import comments from '../../assets/data/comments.json'
import Comment from '../../components/Comment/comment'
import Input from './input'

const CommentsScreen = () => {
  return (
    <View style={{flex:1}}>
       <FlatList 
        style={{padding:10}}
        data={comments}
        renderItem={({item})=>  
        <Comment comment={item} includeDetails/>
     }

      />
      <Input />
    </View>
  )
}

export default CommentsScreen