import React from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image, StatusBar, ToastAndroid } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Order  = (props) => {
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <View style={styles.storeIcon}>
            <MaterialCommunityIcons name="storefront" size={240} color="#F57373" />
          </View>
          <View style={styles.nameWrapper}>
            <Text style={styles.name}>Toko Joko</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("")}>
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
