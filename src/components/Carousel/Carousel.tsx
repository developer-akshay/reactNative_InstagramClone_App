import { View, Image, FlatList,useWindowDimensions,ViewabilityConfig,ViewToken } from 'react-native'
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
    const viewabilityConfig:  ViewabilityConfig= {
        itemVisiblePercentThreshold:40
    }
    //If you don't know the type of something just navigate to that component like click on flatlist and search for onViewableItemsChanged
    // and check the expected return type of it 
    const onViewableItemsChanged = useRef((data : {viewableItems: Array<ViewToken>})=>{
        console.log(data)
        console.log('Testing',data.viewableItems[0].index)
        if(data.viewableItems.length>=0 && data.viewableItems.length<=1){
            console.log('viewableItems ',data.viewableItems,' & viewableItems index : ') 
        // Here we are assigning 0 BY DEFAULT AS SOMETIMES IT COMES NULL BELOW 
        setActiveImageIndex(data.viewableItems[0].index ||0)
        console.log('changed to : ',activeImageIndex)
    
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