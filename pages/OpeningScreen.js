import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import OpeningImg from '../assets/OpeningImg.png'
import { StatusBar } from "expo-status-bar";

export default function OpeningScreen({navigation}){

    return(
        <View style={styles.MainContainer}>
             <StatusBar style="dark"/>    
          <LinearGradient 
            colors={['#EAE0FF','#FFFFFF']}  start={{x: 0.0, y: 0.0}}
            locations={[0, 1]} style={styles.Container}/>
             
        <View style={styles.ImageContainer}>
        <Image source={OpeningImg} style={styles.Image}/>
           <Text style={styles.Text}>Ruh eşini keşfetmeye hazır mısın?</Text>
            <Text style={styles.SubText}>Doğum haritanda gizlenen sırları keşfet, kadim bilgiye kulak ver!</Text> 
        </View>
            <Pressable style={styles.FirstButton} onPress={() => navigation.navigate('Giriş Yap')}>
                <Text style={styles.ButtonText}>Giriş Yap</Text>
            </Pressable>
        <View style={styles.FirstButtonContainer}>
            <Pressable onPress={() => navigation.navigate('SignFirst')}>  
            <LinearGradient colors={['#0E091B','#434343']}  style={styles.SecondButton}>
                <Text style={styles.ButtonText}>Hesap Oluştur</Text>
            </LinearGradient>
            </Pressable>  
            <Text style={styles.BottomText}>
                <Text>Devam ederek </Text>
                <Text style={styles.BottomTextDiff}>Kullanım Koşullarımızı </Text>
                <Text>ve </Text>
                <Text style={styles.BottomTextDiff}>Gizlilik Politikamızı </Text>
                <Text>kabul etmiş sayılırsınız.</Text>
            </Text>
          </View>
        </View>
    )

}

const styles = StyleSheet.create({
    MainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white'
    },
    Container:{
        position: 'absolute',
        left:0,
        right:0,
        top: 0,
        width: 500,
        height: 500
       
    },
    ImageContainer:{  
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        flex: 3
    },
    Image:{
        position: 'absolute',
        
    },
    Text:{
        textAlign: 'center',
        fontFamily: 'Gilroy-Bold',
        fontSize: 36,
    },
    SubText:{
        textAlign: 'center',
        fontFamily: 'Gilroy-Light',
        fontSize: 18,
        marginHorizontal: 18
        
    },
    FirstButtonContainer:{
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        backgroundColor: '#FFFFFF',
        marginHorizontal: 18,
    },
    FirstButton:{
        backgroundColor: '#844AFF',
        borderRadius: 10,
        height: 52,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '88%'
         
    },
    ButtonText:{
        color: '#FFFFFF',
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 22,
    },
    SecondButton:{
        borderRadius: 10,
        height: 57,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',     
    },
    BottomText:{
       color: '#737373',
       fontFamily: 'Gilroy-Medium' ,
       fontSize: 13,
       textAlign: 'center',
       
    },
    BottomTextDiff:{
        color: '#6523F1',  
     },
})
