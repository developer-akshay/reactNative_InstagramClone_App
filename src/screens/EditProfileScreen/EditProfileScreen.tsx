import { View, Text,StyleSheet,Image, TextInput } from 'react-native'
import React from 'react'
import { useForm , Controller, Control} from 'react-hook-form'
import user from '../../assets/data/user.json'
import colors from '../../theme/colors'
import fonts from '../../theme/fonts'
import { IUser } from '../../types/models'

interface ICustomInput {
    control:Control;
    label: string;
    name:string;
    multiline?: boolean;
}

const CustomInput =
({
    control,
    label,
    name,
    multiline= false,
}:ICustomInput) => (
    // 3.Here we have to wrapp the textinput with the controller hook form so 
    // that we can use function with textinput  
    <Controller 
        control={control} // type
        name={name} //name of the field we are rendering rn
        //Here we gonna put our custom input inside render function to render diff fields
        render = {({field: {onChange,value,onBlur} }) => (
            <View style={styles.inputContainer} >
                <Text style={styles.label}>{label}</Text>
                <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                style={styles.input} 
                placeholder='Hello' 
                multiline={multiline}
                />
            </View>
        )
    }
    />  
)

const EditProfileScreen = () => {

//1. control field :
//will help use to bind one input to a value that which is gonna be managed by useForm
    const {control,handleSubmit} = useForm();

    const onSubmit = (data) =>{
        console.log('data',data)
    }
  return (
    <View style={styles.page}>
        <Image source={{ uri :  user.image}} style={styles.avatar} />
        <Text style={styles.textButton} >Change Profile Photo</Text>
        <CustomInput name={'name'} label={'Name'} control={control}/>
        <CustomInput name={'username'} label={'Username'} control={control}/>
        <CustomInput name={'website'} label={'Website'} control={control} />
        <CustomInput name={'bio'} label={'Bio'} multiline control={control}/>
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
        flex:1,
        borderColor:colors.border,
        borderBottomWidth:1
    },
})

export default EditProfileScreen