import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image, StatusBar, ToastAndroid } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const StoreProduct = (props) => {
  const [productName, setProductName] = useState("");
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.allProduct}>
          <View style={styles.product}>
            <View style={styles.button2}>
              <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("AddProduct")}>
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.content}>
              <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                <MaterialCommunityIcons name="cake" size={30} color={"#F57373"} />
              </View>
              <View style={{ flex: 7, justifyContent: "center" }}>
                <Text style={styles.CakeName}>Kaastengels </Text>
              </View>
              <View style={{ flex: 7, alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("EditProduct")}>
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("")}>
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.product}>
            <View style={styles.content}>
              <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                <MaterialCommunityIcons name="cake" size={30} color={"#F57373"} />
              </View>
              <View style={{ flex: 7, justifyContent: "center" }}>
                <Text style={styles.CakeName}>Putri Salju</Text>
              </View>
              <View style={{ flex: 7, alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("EditProduct")}>
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("")}>
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.product}>
            <View style={styles.content}>
              <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                <MaterialCommunityIcons name="cake" size={30} color={"#F57373"} />
              </View>
              <View style={{ flex: 7, justifyContent: "center" }}>
                <Text style={styles.CakeName}>Nastar</Text>
              </View>
              <View style={{ flex: 7, alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("EditProduct")}>
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("")}>
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.product}>
            <View style={styles.content}>
              <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                <MaterialCommunityIcons name="cake" size={30} color={"#F57373"} />
              </View>
              <View style={{ flex: 7, justifyContent: "center" }}>
                <Text style={styles.CakeName}>Choco Chips &ensp;</Text>
              </View>
              <View style={{ flex: 7, alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("EditProduct")}>
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("")}>
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.product}>
            <View style={styles.content}>
              <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                <MaterialCommunityIcons name="cake" size={30} color={"#F57373"} />
              </View>
              <View style={{ flex: 7, justifyContent: "center" }}>
                <Text style={styles.CakeName}>Wafer Keju</Text>
              </View>
              <View style={{ flex: 7, alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("EditProduct")}>
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("")}>
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.product}>
            <View style={styles.content}>
              <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                <MaterialCommunityIcons name="cake" size={30} color={"#F57373"} />
              </View>
              <View style={{ flex: 7, justifyContent: "center" }}>
                <Text style={styles.CakeName}>Sagu Keju</Text>
              </View>
              <View style={{ flex: 7, alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("EditProduct")}>
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("")}>
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.product}>
            <View style={styles.content}>
              <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                <MaterialCommunityIcons name="cake" size={30} color={"#F57373"} />
              </View>
              <View style={{ flex: 7, justifyContent: "center" }}>
                <Text style={styles.CakeName1}>Legit</Text>
              </View>
              <View style={{ flex: 7, alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("EditProduct")}>
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("")}>
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.product}>
            <View style={styles.content}>
              <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                <MaterialCommunityIcons name="cake" size={30} color={"#F57373"} />
              </View>
              <View style={{ flex: 7, justifyContent: "center" }}>
                <Text style={styles.CakeName1}>Engkak &nbsp; &nbsp; </Text>
              </View>
              <View style={{ flex: 7, alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("EditProduct")}>
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("")}>
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// class StoreProduct extends React.Component {
//   render() {

//   }
// }

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    alignSelf: "center",
    color: "#F57373",
  },
  allProduct: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  product: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 15,
    paddingTop: 15,
  },
  content: {
    flexDirection: "row",
  },
  CakeName: {
    color: "#F57373",
    fontSize: 17,
    fontWeight: "bold",
  },
  CakeName1: {
    color: "#F57373",
    fontSize: 17,
    fontWeight: "bold",
  },
  KindOfCake: {
    color: "#F57373",
    fontSize: 12,
    fontWeight: "bold",
  },
  KindOfCake1: {
    color: "#808080",
    fontSize: 12,
    fontWeight: "bold",
  },
  Price: {
    color: "#F57373",
    fontSize: 12,
    fontWeight: "bold",
  },
  Price1: {
    color: "#808080",
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
    alignSelf: "auto",
    marginLeft: 10,
  },
  button1: {
    backgroundColor: "#808080",
    elevation: 8,
    borderRadius: 30,
    height: 25,
    justifyContent: "center",
    width: 70,
    alignSelf: "auto",
  },
  button2: {
    paddingBottom: 15,
  },
  buttonText: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "#FFFFFF",
    fontSize: 10,
  },
  information: {
    color: "#F57373",
    fontSize: 10,
    fontWeight: "bold",
    alignItems: "flex-end",
  },
  information1: {
    color: "#E81B1B",
    fontSize: 10,
    fontWeight: "bold",
    alignItems: "flex-end",
  },
});

export default StoreProduct;
