import { View, Image, FlatList,useWindowDimensions } from 'react-native'
import {useState,useRef} from 'react'
import colors from '../../theme/colors';
import DoublePressable from '../DoublePressable';

interface ICarousel {
    images: string[];
    onDoublePress?:()=>void;
}


const Carousel = ({images,onDoublePress=()=>{}}:ICarousel) => {

    const {width}=useWindowDimensions()
    const [activeImageIndex,setActiveImageIndex]=useState(0);
    const viewabilityConfig = {
        itemVisiblePercentThreshold:40
    }
    const onViewableItemsChanged = useRef((data)=>{
        console.log(data)
        console.log('Testing',data.viewableItems[0].index)
        if(data.viewableItems.length>=0 && data.viewableItems.length<=1){
            console.log('viewableItems ',data.viewableItems,' & viewableItems index : ')            
        setActiveImageIndex(data.viewableItems[0].index )
        }
        else{
            console.log('else part : ',data)
        }
    })

    return (
    <View>
      <FlatList 
      data={images}
      renderItem={({item})=>( 
        <DoublePressable onDoublePress={onDoublePress}>
            <Image source= {{uri:item}} style={{width,aspectRatio:1}} />
        </DoublePressable>
      )}
      horizontal
      pagingEnabled
      onViewableItemsChanged ={onViewableItemsChanged.current}  
      viewabilityConfig={viewabilityConfig}
      />
      <View 
      style={{
        flexDirection:'row',
        width:'100%',
        bottom:0,
        justifyContent:'center',
        position:'absolute'}}>
            {/* underscore is image */}
        {images.map((_,index)=>(
            <View
            key={index} 
            style={{
                width:10,
                aspectRatio:1,
                borderRadius:5,
                backgroundColor:activeImageIndex===index? colors.primary:colors.white,
                margin:5,
                marginHorizontal:5
            }}
            />
        ))
            }
        
      </View>
    </View>
  )
}

export default Carousel