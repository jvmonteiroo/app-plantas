import { useNavigation } from "@react-navigation/native"
import { View, StyleSheet, Text, } from "react-native"


export default function Imbe() {

    const navigation = useNavigation<any>()

    return (
        <View style={styles.container}>
            
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"red"
    }
})