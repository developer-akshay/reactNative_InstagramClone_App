import { View, Text,FlatList } from 'react-native'
import React from 'react'
import comments from '../../assets/data/comments.json'
import Comment from '../../components/Comment/comment'

const CommentsScreen = () => {
  return (
    <View>
       <FlatList 
        style={{padding:10}}
        data={comments}
        renderItem={({item})=>  
        <Comment comment={item} includeDetails/>
     }

      />
    </View>
  )
}

export default CommentsScreen