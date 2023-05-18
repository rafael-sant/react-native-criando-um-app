import { StatusBar, Text, SafeAreaView } from 'react-native';
import Cesta from './src/telas/Cesta';

export default function App() {
  return (
    <SafeAreaView>
        <StatusBar/>
        <Cesta></Cesta>
    </SafeAreaView>
  );
}

