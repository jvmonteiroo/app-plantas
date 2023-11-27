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
                <Image source={images.Peperomia} resizeMode='contain' resizeMethod='resize' style={styles.headerDescriptionImage}/>
                <Text style={styles.textHeaderDescriptionPeperomia}>
                    Pereromia
                </Text>
                <Text>
                    Não pode pegar sol e devve ficar em
                </Text>
                <Text>
                    temperatura ambiente, dentro de casa.
                </Text>
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
    },
    touchableButtonBack: {

    },
    imageButtonBack: {
        borderWidth:1,
        borderColor:"red",
        height:50,
        width:"100%"
    },
    headerDescription: {
        borderWidth:1,
        borderColor:"red",
        height:50,
    },
    headerDescriptionImage: {
        
    },
    textHeaderDescriptionPeperomia: {
        
    }
    
})