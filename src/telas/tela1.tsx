import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { images } from './images';

export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
      <Text style={styles.textGerencie}>
        Gerencie{"\n"}suas plantas de{"\n"}forma fácil 
      </Text>
      <Image style={styles.imagem} source={images.ilustra}/>
      <Text style={styles.textRegar}>
      Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.
      </Text>
      <TouchableOpacity style={styles.buttonOpacity}>
        <Image source={images.Avançaer}/>
      </TouchableOpacity>
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
  imagem: {
    height: 350,
    justifyContent: "center",
  },
  textGerencie:{
    fontSize: 32,
  },
  textRegar: {

  },
  buttonOpacity: {
    
  }
});
