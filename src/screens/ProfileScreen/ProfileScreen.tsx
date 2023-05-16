import {Image, FlatList } from 'react-native'
import React from 'react'
import user from '../../assets/data/user.json'
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView/FeedGridView';


const ProfileScreen = () => {
    return (
        <FeedGridView 
        data={user.posts}
        ListHeaderComponent={ProfileHeader}
        />
    //     <FlatList 
    // data={user.posts}
    // // keyExtractor={item => item.id}
    // renderItem={
    //   ({item})=> 
    //   <Image 
    //   source={{uri:item.image || item.images[0] }} 
    // //   agar last vali row meh 2 imgs bachi hogi toh unka size bada ho jayega kyu 
    // //   ki style flex ha toh usko prevent karne ka liye hum flexWidth use karte ha 
    //   style={{flex:1, aspectRatio:1 , margin:1 ,maxWidth:'33%'}} />
    // }
    // showsVerticalScrollIndicator={false}
    // numColumns={3}
    // ListHeaderComponent={ProfileHeader}
    // />
    )
}

export default ProfileScreen