import { useNavigation } from "@react-navigation/native"
import { View, StyleSheet, Text, Image, Touchable, TouchableOpacity } from "react-native"
import { images } from "./../../../images"


export default function MinhasPlantinhas() {

    const navigation = useNavigation<any>()

    return (
        <View style={styles.container}>
            <Text>
                Ola
            </Text>
        </View>
    )
}
 const styles=StyleSheet.create({
    container: {
        backgroundColor:"red",
    }
 })