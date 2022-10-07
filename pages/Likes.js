import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { ref, onValue} from "firebase/database";
import { database, auth} from "../firebase";
import { LinearGradient } from 'expo-linear-gradient';

export default function Likes(){
    const [like, setLike] = useState([])
    let currentUser = auth.currentUser
    let currentUseremail
    let slicedUserEmail
    let finalUserEmail //bu like alan usera eklemek için kullanılacak user ismi
        if (currentUser != null) {
            currentUseremail = currentUser.email;
            slicedUserEmail = currentUseremail.split('@gmail.com')
            finalUserEmail = slicedUserEmail[0]
        }
        useEffect(()=>{
            getData()
        },[])
        
        const getData = () => {
            let currUserName = finalUserEmail.toLowerCase()
            const rootRef = ref(database, `dummyData/${currUserName}/likes`)
            onValue(rootRef, (snapshot) => {
                const data = snapshot.val();
                setLike(data)
                console.log(like.likedName)
              });
        }
        
        const cardGap = 20
        const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2


    return(
      <View>
        <StatusBar style="dark"/>
                <View key={like.likedName} style={{marginTop: 40, marginLeft: 1 % 2 !== 0 ? cardGap : 0, width: cardWidth, height: 180, borderRadius: 10, justifyContent: 'center', alignItems: 'center',}} >   
                    <LinearGradient locations={[0, 1]} colors={['#D6052B','transparent']} style={{position:'absolute', borderRadius:10, width: cardWidth, height:180, zIndex:3, opacity:0.7}} start={{ x: 0.1, y: 1.7}} end={{x: 0.1, y: 0.1}} />
                    <Image source={{uri:like.likedPhoto}} style={{width: cardWidth, height:180, borderRadius: 10, position:'absolute', opacity:1}}/>
                    <Text style={{fontFamily:'Gilroy-Bold', fontSize: 16, color: '#FFFFFF', textAlign:'center', position:'absolute',left:10, bottom:20}}>{like.likedName}</Text>
                    <Text style={{fontFamily:'Gilroy-Bold', fontSize: 10, color: '#FFFFFF', textAlign:'center', position:'absolute',left:10, bottom:8}}>{like.likedDate}</Text>    
                </View>
          
    </View>  
    )  
}