import {ReactNode} from 'react'
import {Text, Pressable } from 'react-native'


interface IDoublePressable {
    onDoublePress?: () => void;
    children :ReactNode;
}

// const DoublePressable = ({onDoublePress} : IDoublePressable) => {
// Here if nothing is passed to onDoublePress then a empty function is passed on 
    const DoublePressable = ({
        onDoublePress = () =>{},
        children,
    } : IDoublePressable) => {
        //Function for liking post by double clicking at image
        let lastTap=0;
        const handleDoublePress = () =>{
          const now=Date.now()
          if(now-lastTap<300){
            onDoublePress()
          }
          lastTap=now;
        }
  return (
    <Pressable onPress={handleDoublePress}>
      {children}
    </Pressable>
  )
}

export default DoublePressable