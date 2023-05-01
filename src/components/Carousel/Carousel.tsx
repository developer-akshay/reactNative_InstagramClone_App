import { View, Text, Image, FlatList,useWindowDimensions } from 'react-native'
import React from 'react'

interface ICarousel {
    images: string[];
}


const Carousel = ({images}:ICarousel) => {
    const {width}=useWindowDimensions()
  return (
    <View>
      <FlatList data={images}
      renderItem={({item})=> <Image source= {{uri:item}} style={{width:width,aspectRatio:1}} />}
      horizontal
      pagingEnabled
      />
      <View>
        
      </View>
    </View>
  )
}

export default Carousel