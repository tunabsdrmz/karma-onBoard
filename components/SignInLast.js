import { Image, Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import Checkbox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CardsImg from '../assets/CardsImg.png'
import { StatusBar } from "expo-status-bar";
import { ProgressBar, Colors} from "react-native-paper";
import { useRecoilState } from "recoil";
import { passwordInput } from "../atoms";
import { userData } from "../DummyData";


export default function SignLast({navigation}){
    const [password, setPassword] = useRecoilState(passwordInput);
    
    const mergeCurrentUser = async () => {
        try {
            await AsyncStorage.setItem('user-data', JSON.stringify(userData))
            await AsyncStorage.mergeItem('user-data', JSON.stringify(userData))
        } catch (error) {
            console.log(error)
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
                <Checkbox style={styles.checkbox}  />
                <Text style={styles.paragraph}>
                    <Text style={styles.paragraphBold}>Kullanım Koşulları, </Text>
                    <Text style={styles.paragraphBold}>Gizlilik Politikası </Text>
                    <Text>ve </Text>
                    <Text style={styles.paragraphBold}>KVKK Metnini </Text>
                    <Text>okudum onaylıyorum.</Text>
                    </Text>
                </View>
                <View>
                   <Pressable style={styles.Button} onPress={() => {
                    mergeCurrentUser()
                    navigation.navigate('MyTab')
                   }}>
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