import { View, Text,Image } from 'react-native'
import React from 'react'
import { IPost } from '../../types/models'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import colors from '../../theme/colors'

// this is the example of inline interface 
const FeedGriditem = ({post}:{post:IPost}) => {
  return (
    <View style={{flex:1, aspectRatio:1 , padding:1 ,maxWidth:'33.33%'}}>
        <Image 
        source={{uri:post.image || post.images[0] }} 
        //   agar last vali row meh 2 imgs bachi hogi toh unka size bada ho jayega kyu 
        //   ki style flex ha toh usko prevent karne ka liye hum flexWidth use karte ha 
        style={{flex:1}}
        />
        {
            post.images && (
                <MaterialIcons 
                name='collections' 
                size={16} 
                color={colors.white} 
                style={{position:'absolute',top:5,right:5}}
                />
            )
        }
    </View>
  )
}

export default FeedGriditem