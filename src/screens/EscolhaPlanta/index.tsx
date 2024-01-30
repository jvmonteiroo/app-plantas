import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList, Alert } from 'react-native';
import { images } from '../../../images';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

type ItemProps={
  image:string,
  name:string,
}

type PlaceItemProps={
  name:string
}

export default function EscolhaPlanta() {
  
  const navigation = useNavigation<any>()

  const [plantTypes, setPlantTypes] = useState([])
  const [plantPlaces, setPlantPlaces] = useState<string[]>([])
  
  const Item = ({name, image}: ItemProps) => (
    <TouchableOpacity style={styles.boxPlanta} onPress={() => navigation.navigate("Peperomia", {name, image})}>
      <Image source={images[image]} style={styles.planta} resizeMode='contain' resizeMethod='resize'/>
      <Text style={styles.textPlantas}>
        {name}
      </Text>
    </TouchableOpacity>
  )

  const PlaceItem = ({name}:PlaceItemProps) => (
    <View style={styles.sala} key={name}>
      <Text>
        {name}
      </Text>
    </View>
  )

  
  const getPlantTypes = () => {
    fetch(
      "http://192.168.0.119:3000/plant-types",
      {
        method: "GET",
      }
    ).then((response) => response.json())
    .then(data => {
      setPlantTypes(data)
    })
  }

  const getPlaces = () => {
    fetch(
      "http://192.168.0.119:3000/plant-places",
      {
        method: "GET",
      }
    ).then((response) => response.json())
    .then(data => {
      const places = data.map((item: any) => (
        <PlaceItem name={item} />
      ))
      setPlantPlaces(places)
    }
    )
  }

  useEffect(() => {
    getPlantTypes()
    getPlaces()
  },[])

  

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
          {plantPlaces}
        </ScrollView>
        <FlatList 
          style={styles.plantas} 
          data={plantTypes} 
          renderItem={({item}:any) => <Item name={item.name} image={item.image}/>}
          numColumns={2}
          horizontal={false}
          contentContainerStyle={{
            flex:1,
            gap:10,
          }}
          columnWrapperStyle={{gap:10}}
          />
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
    flexDirection:'row',
    paddingHorizontal: 20,
    height: 35,
  },
  sala: {
    marginHorizontal: 2,
    borderWidth: 1,
    width: 76,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FAF7',
    borderRadius: 10,
  },
  plantas: {
    marginHorizontal: 25,
    flexDirection: 'row',
    height: 550,
  },
  boxPlanta: {
    width:"50%",
    height:154,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    backgroundColor:"#F5FAF7",
  },
    planta: {
      width:50,
      height:88,
  },
  textPlantas: {
    
  }

  
});