import { Image, Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import CardsImg from '../assets/CardsImg.png'
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ProgressBar, Colors} from "react-native-paper";
import { useRecoilState } from "recoil";
import { dateInput } from "../atoms";


export default function SignInSecond({navigation}){
   const [date, setDate] = useRecoilState(dateInput);
   const [temporaryDate, setTemporaryDate] = useState(new Date(1598051730000))
   const [show, setShow] = useState(false);
    const [progress, setProgress] = useState(0.3)
   
   const onChange = (event, selectedDate) => {
        const currentDate = selectedDate
        setShow(false);
        setTemporaryDate(currentDate)
        let dt = temporaryDate.toLocaleDateString()
        setDate(dt)
        setProgress(0.5)
      };
     const toThirdPage = () => {
        if(date !== 'Seçiniz'){
            navigation.navigate('SignThird')
        }
     }

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
                <Text style={styles.SubText}>Doğum tarihin nedir?</Text> 
                </View>
                <View style={styles.Input}>     
                <Pressable onPress={() => setShow(true)}> 
                <Text style={{textAlign:'center', fontFamily:'Gilroy-SemiBold', fontSize: 18 }}>{date}</Text>
                {show && <DateTimePicker value={temporaryDate} onChange={onChange}/> }   
                </Pressable>
                </View>  
                <Pressable style={styles.Button} onPress={toThirdPage}>
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
    Input:{
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#957DC7',
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingHorizontal: 21,
        height: 50,
        marginTop: 13,
        textAlign:'center', 
        fontFamily:'Gilroy-SemiBold', 
        fontSize: 18,
        minWidth: '90%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
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