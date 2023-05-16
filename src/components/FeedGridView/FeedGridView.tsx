import { FlatList,Image } from 'react-native'
import React from 'react'
import { IPost } from '../../types/models';
import FeedGriditem from './FeedGriditem';
interface IFeedGridView {
    data:IPost[];
    ListHeaderComponent?:React.ComponentType<any>
}

const FeedGridView = ({data,ListHeaderComponent}:IFeedGridView) => {
  return (
    <FlatList 
    data={data}
    // keyExtractor={item => item.id}
    renderItem={ ({item})=> <FeedGriditem post={item} /> }
    showsVerticalScrollIndicator={false}
    numColumns={3}
    ListHeaderComponent={ListHeaderComponent}
    style={{marginHorizontal: -1, }}
    />
  )
}

export default FeedGridView