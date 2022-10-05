import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { socket } from "./Users";


export default function Likes(){
    const [like, setLike] = useState([])
    useEffect(()=>{
        socket.on("getLike", data)
        setLike(data)
        AsyncStorage.setItem('like', JSON.stringify(like))
    },[socket])
    return(
      <View>
        <StatusBar style="dark"/>
        {like?.map((user, i) =>{
            return (
                <View key={user.senderName} style={{marginTop: cardGap, marginLeft: i % 2 !== 0 ? cardGap : 0, width: cardWidth, height: 180, borderRadius: 10, justifyContent: 'center', alignItems: 'center',}} >   
                    <LinearGradient locations={[0, 1]} colors={['#D6052B','transparent']} style={{position:'absolute', borderRadius:10, width: cardWidth, height:180, zIndex:3, opacity:0.7}} start={{ x: 0.1, y: 1.7}} end={{x: 0.1, y: 0.1}} />
                    <Image source={{uri:user.senderPhoto}} style={{width: cardWidth, height:180, borderRadius: 10, position:'absolute', opacity:1}}/>
                    <Text style={{fontFamily:'Gilroy-Bold', fontSize: 16, color: '#FFFFFF', textAlign:'center', position:'absolute',left:10, bottom:20}}>{user.senderName}</Text>
                    <Text style={{fontFamily:'Gilroy-Bold', fontSize: 10, color: '#FFFFFF', textAlign:'center', position:'absolute',left:10, bottom:8}}>{user.senderDdate}</Text>    
                </View>
            )
        })}    
    </View>  
    )  
}