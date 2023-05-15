import { View, Text,Image, Pressable, TextInput,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import colors from '../../theme/colors'
import fonts from '../../theme/fonts'

const input = () => {

    const [newComment,setNewComment]= useState('')
    const onPost = () =>{
        console.warn('Posting comment : ',newComment);
        //will send data to backend here
        setNewComment('')
    }
    
    
  return (
    <View style={styles.root}>
      <Image 
      source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg'}}
      style={styles.image}
      />
      <TextInput 
      placeholder='Write your comment ...' 
      style={styles.input}
      value={newComment}
      onChangeText={(newText)=>setNewComment(newText)}
      multiline
      />

    <Text onPress={onPost} style={styles.button}>POST</Text>
    
    </View>
  )
}

const styles = StyleSheet.create({
    root:{
        flexDirection:'row',
        padding:5,
        borderTopWidth:1,
        borderColor:colors.border,
        alignItems:'flex-end'
    },
    image:{
        width:40,
        borderRadius:20,
        aspectRatio:1,
    },
    input:{
        borderColor:colors.border,
        borderWidth:1,
        borderRadius:25,
        padding:5,
        paddingVertical:8,
        flex:1,
        margin:5,
        paddingRight:50,
    },
    button:{
        position:'absolute',
        right:18,
        bottom:22,
        fontSize: fonts.size.s,
        fontWeight:fonts.weight.full,
        color:colors.primary
    },
})

export default input