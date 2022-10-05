import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useState } from 'react'
import { Pressable} from 'react-native'
import Likes from '../pages/Likes'
import Users from '../pages/Users'

const Tab = createBottomTabNavigator()

export default function MyTab() {
  const [leftIcon, setLeftIcon] = useState(true)
  const [rightIcon, setRightIcon] = useState(false)

  function pressLeft(){
    setLeftIcon(true)
    setRightIcon(false)
  }
  function pressRight(){
    setLeftIcon(false)
    setRightIcon(true)
  }
    return (
      <Tab.Navigator initialRouteName='Users'
       screenOptions={{
        headerShown: false ,
        tabBarStyle: { backgroundColor: '#FAFAFA', height:90 },
        tabBarActiveTintColor: '#FFFFFF', 
        tabBarInactiveTintColor: '#8C8C8C', 
        tabBarLabelStyle: {
          position:'absolute', 
          top:33,
          fontFamily: 'Gilroy-Bold',
          fontSize: 16, 
          }
          }}>
        <Tab.Screen name='Users' component={Users} options={{title: 'Kullanıcılar', tabBarIcon:() => (<Pressable onPress={pressLeft}  style={() => [{ backgroundColor: leftIcon ? '#844AFF' : '#E8E8E8', width:170, height:42, borderRadius:10,position:'absolute', top:17 }]}></Pressable>) }} />
        <Tab.Screen name='Likes' component={Likes} options={{title: 'Beğenenler', tabBarIcon:() => (<Pressable  onPress={pressRight} style={() => [{ backgroundColor: rightIcon ? '#844AFF' : '#E8E8E8', width:170, height:42, borderRadius:10,position:'absolute', top:17, }]}></Pressable>)}}/>
      </Tab.Navigator>
    )
  }