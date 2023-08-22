import {useState} from 'react';
import {Text, View, Image, Pressable } from "react-native";
import colors from "../../theme/colors";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import styles from './FeedPostStyles'
import Comment from "../Comment";
import { IPost } from "../../types/models";
import DoublePressable from '../DoublePressable';
import Carousel from '../Carousel';
import VideoPlayer from '../VideoPlayer';
//Instead of getting props from homescreen and sending that props.naigation
// at feedpost like post and all we will use HOOKS for that we will use useNavigation
import { useNavigation } from '@react-navigation/native';
import {FeedNavigationProp} from '../../navigation/types';


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
  isVisible: boolean;
}

// const FeedPost = (props) =>{
// We can destruct props directly here if we have only props argument instead inside the feedpost functional component    
const FeedPost = ({post,isVisible}: IFeedPost) =>{
     //it will return array of two value bydefault we have given false so it will be 0
    // const state =useState(false)
    // const isDescriptionExpanded =state[0]
    // isDescriptionExpanded=true  This is wrong way to change values

    // WE SHOULD USE SETTER function to change state of variables like this
    const [isDescriptionExpanded,setIsDescriptionExpanded] = useState(false);
    const [isLiked,setIsLiked] = useState(false);
    const navigation = useNavigation<FeedNavigationProp>();

    const toggleDescriptionExpanded = () =>{
      //It's WRONG WAY
      // to update state because if user clicks multiple times it will override the value at state and will
      // not remember the previous state 

      // setIsDescriptionExpanded(!isDescriptionExpanded);

      //CORRECT WAY
      // By this way it will change state based on previous state, so if user clicks multiple times it will function properly

      //We can do it like this also 
      // setIsDescriptionExpanded((exsitingValue)=>{ 
      //   return !exsitingValue;
      // })

      //This will work same as above
      setIsDescriptionExpanded(v=>!v)
    }
    const toggleLike = () => {
      setIsLiked(v=>!v)
      console.log('clicked');
    } 

    //Function for liking post by double clicking at image
    let lastTap=0;

    const handleDoublePress = () =>{
      const now=Date.now()
      if(now-lastTap<300){
        toggleLike()
      }
      lastTap=now;
    }

    const navigateToUser = () =>{
      navigation.navigate('userProfile', {userId:post.user.id})
    }

    const navigateToComments = () =>{
      navigation.navigate('Comment',{postId:post.id})
    }

    let content=null;
    if(post.image){
      content=(
        <DoublePressable onDoublePress={toggleLike}>
          <Image 
          source={{
            uri: post.image
          }}
          style={styles.image}
          />
        </DoublePressable>)
    }else if(post.images){
      content=(<Carousel images={post.images} onDoublePress= {toggleLike}     />)
    }else if(post.video){
      content=(
        <DoublePressable onDoublePress={toggleLike}>
          <VideoPlayer uri={post.video} paused={!isVisible} />
        </DoublePressable>
       )
    }

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
          <Text style={styles.userName} onPress={navigateToUser}>{post.user.username}</Text>
          
          {/* ḍots option feature */}
          <Entypo name='dots-three-horizontal' size={16} style={styles.threeDots} />
        </View>

      {/*content */}
        {/* <Pressable onPress={handleDoublePress}> */}
        {/* Here to pass everything between our DoublePressable component is through ReactNode children property which can 
        be passed to our custom component at props  */}
        
          {content}
          
        {/* </Pressable> */}
      {/*Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            <AntDesign 
            name={isLiked?'heart':'hearto'} 
            size={24} style={styles.icon} 
            color={isLiked? colors.red:colors.black}
            />
          </Pressable>
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
        <Text  style={styles.text} numberOfLines={isDescriptionExpanded ? 0 :3}>
          <Text style={styles.bold}>{post.user.username}</Text>
          {' '}{post.description}
        </Text>
        <Text style={styles.text} onPress={toggleDescriptionExpanded}>{isDescriptionExpanded?'Show less':'Show more'}</Text>
        {/* comment section */}
        <Text onPress={navigateToComments} style={styles.text}>View all {post.nofComments} comments</Text>
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