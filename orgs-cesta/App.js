import { StatusBar, Text, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold, Montserrat_400Regular_Italic } from '@expo-google-fonts/montserrat'
import Cesta from './src/telas/Cesta/Cesta';

export default function App() {

  const [fontsCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if(!fontsCarregada) {
    return <View/>
  }

  return (

    <SafeAreaView>
        <StatusBar/>
        <Cesta></Cesta>
    </SafeAreaView>
  );
}

