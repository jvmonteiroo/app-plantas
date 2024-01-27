import { useNavigation } from "@react-navigation/native"
import { View, StyleSheet, Text, Image, Touchable, TouchableOpacity } from "react-native"
import { images } from "./../../../images"


export default function MinhasPlantinhas() {

    const navigation = useNavigation<any>()

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text>
                        Minhas
                    </Text>
                    <Text>
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
        </View>
    )
}
 const styles=StyleSheet.create({
    container: {
        
    },
    header: {
        borderWidth:1,
        bordercolor:"red",
        top:147,
        left:40,
        width:300,
        justifyContent:"space-between",

    },
    foto: {
       
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
})