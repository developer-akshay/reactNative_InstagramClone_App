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

  export default ProfileHeader