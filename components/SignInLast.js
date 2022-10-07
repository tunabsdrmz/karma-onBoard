import { Image, Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import Checkbox from 'expo-checkbox';
import CardsImg from '../assets/CardsImg.png'
import { StatusBar } from "expo-status-bar";
import { ProgressBar, Colors} from "react-native-paper";
import { useRecoilState, useRecoilValue } from "recoil";
import { nameInput,dateInput,photoInput,passwordInput } from "../atoms";
import { ref, set } from "firebase/database";
import { database } from "../firebase";
import { useState } from "react";


export default function SignLast({navigation}){
    const [password, setPassword] = useRecoilState(passwordInput);
    const [check, setCheck] = useState(false)
    const [userId, setUserId] = useState(0)
    const name = useRecoilValue(nameInput);
    const date = useRecoilValue(dateInput);
    const photo = useRecoilValue(photoInput);
      
    async function writeUserData() {                //userId statesini koymuştum
             await  set(ref(database, 'dummyData/' + name), {
                  name: name,
                  date: date,
                  password : password,
                  photo: photo ,
                  likes: {
                    likedName: "",
                    likedDate: "",
                    likedPhoto: ""
                  } 
                });
              }
              //unique userId kullanmayı bulamadım o yüzden statede random
              //value yerleştirdim ve kendi kendini güncellettim
    const toUsersPage = () => {
        if(password !== '' && check === true){
            navigation.navigate('MyTab')
            writeUserData()  
            setUserId(prev => prev + 1) 
        }
      }
    
    return(
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View style={styles.container}>
            <StatusBar style="dark"/>   
            <View style={{position:'absolute', top: 0}}>
            <ProgressBar progress={1} color='#844AFF' style={styles.progress}/>
            </View>
            <View style={styles.Card}>
                <Image source={CardsImg} />
                <View>
                <Text style={styles.SubText}>En az 6 karakterden oluşan bir parola girmelisin</Text> 
                </View>
                
                <View style={{ width: '90%' }}>
                     <TextInput value={password} onChangeText={ev => setPassword(ev)} secureTextEntry={true} style={styles.Input} placeholder='Parola'/>
                </View>
                <View>
                <View style={styles.section}>
                <Checkbox 
                style={styles.checkbox}  
                value={check} 
                onValueChange={() => setCheck(!check)}
                color={check ? "#4630EB" : undefined}/>
                <Text style={styles.paragraph}>
                    <Text style={styles.paragraphBold}>Kullanım Koşulları, </Text>
                    <Text style={styles.paragraphBold}>Gizlilik Politikası </Text>
                    <Text>ve </Text>
                    <Text style={styles.paragraphBold}>KVKK Metnini </Text>
                    <Text>okudum onaylıyorum.</Text>
                    </Text>
                </View>
                <View>
                   <Pressable style={styles.Button} onPress={toUsersPage}>
                    <Text style={styles.ButtonText}>Tamamla</Text>
                </Pressable>  
                </View>  
                </View>
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
        color: '#FFFFFF',
        paddingHorizontal: 20
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
        marginTop: 13
    },
    Button:{
        height: 57,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10
    },
    ButtonText:{
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 18, 
    },
    section:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '88%',
    },
    checkbox:{
        backgroundColor: 'white', 
        marginRight: 5,
        borderColor: '#E8E8E8',
        borderRadius: 4
    },
    paragraph:{
        fontFamily: 'Gilroy-Medium',
        fontSize: 13,
        color: '#737373',
        width: '90%'
    },
    paragraphBold:{
        color: '#844AFF',
    }
  });