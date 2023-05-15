import { View, Text, StyleSheet, useWindowDimensions, Pressable } from 'react-native'
import React,{useState} from 'react'
import Video from 'react-native-video';
import colors from '../../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IVideoPlayer {
    uri: string;
    paused: boolean;
}

const VideoPlayer = ({uri,paused}:IVideoPlayer) => {
  const {width}=useWindowDimensions();
  const [muted,setMuted]=useState(true)
  debugger
  return (
    <View>
      <Video 
        source={{uri}} 
        style={styles.video} 
        resizeMode='cover'
        repeat 
        muted={muted}
        paused={paused}
      />
      <Pressable onPress={()=>setMuted(v => !v)} style={styles.muteButton}>
        <Ionicons 
          name={muted?'volume-mute':'volume-medium'} 
          size={14} 
          color={colors.white} 
        />
      </Pressable>
    </View>
  )
}

const styles= StyleSheet.create({
  video:{
    width:'100%',
    aspectRatio:1
  },
  muteButton:{
    backgroundColor:colors.black,
    borderRadius:25,
    padding:5,
    position:'absolute',
    bottom:10,
    right:10,
  },
})

export default VideoPlayer