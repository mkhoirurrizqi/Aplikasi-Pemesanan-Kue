import React from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image, StatusBar, ToastAndroid } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

class HomeCustomer extends React.Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <Text style={styles.header}>Toko Parampam</Text>
          <View style={styles.allStore}>
            <View style={styles.store}>
              <View style={styles.content}>
                <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                  <MaterialCommunityIcons name="storefront" size={40} color={"#F57373"} />
                </View>
                <View style={{ flex: 10, justifyContent: "center" }}>
                  <Text style={styles.storeName}>Toko Joko</Text>
                  <Text style={styles.storeAddress}>Tanjung Senang, Tanjung Senang</Text>
                </View>
                <View style={{ flex: 4, alignItems: "center", justifyContent: "center" }}>
                  <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("")}>
                    <Text style={styles.buttonText}>See Store</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.store}>
              <View style={styles.content}>
                <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                  <MaterialCommunityIcons name="storefront" size={40} color={"#F57373"} />
                </View>
                <View style={{ flex: 10, justifyContent: "center" }}>
                  <Text style={styles.storeName}>Toko Pakde Mar</Text>
                  <Text style={styles.storeAddress}>Way Kandis, Tanjung Senang</Text>
                </View>
                <View style={{ flex: 4, alignItems: "center", justifyContent: "center" }}>
                  <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("")}>
                    <Text style={styles.buttonText}>See Store</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    alignSelf: "center",
  },
  allStore: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 40,
  },
  store: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 10,
    paddingTop: 10,
  },
  content: {
    flexDirection: "row",
  },
  storeName: {
    color: "#F57373",
    fontSize: 17,
    fontWeight: "bold",
  },
  storeAddress: {
    color: "#F57373",
    fontSize: 12,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#F57373",
    elevation: 8,
    borderRadius: 30,
    height: 25,
    justifyContent: "center",
    width: 70,
    alignSelf: "center",
  },
  buttonText: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "#FFFFFF",
    fontSize: 10,
  },
});

export default HomeCustomer;
