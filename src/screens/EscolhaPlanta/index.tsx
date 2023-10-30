import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { images } from '../../../images';

export default function EscolhaPlanta() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <View style={styles.header}>
          <View style={styles.texts}>
            <Text style={styles.textOla}>
              Olá,
            </Text>
            <Text style={styles.textTiago}>
            Tiago
            </Text>
          </View>
          <View>
            <Image source={images.foto} style={styles.foto}/>
          </View>
        </View>
        <View>
          <Text>
            Em qual ambiente
          </Text>
          <Text>
            Você quer colocar sua planta?
          </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth:1,
    flex:1,
    paddingTop:40,
  },
  header: {
    borderWidth:1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  texts:{
  },
  textOla: {
    fontWeight:'300',
    fontSize: 32,
  },
  textTiago:{
    fontWeight:'600',
    fontSize: 32,
  },
  foto: {

  },
  
});