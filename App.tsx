import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import EscolhaPlanta from './src/screens/EscolhaPlanta';
import Peperomia from './src/screens/DescriçõesDasPlantas/Peperomia';
import TudoCerto from './src/screens/TudoCerto';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home"component={Home}/>
        <Stack.Screen name="EscolhaPlanta"component={EscolhaPlanta}/>
        <Stack.Screen name="Peperomia"component={Peperomia}/>
        <Stack.Screen name="TudoCerto"component={TudoCerto}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}