import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { images } from './images';

export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
      <Text style={styles.textOla}>
        Olá,{"\n"}Tiago
      </Text>
      <Image source={images.foto} style={styles.foto}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textOla: {
    
  },
  foto: {

  },
  
});