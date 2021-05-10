import React, { useState,useEffect } from "react";
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import {  useSelector } from 'react-redux';

const Splash = ({navigation}) => {
    const token = useSelector(data => data.token);
    const [type, setType] = useState("");
    useEffect(()=>{
        if(token != ""){
        fetch('https://pamparampam.herokuapp.com/api/user',{
                    method:'GET',
                    headers: {
                      Accept: 'application/json',
                      'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                    },
                  })  
                  .then(function(response) {
                    return response.json()
                  }).then((responseJson) => {
                      setType(responseJson.type)
                  }).catch(error => {
                    console.error(error);
                  });
                }
        setTimeout(()=>{
            console.log(token);
            if(token == ""){
                navigation.navigate('Login')
            }else{
                if(type == 'toko'){
                    props.navigation.navigate('StoreProduct')
                  }else{
                    props.navigation.navigate("HomeCustomer")
                  } 
        }
        },4000)
    },[navigation]);
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.container} onPress={() => navigation.replace("Login")}>
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
