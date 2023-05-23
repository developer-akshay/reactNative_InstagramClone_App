import { View, Text, StyleSheet, Pressable } from 'react-native'
import React,{useState,useEffect,useRef} from 'react'
import { Camera } from 'expo-camera'
import { CameraPictureOptions, CameraRecordingOptions, CameraType, FlashMode } from 'expo-camera/build/Camera.types'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import colors from '../../theme/colors';

const flashModes= [
  FlashMode.off,
  FlashMode.on,
  FlashMode.auto,
  FlashMode.torch,
];

const falshModeToIcon = {
  [FlashMode.off]: 'flash-off' ,
  [FlashMode.on] : 'flash-on' , 
  [FlashMode.auto] : 'flash-auto' ,
  [FlashMode.torch] : 'highlight' ,
}

const PostUploadScreen = () => {

  const [hasPermission,setHasPermission] =useState<boolean | null>(null);
  //Camera.constants.Type.back
  const [cameraType,setCameraType]=useState(CameraType.back)
  const [flash,setFlash]=useState(FlashMode.off)
  //TODO : MAKE IT FALSE
  const [isCameraReady,setIsCameraReady]=useState(false) //By default it needed to be false
  const [isRecording,setIsRecording] = useState(false)
  
  const camera=useRef< Camera >(null)

  useEffect(()=>{
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission = await Camera.requestMicrophonePermissionsAsync();
      setHasPermission(
        cameraPermission.status === 'granted' && 
        microphonePermission.status === 'granted')
    }
    getPermission();
  },[]);

  const flipCamera = () =>{
    console.log("cameraType : ",cameraType)
    setCameraType(current => 
      current === CameraType.back?
      CameraType.front:CameraType.back
      )
  };
  
  const flipFlash = () =>{
    console.log('camera flash :',flash)
    const currentIndex = flashModes.indexOf(flash);
    const nextIndex = currentIndex === flashModes.length-1? 0 : currentIndex+1
    setFlash(flashModes[nextIndex]);
  };

  const takePicture = async () =>{
    if(!isCameraReady || !camera.current|| isRecording){
      return
    }

    const options: CameraPictureOptions= {
      quality:0.5,
      base64: false,
      skipProcessing: true,
    };
    const result =await camera.current.takePictureAsync(options);
    console.log('result : ',result)
  }

  const startRecording = async() => {
    if(!isCameraReady || !camera.current || isRecording ){
      return
    }
    
    const options: CameraRecordingOptions = {
      quality: Camera.Constants.VideoQuality['640:480'],
      maxDuration: 60 ,
      maxFileSize: 10 * 1024 * 1024,
      mute: false
    }

    setIsRecording(true);
    try{
      const result = await camera.current.recordAsync(options);
      console.log("video result : ", result)
    }catch(e){
      console.log('error at start recording ',e)
    }
    setIsRecording(false);
    
  }

  const stopRecording = () => {
      if(isRecording){
        camera.current?.stopRecording();
        setIsRecording(false);
      }
  }

  if(hasPermission === null) {
    return <Text>Loading....</Text>
  }

  if(hasPermission === false){
    return <Text>No access to the camera</Text>
  }

  
  return (
    <View style={styles.page}>
      <Camera 
      ref={camera}
      style={styles.camera} 
      type={cameraType} 
      ratio='4:3' 
      flashMode={flash}
      onCameraReady={() => setIsCameraReady(true)}
      />

      <View style={[styles.buttonsContainer,{top:10}]} >
        <MaterialIcons name='close' size={30} color={colors.white}/>
        <Pressable onPress={flipFlash}>
          <MaterialIcons name={falshModeToIcon[flash]} size={30} color={colors.white}/>
        </Pressable>
        <MaterialIcons name='settings' size={30} color={colors.white}/>
      </View>

      <View style={[styles.buttonsContainer,{bottom:10}]} >
        <MaterialIcons name='photo-library' size={30} color={colors.white}/>
        
        {isCameraReady && (
        <Pressable 
        onPress={takePicture}
        onLongPress={startRecording}
        onPressOut={stopRecording}
        >
          <View style={[styles.circle,{backgroundColor:isRecording?colors.accent:colors.white}]} />
        </Pressable>
        )}
        
        <Pressable onPress={flipCamera}>
          <MaterialIcons name='flip-camera-ios' size={30} color={colors.white}/>
        </Pressable>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  page:{
    flex:1,
    justifyContent:'center',
    backgroundColor:colors.black,
  },
  camera:{
    width:'100%',
    aspectRatio:3/4,
  },
  buttonsContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    width:'100%',
    alignItems:'center',
    position:'absolute',

  },
  circle:{
    width:75,
    aspectRatio:1,
    borderRadius:75,
    backgroundColor:colors.white
  },
})

export default PostUploadScreen