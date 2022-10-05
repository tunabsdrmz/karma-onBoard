import { Image, Keyboard, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import CardsImg from '../assets/CardsImg.png'
import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from "expo-status-bar";
import CameraIcon from '../assets/CameraIcon.png'
import { ProgressBar, Colors} from "react-native-paper";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { photoInput } from "../atoms";


export default function SignInThird({navigation}){
    const [photo, setPhoto] = useRecoilState(photoInput);
    const [progress, setProgress] = useState(0.5)
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
          setPhoto(result.uri);
          setProgress(prev => prev + 0.2)
        }
      };  
        

    return(
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}> 
        <View style={styles.container}>
            <StatusBar style="dark"/> 
            <View style={{position:'absolute', top: 0}}>    
            <ProgressBar progress={progress} color='#844AFF' style={styles.progress}/>
            </View>  
            <View style={styles.Card}>
                <Image source={CardsImg} />
                <View>
                <Text style={styles.SubText}>Bir fotoğraf seçebilir misin?</Text> 
                </View>
                <Pressable onPress={pickImage}>
                <View style={styles.Camera}>
                    {photo ? <Image source={{ uri: photo }} style={{ width: 175, height: 175, borderRadius:10 }} /> 
                     : <Image source={CameraIcon} style={{width: 75, height: 59}}/>}
                </View>
                </Pressable>
                <Pressable style={styles.Button} onPress={()=> navigation.navigate('SignLast')}>
                    <Text style={styles.ButtonText}>Devam Et</Text>
                </Pressable>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    progress:{
        width: 370,
        height: 12,
        backgroundColor: '#F0F0F0',
        borderRadius: 5,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#E5E5E5',
    },
    Card:{
        backgroundColor: '#1A1624',
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 456,
        width: '90%'
        
    },
    SubText:{
        fontFamily: 'Gilroy-Medium',
        fontSize: 24,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    Camera:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 178,
        height: 178,
        backgroundColor: '#DBD2FF',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#957DC7' 
    },
    Button:{
        height: 57,
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    ButtonText:{
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 18,
        
    },
  });