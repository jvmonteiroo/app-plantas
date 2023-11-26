import { useNavigation } from "@react-navigation/native"
import { View, StyleSheet, Text, Image, Touchable, TouchableOpacity } from "react-native"
import { images } from "../../../../images"


export default function Peperomia() {

    const navigation = useNavigation<any>()

    return (
        <View style={styles.container}>
            <View style={styles.buttonBack}>
                <TouchableOpacity>
                    <Image source={images.Arrow} resizeMode='contain' resizeMethod='resize' style={styles.image}/>
                </TouchableOpacity>
            </View>
            <View style={styles.headerDescription}>

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
    image: {
        borderWidth:1,
        borderColor:"red",
        height:50,
        width:"100%"
    },
    headerDescription: {

    },
    
})