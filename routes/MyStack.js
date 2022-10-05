import { createStackNavigator } from '@react-navigation/stack';
import LoginCard from '../components/LoginCard';
import OpeningScreen from '../pages/OpeningScreen';
import SignInFirst from '../components/SignInFirst'
import SignInSecond from '../components/SignInSecond'
import SignInThird from '../components/SignInThird'
import SignInLast from '../components/SignInLast'
import MyTab from '../routes/MyTab'
import VectorIcon from '../assets/Vector.png'
import { Image } from 'react-native';




const Stack = createStackNavigator();

export default function MyStack(){

    const Vector = () =>(
        <Image source={VectorIcon}  style={{marginLeft:20}}/>
    )    
    
    return (
        <Stack.Navigator initialRouteName='Opening' screenOptions={{headerStyle: { backgroundColor: '#E5E5E5' }, headerBackTitleVisible: false , headerTitleStyle: {fontSize: 24 , fontFamily: 'Gilroy-SemiBold'}, headerBackImage: Vector, headerTitleAlign: 'center'}}>
        <Stack.Screen name="Opening"  component={OpeningScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Giriş Yap" component={LoginCard} options={{headerTitle: 'Kayıt Ol'}}/>
        <Stack.Screen name="SignFirst" component={SignInFirst} options={{headerTitle: 'Kayıt Ol'}}/>
        <Stack.Screen name="SignSecond" component={SignInSecond} options={{headerTitle: 'Kayıt Ol'}} />
        <Stack.Screen name="SignThird" component={SignInThird} options={{headerTitle: 'Kayıt Ol'}}/>
        <Stack.Screen name="SignLast" component={SignInLast} options={{headerTitle: 'Kayıt Ol'}}/>
        <Stack.Screen name="MyTab" component={MyTab} options={{headerShown: false}}/>
        </Stack.Navigator>
        )
}