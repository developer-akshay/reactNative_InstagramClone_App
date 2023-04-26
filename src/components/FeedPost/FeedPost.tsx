import { StyleSheet, Text, View, Image, ScrollView,SafeAreaView } from "react-native";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import styles from './FeedPostStyles'
import Comment from "../Comment";
import comment from "../Comment/comment";
import { Component } from "react";
import { IPost } from "../../types/models";

// if you want to give type to props at same page then below is the way, Here we will provide types at one file which can be used by multiple Component
// interface IFeedPost {
//     post:{
//         id:string;
//         images:string;
//         description: string;
//         user:{
//             username:string;
//         }
//     }
// }

//Here we are importing type from one generic page
interface IFeedPost {
  post:IPost
}

// const FeedPost = (props) =>{
// We can destruct props directly here if we have only props argument instead inside the feedpost functional component    
const FeedPost = ({post}: IFeedPost) =>{
    console.log('props',post);
    

  return (
  
    <View style={styles.post}>
      
      {/*Header */}

        <View style={styles.header}>
          {/* avatar */}
          <Image
          source={{
            uri: post.user.image
          }}
          style={styles.userAvatar} 
          />
          
          {/* Name */}
          <Text style={styles.userName}>{post.user.username}</Text>
          
          {/* ḍots option feature */}
          <Entypo name='dots-three-horizontal' size={16} style={styles.threeDots} />
        </View>

      {/*content */}
        
          <Image 
          source={{
            uri: post.image
          }}
          style={styles.image}
          />
      {/*Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
            <AntDesign name={'hearto'} size={24} style={styles.icon} color={colors.black}/>
            <Ionicons name='chatbubble-outline' size={24} style={styles.icon} color={colors.black}/>
            <Feather name='send' size={24} style={styles.icon} color={colors.black}/>

            <Feather name='bookmark' size={24} style={{marginLeft:'auto'}} color={colors.black}/>
        </View>

          {/* Likes */}
        <Text style={styles.text}>
          Liked by{' '} 
          <Text style={styles.bold}>{post.comments[0].user.username}{' '}</Text>
           and{' '}
           <Text style={styles.bold}>{post.nofLikes} others.</Text>
        </Text>

        {/* Post description */}
        <Text  style={styles.text}>
          <Text style={styles.bold}>{post.user.username}</Text>
          {' '}{post.description}
        </Text>
        {/* comment section */}
        <Text style={styles.text}>View all {post.nofComments} comments</Text>
        {post.comments.map(comment=>(
            <Comment key={comment.id} comment={comment}/>
        ))}
        

          {/* Posted date */}
        <Text style={styles.text}>{post.createdAt}</Text>
      </View>     
    </View>
   
  );
}




export default FeedPost;