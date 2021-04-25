import React from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image, StatusBar, ToastAndroid } from "react-native";

const DetailProduct  = (props) => {
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
            <Image style={styles.photo}
            source={{
                uri: 'https://cdn.idntimes.com/content-images/community/2019/05/screenshot-2019-05-07-21-54-56-1-56b43c07a25069cdf30a96dd2b6fc162_600x400.png'
            }}
          />
          <View style={styles.nameWrapper}>
            <Text style={styles.name}>Nastar</Text>
          </View>
          <Text style={styles.text1}> Ready Stock </Text>
          <Text style={styles.text1}> Berat  : 500 Gram </Text>
          <Text style={styles.text1}> Exp    : 20 Desember 2021 </Text>
          <Text style={styles.text1}> Harga  : Rp 75.000 </Text>
          <Text style={styles.text1}> Jenis  : Kue Kering </Text>

            <Text style={styles.text2}>Nastar adalah sejenis kue kering dari adonan tepung terigu, mentega dan telur yang diisi dengan selai buah nanas. Asal katanya dari bahasa Belanda ananas dan taart. 
                    Bentuk kue ini bulat-bulat dengan diameter sekitar 2 cm, di atasnya sering dihias dengan parutan keju.</Text>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("OrderPage")}>
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
  text1: {
      color: "#F57373",
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
  buttonText: {
    alignSelf: "center",
    justifyContent: "center",
    color: "#FFFFFF",
    fontSize: 24,
    fontFamily: "Roboto",
  },
});

export default DetailProduct;