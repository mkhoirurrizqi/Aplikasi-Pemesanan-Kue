import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image, StatusBar, ToastAndroid } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import NumberFormat from 'react-number-format';
export function ReactNativeNumberFormat({ value }) {
  return (
    <NumberFormat
      value={value}
      displayType={'text'}
      thousandSeparator={'.'} 
      decimalSeparator={','}
      prefix={'Rp. '}
      renderText={formattedValue => <Text>{formattedValue}</Text>} 
    />
  );
}
const DetailProduct  = (props) => {
  const token = useSelector((data) => data.user.token);
  const [status, setStatus] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [jenis, setJenis] = useState("");
  const [expired, setExpired] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [userproduct, setUserproduct] = useState("");
  const { pdId } = props.route.params;
  const cekstatus = () => {
    return (status == "Ready Stock");
  }
  useEffect(() => {
    fetch("https://pamparampam.herokuapp.com/api/productdetail", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: pdId,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then((responseJson) => {
        console.log("laman edit");
        console.log(responseJson);
        setUserproduct(responseJson.user_id);
        setProductName(responseJson.pd_name);
        setPrice(responseJson.pd_harga);
        setWeight(responseJson.pd_berat);
        setJenis(responseJson.pd_jenis);
        setExpired(responseJson.pd_expired);
        setDeskripsi(responseJson.pd_desc);
        setStatus(responseJson.pd_status);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  const cekorder = () => {
    if(cekstatus()){
      props.navigation.navigate("OrderPage", {
        userId: userproduct, productName: productName,})
    }else{
      toastcantorder()
    }
  };
  const toastcantorder = () => {
    ToastAndroid.show("Product Out Of Stock", ToastAndroid.SHORT);
  };
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
        <View style={{ flex: 2, alignItems: "center", justifyContent: "center" ,paddingTop: 20}}>
                    <MaterialCommunityIcons name="cupcake" size={120} color={"#F57373"} />
                  </View>
          <View style={styles.nameWrapper}>
            <Text style={styles.name}>{productName}</Text>
          </View>
      
          <Text style={[(cekstatus()) ? styles.text1Ready : styles.text1StatusOut]}> {status}</Text>
          <Text style={[(cekstatus()) ? styles.text1Ready : styles.text1Out]}> Berat  : {weight}</Text>
          <Text style={[(cekstatus()) ? styles.text1Ready : styles.text1Out]}> Exp    : {expired} </Text>
          <Text style={[(cekstatus()) ? styles.text1Ready : styles.text1Out]}> Harga  :<ReactNativeNumberFormat value={price} /></Text>
          <Text style={[(cekstatus()) ? styles.text1Ready : styles.text1Out]}> Jenis  : {jenis}</Text>
     
            <Text style={[(cekstatus()) ? styles.text2 : styles.text2Out]}>{deskripsi}</Text>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={[(cekstatus()) ? styles.button : styles.buttonOut]} onPress={cekorder}>
              <Text style={styles.buttonText}>Order Now</Text> 
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
  photo: {
      width: 300,
      height: 150,
      alignSelf: "center",
      marginHorizontal: 'auto',
      marginVertical: 25,
      justifyContent: "center",
  },
  nameWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  name: {
    color: "#F57373",
    fontWeight: "bold",
    fontSize: 40,
    paddingBottom: 20,
  },
  text1Ready: {
      color:"#F57373",
      fontSize: 20,
      textAlign: "left",
      fontFamily: "Roboto",
      paddingLeft: 20,
  },
  text1Out: {
      color:"#808080",
      fontSize: 20,
      textAlign: "left",
      fontFamily: "Roboto",
      paddingLeft: 20,
  },
  text1StatusOut: {
    color:"red",
    fontSize: 20,
    textAlign: "left",
    fontFamily: "Roboto",
    paddingLeft: 20,
},
    text2: {
        color: "#F57373",
        fontSize: 20,
        textAlign: "justify",    
        fontFamily: "Roboto",
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
  },
  text2Out: {
    color: "#808080",
    fontSize: 20,
    textAlign: "justify",    
    fontFamily: "Roboto",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
},
  buttonWrapper: {
    width: 600,
    marginTop: 40,
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
  buttonOut: {
    backgroundColor: "#808080",
    elevation: 8,
    borderRadius: 30,
    height: 45,
    justifyContent: "center",
    width: 350,
    alignSelf: "center",
  },
  buttonText: {
    alignSelf: "center",
    justifyContent: "center",
    color: "#FFFFFF",
    fontSize: 24,
    fontFamily: "Roboto",
  },
});

export default DetailProduct;