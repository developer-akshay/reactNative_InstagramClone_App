import { View, Text,StyleSheet,Image, TextInput } from 'react-native'
import React,{useState} from 'react'
import { useForm , Controller, Control} from 'react-hook-form'
import user from '../../assets/data/user.json'
import colors from '../../theme/colors'
import fonts from '../../theme/fonts'
import { IUser } from '../../types/models'
import { launchImageLibrary } from 'react-native-image-picker'

// To Avoid error "circular references itself in mapped type" we are making different 
// type similar to IUser but not including IPost as IUser type is also used at IPOST

// There are two ways to do it 

// 1. this is the first way where we directly create new type 

// type IEditableUser ={
//     username: string;
//     name?: string;
//     bio?: string;
//     website?: string;
//   }

// 2.suppose if one of ur team member changes bio from optional to mandatory at one 
// part and forgot to mention it at above way so there's a PICK property provided at ts
// so that you can pick only those values from existing interface

type IEditableUserField = 'username' | 'name' | 'website' | 'bio';
type IEditableUser =Pick<IUser, IEditableUserField >
//You can also do sdirectly like this
// type IEditableUser =Pick<IUser, 'username' | 'name' | 'website' | 'bio' >

const URL_REGEX=
/^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?\/?$/gm;

 
interface ICustomInput {
    // we need to specify here also the type of control so that control which is 
    // performing the binding between feild and form hook knows the type
    control:Control<IEditableUser,object>;
    label: string;
    name:IEditableUserField; 
    multiline?: boolean;
    rules?:object;
}

const CustomInput =
({
    control,
    label,
    name,
    multiline= false,
    rules={}
}:ICustomInput) => (
    // 3.Here we have to wrapp the textinput with the controller hook form so 
    // that we can use function with textinput  
    <Controller 
        control={control} // type
        name={name} //name of the field we are rendering rn
        //Here we gonna put our custom input inside render function to render diff fields
        rules={rules}
        render = {({field: {onChange,value,onBlur}, fieldState: {error} }) =>{
            
            return (
                <View style={styles.inputContainer} >
                    <Text style={styles.label}>{label}</Text>
                    <View style={{flex:1}}>
                        <TextInput
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        style={[
                            styles.input,
                            {borderColor:error?colors.error:colors.border}
                        ]} 
                        placeholder='Hello' 
                        multiline={multiline}
                        />
                        {error && 
                        <Text style={{color:colors.red}}>{error.message || 'Error'}</Text>
                        }
                    </View>
                    
                </View>
            )
        } 
    }
    />  
)

const EditProfileScreen = () => {

    const [selectedPhoto,setSelectedPhoto]=useState<null | Asset>(null);
//1. control field :
//will help use to bind one input to a value that which is gonna be managed by useForm
    // Here it's expecting a type for useForm data after this we need to provide 
    // type for control also 
    //To get error we can distructure formState here or 
    // we can directly  use fieldState at render function
    const {
        control,
        handleSubmit, 
        formState:{errors}
    } = useForm<IEditableUser>({
        defaultValues:{
            name: user.name,
            username:user.username,
            website:user.website,
            bio:user.bio,

        }
    });

    const onSubmit = (data:IEditableUser) =>{
        console.log('data',data)
    }

    const onChangePhoto = () =>{
        launchImageLibrary(
            {mediaType:'photo'},
            ({didCancel,errorCode,errorMessage,assets})=>{
            if(!didCancel && !errorCode && assets && assets.length>0){
                setSelectedPhoto(assets[0]);
            }
        })
    }

    console.log('Errors :',errors)

  return (
    <View style={styles.page}>
        <Image source={{ uri :  selectedPhoto?.uri || user.image}} style={styles.avatar} />
        <Text 
        onPress={onChangePhoto}
        style={styles.textButton}>Change Profile Photo</Text>
        <CustomInput 
        name={'name'} 
        label={'Name'} 
        control={control} 
        // rules={{required:true}} 
        // Instead of above we can provide custom error msg like this
        rules={{required:'Name is required'}} 
        />
        <CustomInput 
        name={'username'} 
        label={'Username'} 
        control={control} 
        rules={{required:'Username is required', minLength: {value:3, message:'Username should be more then 3 character'} }} 
        />
        <CustomInput 
        name={'website'} 
        label={'Website'} 
        control={control} 
        // We need to add regex for it here 
        rules={{
            // required:'Website is required',
            pattern: {value:URL_REGEX , message:'Url format is not correct'},
        }} 
        />
        <CustomInput 
        name={'bio'} 
        label={'Bio'} 
        multiline 
        control={control} 
        rules={{
            required:'Bio is required',
            maxLength:{value:200,message:'Bio should be less then 200 character'}}} 
        />
{/* 2. Here we are wrapping submit so that it will validate the fields and give us error 
if any after that it will call the onSubmit function */}
        <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>
        Submit
        </Text>

    </View>
  )
}

const styles = StyleSheet.create({
    page:{
        alignItems:'center',
        padding:10,
    },
    avatar:{
        width:'30%',
        aspectRatio:1,
        borderRadius:100
    },
    textButton:{
        color:colors.primary,
        fontWeight:fonts.weight.semi,
        margin:10,
    },
    inputContainer:{
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'stretch',
    },
    label:{
        width:100,
    },
    input:{
        
        // borderColor:colors.border,
        borderBottomWidth:1
    },
})

export default EditProfileScreen