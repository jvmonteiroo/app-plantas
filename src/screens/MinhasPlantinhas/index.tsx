import { useNavigation } from "@react-navigation/native"
import { View, StyleSheet, Text, Image, Touchable, TouchableOpacity, FlatList } from "react-native"
import { images } from "./../../../images"

type ItemProps={
    image:string,
    name:string,
    regar:string,
    hora:string,
  }

export default function MinhasPlantinhas() {

    const navigation = useNavigation<any>()

    const plantas = [
        {
            name: "Imbé",
            image:"imbe",
            regar: "10",
            hora: "999",
          },
          {
            name: "Peperomia",
            image: "peperomia",
            regar: "10",
            hora: "999",
          },
          {
            name: "Aningapara",
            image: "aningapara",
            regar: "10",
            hora: "999",
          },
          {
            name: "Yucca",
            image:"yucca",
            regar: "10",
            hora: "999",
          },
          {
            name: "Espada de São Jorge",
            image: "espada",
            regar: "10",
            hora: "999",
          },
          {
            name: "Zamioculca",
            image: "zamioculca",
            regar: "10",
            hora: "999",
          },
    ]
    
    const Item = ({name, image, regar, hora}: ItemProps) => (
        <TouchableOpacity style={styles.boxPlanta} onPress={() => navigation.navigate("Peperomia", {name, image, regar, hora})}>
            <Image source={images[image]} style={styles.planta} resizeMode='contain' resizeMethod='resize'/>
            <Text style={styles.textPlantas}>
                {name}
            </Text>
            <View>
                <Text>
                    {regar}
                </Text>
                <Text>
                    {hora}
                </Text>
            </View>
        </TouchableOpacity>
    )




    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.headerTextMinhas}>
                        Minhas
                    </Text>
                    <Text style={styles.headerTextPlantinhas}>
                        Plantinhas
                    </Text>
                </View>
                <Image source={images.foto} style={styles.foto}/>
            </View>
            <View style={styles.wateringRectanglePlant}>
                    <Image source={images.emoji} style={styles.imageEmoji} resizeMode='contain' resizeMethod='resize'/>
                    <View>    
                        <Text>
                        Regue sua Aningapara
                        </Text>
                        <Text>
                        daqui a 2 horas
                        </Text>
                    </View>
            </View>
            <Text style={styles.textProx}>
                Próximas regadas
            </Text>
            <FlatList 
                style={styles.plantas} 
                data={plantas}
                renderItem={({item}:any) => 
                                        <Item name={item.name} 
                                        image={item.image} 
                                        regar={item.regar} 
                                        hora={item.hora}/>} 
            />
        </View>
    )
}
 const styles=StyleSheet.create({
    container: {
        
    },
    header: {
        top:100,
        left:40,
        width:335,
        justifyContent:"space-between",
        flexDirection:"row",
    },
    headerTextMinhas: {
        fontWeight:"400",
        fontSize:32,
    },
    headerTextPlantinhas: {
        fontWeight:"600",
        fontSize:32,
    },
    foto: {
       top:10,
    },
    wateringRectanglePlant: {
        width: 311,
        height: 88,
        top: 150,
        left:50,
        backgroundColor: "#E6F1FA",
        borderRadius: 20,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:25,
    },
    imageEmoji: {
        backgroundColor: "#D6EDFF",
        width:66,
        height:66,
        borderRadius:30,
    },
    textProx: {
        top:215,
        fontWeight:"600",
        fontSize:24,
    },
    plantas: {
        marginHorizontal: 25,
        flexDirection: 'row',
        top:220,
        height: 350,
        borderWidth:1,
        borderColor:"red",
    },
    boxPlanta: {
        width:362,
        borderRadius:20,
        backgroundColor:"#F5FAF7",
        borderWidth:1,
        borderColor:"red",
        height:80,
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10
    },
    textPlantas:{
        right:100,
    },
    planta: {
        width:40,
        height:48,
    },
});