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
    //Bu kısmı atom statesine date objesi koymamı kabul 
    //etmemesi üzerine bırakmak zorunda kaldım 
   
    // const [show, setShow] = useState(false);
   // const handleOnChange = (e) => {
   //     const { key, value } = e.target;
   //     setDate({ ...date, [key]: value });
    //  };
   /* const onChange = (event, selectedDate) => {
        const currentDate = selectedDate
        setShow(false);
        setDate(currentDate)
      };*/
      function onChangeText(ev){
        setDate(ev)
      }

    return(
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}> 
        <View style={styles.container}>
            <StatusBar style="dark"/>   
            <View style={{position:'absolute', top: 0}}>
            <ProgressBar progress={0.5} color='#844AFF' style={styles.progress}/>
            </View>
            <View style={styles.Card}>
                <Image source={CardsImg} />
                <View>
                <Text style={styles.SubText}>Doğum tarihin nedir?</Text> 
                </View>
                <View>     
                {/*<Pressable style={{minWidth: '90%'}} onPress={() => setShow(true)}> 
                <Text style={{textAlign:'center', fontFamily:'Gilroy-SemiBold', fontSize: 18 }}>{date.toLocaleDateString()}</Text>
                {show && <DateTimePicker value={date} onChange={onChange}/> }   
                </Pressable>*/}
                <TextInput  value={date} onChangeText={onChangeText} style={styles.Input}  placeholder="3/11/1999" />
                </View>  
                <Pressable style={styles.Button} onPress={()=> navigation.navigate('SignThird')}>
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
        minWidth: '90%'
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