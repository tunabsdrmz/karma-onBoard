import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Dimensions, Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRecoilValue } from "recoil";
import { LinearGradient } from 'expo-linear-gradient';
import { nameInput, passwordInput } from "../atoms";
import { database, auth} from "../firebase";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { child, get, ref, onValue, set } from "firebase/database";



    

export default function Users(){
    const [users, setUsers] = useState([])
    const [visible, setVisible] = useState(false)
    const [modalData, setModalData] = useState('')
    const [currentUserValues, setCurrentUserValues] = useState([])
    const name = useRecoilValue(nameInput)
    const password = useRecoilValue(passwordInput)


    let currentUser = auth.currentUser
    let currentUseremail
    let slicedUserEmail
    let finalUserEmail //bu like alan usera eklemek için kullanılacak user ismi
        if (currentUser != null) {
            currentUseremail = currentUser.email;
            slicedUserEmail = currentUseremail.split('@gmail.com')
            finalUserEmail = slicedUserEmail[0]
        }
      
    

    async function Value(){
        const rootRef = ref(database)
        get(child(rootRef, 'dummyData/')).then((snapshot) => {
            if (snapshot.exists()) {
                let usersArray = []
                snapshot.forEach(user =>{
                    usersArray.push(user.val())
                })
                
              setUsers(usersArray)
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });


          //get currentuserData
        
        get(child(rootRef, `dummyData/${finalUserEmail}`)).then((snapshot) => {
            if (snapshot.exists()) {
                
                let currUserDataArray = []
               // snapshot.forEach(user =>{
                let json = snapshot.val()
                
                    currUserDataArray.push(json)
               // })
                setCurrentUserValues(currUserDataArray)
                console.log(currUserDataArray[0].date)
            }
        })


    }
    useEffect(()=>{
        Value()
        

    },[])
    
    const cardGap = 20
    const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2

    const sendlikeToLikesPage =  () => {
        let currModalName = modalData.toLowerCase()
          set(ref(database, `dummyData/${currModalName}/likes`),{
            likedName: currentUserValues[0]?.name,
            likedDate: currentUserValues[0]?.date,
            likedPhoto: currentUserValues[0]?.photo
        })
    }
    
    const handleLike =  () =>{
          sendlikeToLikesPage()
          setVisible(false)    
    }

    const openModal = (user) => {
        const email = '@gmail.com'
        let endEmail = name.concat(email)
        createUserWithEmailAndPassword(auth,endEmail, password)
        setModalData(user.name)
        setVisible(true)
    }

    return(
        <SafeAreaView>
            <StatusBar style="dark" />
       <View style={styles.container}>   
       <Modal animationType="fade" visible={visible} transparent statusBarTranslucent>
            <View style={{backgroundColor: '#000000', opacity: 0.9, flex: 1, alignItems:'center', justifyContent:'center'}}>
                <View style={{backgroundColor: '#FFFFFF', borderRadius: 20, height:227, width:347, alignItems:'center', justifyContent:'space-around'}}>
                    <Text style={{fontFamily:'Gilroy-SemiBold', fontSize: 20, textAlign:'center', color:'#000000',width: 250}}>{modalData} adlı kullanıcıya istek göndermek istediğine emin misin?</Text>
                    <View style={{display:'flex',height: 55 , justifyContent:'space-between'}}>
                    <TouchableOpacity onPress={handleLike} style={{width:322, height: 39, backgroundColor:'#844AFF', borderRadius: 10, justifyContent:'center',marginBottom:10}} >
                        <Text style={{color:'#FFFFFF', textAlign: 'center', fontFamily:'Gilroy-SemiBold', fontSize: 18 }}>Gönder</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> setVisible(false)}>
                        <Text style={{textAlign: 'center', fontFamily:'Gilroy-SemiBold', fontSize: 18, color:'#A9A9A9'}}>Vazgeç</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
        {users?.map((user, i) =>{
            return (
                <TouchableOpacity key={user.name} style={{marginTop: 10, marginLeft: i % 2 !== 0 ? cardGap : 0, width: cardWidth, height: 180, borderRadius: 10, justifyContent: 'center', alignItems: 'center',}} onPress={() => openModal(user)}>   
                    <LinearGradient locations={[0, 1]} colors={['#844AFF','transparent']} style={{position:'absolute', borderRadius:10, width: cardWidth, height:180, zIndex:3, opacity:0.7}} start={{ x: 0.1, y: 1.7}} end={{x: 0.1, y: 0.1}} />
                    <Image source={{uri: user.photo}} style={{width: cardWidth, height:180, borderRadius: 10, position:'absolute', opacity:1}}/>
                    <Text style={{fontFamily:'Gilroy-Bold', fontSize: 16, color: '#FFFFFF', textAlign:'center', position:'absolute',left:10, bottom:20}}>{user.name}</Text>
                    <Text style={{fontFamily:'Gilroy-Bold', fontSize: 10, color: '#FFFFFF', textAlign:'center', position:'absolute',left:10, bottom:8}}>{user.date}</Text>    
                </TouchableOpacity>
            )
        })}
    </View>
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      flexDirection: 'row',
      flexWrap:'wrap',
      justifyContent: 'center',   
      paddingVertical: 52
    },    
  });
  