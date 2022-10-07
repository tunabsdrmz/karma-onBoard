import { Image, Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import CardsImg from '../assets/CardsImg.png'
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ref } from "firebase/database";
import { database, auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

 
export default function LoginCard({navigation}){
    const [nameInput, setNameInput] = useState('')
    const [passInput, setpassInput] = useState('')
    const [show, setShow] = useState(false)
    
    
    
   const Login = () => {
    if(nameInput !== '' && passInput !== ''){
     const email = '@gmail.com'
     let endEmail = nameInput.concat(email)
     signInWithEmailAndPassword(auth, endEmail, passInput )   
     navigation.navigate('MyTab')
    }else if(nameInput === '' || passInput === ''){
            setShow(true) 
        }     
    }  
    return(
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}> 
        <View style={styles.container}>
            <StatusBar style="dark"/>    
            <View style={styles.Card}>
                <Image source={CardsImg} />
                <View>
                   <Text style={styles.Text}> 
                    <Text style={styles.BoldText} >Karma</Text>
                    <Text>'ya hoşgeldin!</Text>
                </Text>
                <Text style={styles.SubText}>Haydi maceraya başlayalım!</Text> 
                </View>
                
                <View style={{ width: '90%' }}>
                     <TextInput value={nameInput} onChangeText={(e) => setNameInput(e)} style={styles.Input} placeholder='Kullanıcı adı'/>
                     <TextInput value={passInput} onChangeText={(e) => setpassInput(e)} style={styles.Input} placeholder='Parola' secureTextEntry={true} autoCorrect={false}/>
                     <View style={{height:30, display:'flex', alignItems:'center',justifyContent:'center'}}>
                     {show && <Text style={{fontFamily:'Gilroy-Medium', fontSize:18, textAlign:'center', color:'#FF1400'}}>Hatalı kullanıcı adı ya da parola!</Text>}
                     </View>
                </View>
                
                <Pressable style={styles.Button} onPress={Login}>
                    <Text style={styles.ButtonText}>Giriş Yap</Text>
                </Pressable>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
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
        marginTop: 13
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