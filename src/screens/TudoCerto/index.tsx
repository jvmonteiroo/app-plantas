import { useNavigation } from "@react-navigation/native"
import { View, StyleSheet, Text, Image, Touchable, TouchableOpacity } from "react-native"
import { images } from "./../../../images"

export default function TudoCerto() {

    const navigation = useNavigation<any>()

    return (
        <View style={styles.container}>
            <Image source={images.emojitudocerto} style={styles.imageTudoCerto}/>
            <Text style={styles.textTudoCerto}>
                Tudo Certo
            </Text>
            <Text style={styles.textFique}>
            Fique tranquilo que sempre vamos {"\n"} lembrar você de cuidar da sua plantinha {"\n"} com bastante amor.
            </Text>
            <TouchableOpacity style={styles.buttonGreen}>
                <Text style={styles.buttonText}>
                    Muito obrigado :D
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        width:296,
        height:381,
        gap:35,
        justifyContent:"center",
        alignItems:"center",
        top:235,
        left:62,
    },
    imageTudoCerto: {

    },
    textTudoCerto: {
        fontWeight:"600",
        fontSize:24,
        lineHeight:30,
    },
    textFique: {
        fontWeight:"400",
        fontSize:17,
        lineHeight:25,
    },
    buttonGreen: {
        width:231,
        height:56,
        backgroundColor:"#32B768",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:16,
        top:85,
    },
    buttonText: {
        fontSize:17,
        fontWeight:"400",
    }
})