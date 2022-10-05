import { NavigationContainer } from '@react-navigation/native';
import MyStack from './routes/MyStack';
import { useFonts } from 'expo-font';
import { RecoilRoot } from 'recoil';


export default function App() {
  const [fontsLoaded] = useFonts({
    'Gilroy-Bold': require('./assets/fonts/Gilroy-Bold.ttf'),
    'Gilroy-ExtraBold': require('./assets/fonts/Gilroy-ExtraBold.ttf'),
    'Gilroy-Light': require('./assets/fonts/Gilroy-Light.ttf'),
    'Gilroy-Medium': require('./assets/fonts/Gilroy-Medium.ttf'),
    'Gilroy-SemiBold': require('./assets/fonts/Gilroy-SemiBold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }


  return (
    <RecoilRoot>
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
     </RecoilRoot>
  );
}

