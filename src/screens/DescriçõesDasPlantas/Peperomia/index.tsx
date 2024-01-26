import { useNavigation } from "@react-navigation/native"
import { View, StyleSheet, Text, Image, Touchable, TouchableOpacity } from "react-native"
import { images } from "../../../../images"


export default function Peperomia() {

    const navigation = useNavigation<any>()

    return (
        <View style={styles.container}>
            <View style={styles.buttonBack}>
                <TouchableOpacity onPress={() => navigation.navigate("EscolhaPlanta")} style={styles.touchableButtonBack}>
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
            <View style={styles.clock}>
                <Text style={styles.textClock}>
                Ecolha o melhor horário para ser lembrado:
                </Text>
                <Image source={images.relogio}/>
            </View>
            <TouchableOpacity style={styles.buttonGreen}>
                <Text style={styles.buttonGreenText}>
                    Cadastrar Planta
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        paddingTop:20,
    },
    buttonBack: {
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
        height:280,
        top:120,
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
    imageEmoji:{
        backgroundColor: "#D6EDFF",
        width:66,
        height:66,
        borderRadius:30,
    },
    clock: {
        width:"100%",
        top:180,
        justifyContent:"space-between",
        alignItems:"center",
    },
    textClock: {
        fontWeight:"400",
    },
    buttonGreen: {
        top:250,
        width:280,
        height:50,
        backgroundColor:"#32B768",
        left:65,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:16,
    },
    buttonGreenText: {
        fontWeight:"400",
    }
    
})