import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import user from '../../assets/data/user.json'
import styles from './styles';
import Button from '../../components/Button/Button';

const ProfileHeader = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        {/* Profile image */}
        <Image source={{uri:user.image}} style={styles.avatar} />

        {/* Post follower and following no */}
        <View style={styles.numberContainer}>
            <Text style={styles.numberText}>98</Text>
            <Text >Posts</Text>
        </View>

        <View style={styles.numberContainer}>
            <Text style={styles.numberText}>98</Text>
            <Text >Followers</Text>
        </View>

        <View style={styles.numberContainer}>
            <Text style={styles.numberText}>98</Text>
            <Text >Following</Text>
        </View>
        
      </View>

    {/* Profile Name and profile description */}
      <Text style={styles.name} >{user.name}</Text>
      <Text  >{user.bio}</Text>

    {/* Edit profile and share profile */}
    <View style={{flexDirection:'row'}}>
      <Button text={'Edit Profile'} onPress={() => console.warn('on Edit Profile') }/>
      <Button text={'Share Profile'} onPress={() => console.warn('on Share Profile') }/>
    </View>

    {/* Grid view of posts */}
    

    </View>
  )
}

const ProfileScreen = () => {
    return (
        <FlatList 
    data={user.posts}
    // keyExtractor={item => item.id}
    renderItem={
      ({item})=> 
      <Image 
      source={{uri:item.image || item.images[0] }} 
    //   agar last vali row meh 2 imgs bachi hogi toh unka size bada ho jayega kyu 
    //   ki style flex ha toh usko prevent karne ka liye hum flexWidth use karte ha 
      style={{flex:1, aspectRatio:1 , margin:1 ,maxWidth:'33%'}} />
    }
    showsVerticalScrollIndicator={false}
    numColumns={3}
    ListHeaderComponent={ProfileHeader}
    />
    )
}

export default ProfileScreen