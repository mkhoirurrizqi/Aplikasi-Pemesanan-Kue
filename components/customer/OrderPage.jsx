import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Linking, ScrollView, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
const Order  = (props) => {
  const token = useSelector((data) => data.user.token);
  const { userId ,productName} = props.route.params;
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  useEffect(() => {
    fetch('https://pamparampam.herokuapp.com/api/gettoko',{
      method:'POST',
      headers: {
        Accept: 'application/json',
        'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: userId,
      }),
    })  
    .then(function(response) {
      return response.json()
    }).then((responseJson) => {
      console.log(responseJson[0]); 
      console.log(responseJson[0].whatsapp); 
      setWhatsapp(responseJson[0].whatsapp);
      setName(responseJson[0].name);
    }).catch(error => {
      console.error(error);
    });
},[]);

const initiateWhatsApp = () => {
  //console.log(whatsapp);
 if(whatsapp){
  let url =
    'whatsapp://send?text=' + 
    "Halo, Saya ingin Pesan Kue ini , "+productName+
    '&phone=62' + whatsapp;
  Linking.openURL(url)
    .then((data) => {
      console.log('WhatsApp Opened');
    })
    .catch(() => {
      alert('Make sure Whatsapp installed on your device');
    });
  }else{
    useEffect;
  }
};
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <View style={styles.storeIcon}>
            <MaterialCommunityIcons name="storefront" size={240} color="#F57373" />
          </View>
          <View style={styles.nameWrapper}>
            <Text style={styles.name}>{name}</Text>
          </View>
          <View style={styles.buttonWrapper}>
  
            <TouchableOpacity style={styles.button} onPress={initiateWhatsApp}>
                <View style={styles.row}>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <MaterialCommunityIcons name="whatsapp" size={25} color="#FFFFFF" />
                </View>
                <View style={{ paddingLeft: 13, justifyContent: "center" }}>
                    <Text style={styles.buttonText}>Whatsapp</Text> 
              </View>
              </View>
            </TouchableOpacity>

        </View>
        </View>
      </ScrollView>
    );
  }

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
  },
  storeIcon: {
    marginTop: 30,
    alignSelf: "center",
  },
  nameWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  name: {
    color: "#F57373",
    fontWeight: "bold",
    fontSize: 40,
  },
  buttonWrapper: {
    width: 600,
    marginTop: 80,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#F57373",
    elevation: 8,
    borderRadius: 30,
    height: 45,
    justifyContent: "center",
    width: 350,
    alignSelf: "center",
  },
  row: {
    paddingBottom: 6,
    paddingTop: 6,
    marginRight: 40,
    marginLeft: 40,
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonText: {
    alignSelf: "center",
    justifyContent: "center",
    color: "#FFFFFF",
    fontSize: 24,
    fontFamily: "Roboto",
  },
});
export default Order;
