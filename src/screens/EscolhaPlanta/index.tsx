import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
        <View style={styles.textsAmbiente}>
          <Text style={styles.textEm}>
            Em qual ambiente
          </Text>
          <Text style={styles.textVoce}>
            Você quer colocar sua planta?
          </Text>
        </View>
        <ScrollView style={styles.comodos} horizontal={true}>
          <View style={styles.sala}>
            <Text>
              Sala
            </Text>
          </View>
          <View style={styles.sala}>
            <Text>
              Quarto
            </Text>
          </View>
          <View style={styles.sala}>
            <Text>
              Cozinha
            </Text>
          </View>
          <View style={styles.sala}>
            <Text>
              Banheiro
            </Text>
          </View>
          <View style={styles.sala}>
            <Text>
              Sala
            </Text>
          </View>
        </ScrollView> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:80,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal:20,
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
  textsAmbiente:{
    paddingTop:50,
    paddingHorizontal: 40
  },
  textEm: {
    fontWeight:'500'
  },
  textVoce: {
    fontWeight:'400'
  },
  comodos: {
    borderWidth:1,
    flexDirection:'row',
    paddingHorizontal: 20,
    height: 200
  },
  sala: {
    marginHorizontal: 20,
    borderWidth: 1,
  }
  
});