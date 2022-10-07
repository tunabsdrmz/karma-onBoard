import { Image, Pressable, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import CardsImg from '../assets/CardsImg.png'
import { StatusBar } from "expo-status-bar";
import { ProgressBar, Colors} from "react-native-paper";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { nameInput } from "../atoms";


 
export default function SignInFirst({navigation}){
   const [name, setName] = useRecoilState(nameInput);

   

  const toSecondPage = () =>{
    if(name !== ''){
        navigation.navigate('SignSecond')
    }
  }
   
   

    return(
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}> 
        <View style={styles.container}>
            <StatusBar style="dark"/>   
            <View style={{position:'absolute', top: 0}}>
            <ProgressBar progress={0.0} color='#844AFF' style={styles.progress}/>
            </View>
            <View style={styles.Card}>
                <Image source={CardsImg} />
                <View>
                   <Text style={styles.Text}> 
                    <Text style={styles.BoldText} >Karma</Text>
                    <Text>'ya hoşgeldin!</Text>
                </Text>
                <Text style={styles.SubText}>Sana nasıl hitap edelim?</Text> 
                </View>
                
                <View style={{ width: '90%' }}>
                     <TextInput style={styles.Input}
                      placeholder='Kullanıcı adı'
                      value={name}
                      onChangeText={ev => setName(ev)}
                     />
                </View>

                <Pressable style={styles.Button} onPress={toSecondPage}>
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
    BoldText:{
        fontSize:32,
        color: '#FFFFFF',
    },
    Text:{
        fontFamily: 'Gilroy-ExtraBold',
        fontSize: 27,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    SubText:{
        fontFamily: 'Gilroy-Medium',
        fontSize: 18,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    Input:{
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 18,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#957DC7',
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingHorizontal: 21,
        height: 50,
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