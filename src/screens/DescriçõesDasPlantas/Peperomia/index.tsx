import { useNavigation } from "@react-navigation/native"
import { View, StyleSheet, Text, Image, Touchable, TouchableOpacity } from "react-native"
import { images } from "../../../../images"


export default function Peperomia() {

    const navigation = useNavigation<any>()

    return (
        <View style={styles.container}>
            <View style={styles.buttonBack}>
                <TouchableOpacity style={styles.touchableButtonBack}>
                    <Image source={images.Arrow} resizeMode='contain' resizeMethod='resize' style={styles.imageButtonBack}/>
                </TouchableOpacity>
            </View>
            <View style={styles.headerDescription}>
                <Image source={images.peperomia} resizeMode='contain' resizeMethod='resize' style={styles.headerDescriptionImage}/>
                <Text style={styles.textHeaderDescriptionPeperomia}>
                    Pereromia
                </Text>
                <Text style={styles.textHeaderDescription}>
                    Não pode pegar sol e deve ficar em
                </Text>
                <Text style={styles.textHeaderDescription}>
                    temperatura ambiente, dentro de casa.
                </Text>
            </View>
            <View style={styles.wateringRectanglePlant}>
                <View style={styles.wateringRectanglePlantImageText}>
                    <Image source={images.emoji} style={styles.imageEmoji} resizeMode='contain' resizeMethod='resize'/>
                    <View>    
                        <Text>
                            A rega deve ser feita com
                        </Text>
                        <Text>
                            400ml a cada dois dias
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        paddingTop:20,
    },
    buttonBack: {
        borderWidth:1,
        borderColor:"red",
        height:100,
        position:"absolute",
        width:75,
        top:40,
    },
    touchableButtonBack: {

    },
    imageButtonBack: {
        height:50,
        width:"100%"
    },
    headerDescription: {
        borderWidth:1,
        borderColor:"red",
        height:280,
        top:100,
        justifyContent:"center",
        alignItems:"center"
    },
    headerDescriptionImage: {
        width:156,
        height:176,
    },
    textHeaderDescriptionPeperomia: {
        fontSize: 24,
        fontWeight: "600",
        lineHeight:32,
    },
    textHeaderDescription: {
        fontSize: 17,
        lineHeight:25,
        fontWeight: "400",
    },
    wateringRectanglePlant: {
        borderWidth:1,
        borderColor:"red",
        width: 311,
        height: 88,
        top: 110,
        left:50,
        backgroundColor: "#E6F1FA",
        borderRadius: 20,
    },
    wateringRectanglePlantImageText: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    imageEmoji:{
        backgroundColor: "#D6EDFF",
        width:56,
        height:56,
        borderRadius:46,
    }
    
})