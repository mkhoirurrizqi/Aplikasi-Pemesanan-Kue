import React,{useEffect} from "react"
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Login')
        },2000)
    },[navigation]);
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.text}>PAMPARAMPAM</Text>
            <Text style={styles.text1}>Aplikasi Pemesanan kue</Text>
        </TouchableOpacity>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#F57373',
        alignItems: 'center',
        justifyContent:"center",
      },
      text: {
        fontSize: 50,
        color: 'white',
        fontWeight: "bold",
      },
      text1: {
        fontSize: 28,
        color: 'white',
        fontWeight: "bold",
      },
})
