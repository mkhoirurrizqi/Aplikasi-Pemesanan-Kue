import React,{useState} from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image, StatusBar, ToastAndroid } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
const ListProduct  = (props) => {
  const [cakename, setCakename] = useState("");
  const [kindofcake, setKindofcake] = useState("");
  const [price, setPrice] = useState("");
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <View style={styles.allProduct}>
            <View style={styles.product}>
              <View style={styles.content}>
                <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                  <MaterialCommunityIcons name="cake" size={30} color={"#F57373"} />
                </View>
                <View style={{ flex: 7, justifyContent: "center" }}>
                  <Text style={styles.CakeName}>Kaastengels </Text>
                  <Text style={styles.KindOfCake}>Kue Kering</Text>
                  <Text style={styles.Price}><ReactNativeNumberFormat value={70000} /></Text>
                  
                </View>
                <View style={{ flex: 4, alignItems: "center", justifyContent: "center" }}>
                  <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("")}>
                    <Text style={styles.buttonText}>See Product</Text>
                    </TouchableOpacity>
                    <Text style={styles.information}>Ready Stock</Text>
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
                  <Text style={styles.KindOfCake}>Kue Kering</Text>
                  <Text style={styles.Price}><ReactNativeNumberFormat value={70000} /></Text>
                </View>
                <View style={{ flex: 4, alignItems: "center", justifyContent: "center" }}>
                  <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("")}>
                    <Text style={styles.buttonText}>See Product</Text>
                    </TouchableOpacity>
                    <Text style={styles.information}>Ready Stock</Text>
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
                  <Text style={styles.KindOfCake}>Kue Kering</Text>
                  <Text style={styles.Price}><ReactNativeNumberFormat value={70000} /></Text>
                </View>
                <View style={{ flex: 4, alignItems: "center", justifyContent: "center" }}>
                  <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("")}>
                    <Text style={styles.buttonText}>See Product</Text>
                    </TouchableOpacity>
                    <Text style={styles.information}>Ready Stock</Text>
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
                  <Text style={styles.KindOfCake}>Kue Kering</Text>
                  <Text style={styles.Price}><ReactNativeNumberFormat value={70000} /></Text>
                </View>
                <View style={{ flex: 4, alignItems: "center", justifyContent: "center" }}>
                  <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("")}>
                    <Text style={styles.buttonText}>See Product</Text>
                    </TouchableOpacity>
                    <Text style={styles.information}>Ready Stock</Text>
                </View>
              </View>
            </View>
            <View style={styles.product}>
              <View style={styles.content}>
                <View style={{ flex: 2, alignItems: "center", justifyContent: "center"}}>
                  <MaterialCommunityIcons name="cake" size={30} color={"#F57373"} />
                </View>
                <View style={{ flex: 7, justifyContent: "center" }}>
                  <Text style={styles.CakeName}>Wafer Keju</Text>
                  <Text style={styles.KindOfCake}>Kue Kering</Text>
                  <Text style={styles.Price}><ReactNativeNumberFormat value={70000} /></Text>
                </View>
                <View style={{ flex: 4, alignItems: "center", justifyContent: "center" }}>
                  <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("")}>
                    <Text style={styles.buttonText}>See Product</Text>
                    </TouchableOpacity>
                    <Text style={styles.information}>Ready Stock</Text>
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
                  <Text style={styles.KindOfCake}>Kue Kering</Text>
                  <Text style={styles.Price}><ReactNativeNumberFormat value={70000} /></Text>
                </View>
                <View style={{ flex: 4, alignItems: "center", justifyContent: "center" }}>
                  <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("")}>
                    <Text style={styles.buttonText}>See Product</Text>
                    </TouchableOpacity>
                    <Text style={styles.information}>Ready Stock</Text>
                </View>
              </View>
            </View>
            <View style={styles.product}>
              <View style={styles.content}>
                <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                  <MaterialCommunityIcons name="cake" size={30} color={"#808080"}  />
                </View>
                <View style={{ flex: 7, justifyContent: "center" }}>
                  <Text style={styles.CakeName1}>Legit</Text>
                  <Text style={styles.KindOfCake1}>Kue Basah</Text>
                  <Text style={styles.Price1}><ReactNativeNumberFormat value={70000} /></Text>
                </View>
                <View style={{ flex: 4, alignItems: "center", justifyContent: "center" }}>
                  <TouchableOpacity style={styles.button1} onPress={() => props.navigation.navigate("")}>
                    <Text style={styles.buttonText}>See Product</Text>
                    </TouchableOpacity>
                    <Text style={styles.information1}>Out Of Stock</Text>
                </View>
              </View>
            </View>
            <View style={styles.product}>
              <View style={styles.content}>
                <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                  <MaterialCommunityIcons name="cake" size={30} color={"#808080"} />
                </View>
                <View style={{ flex: 7, justifyContent: "center" }}>
                  <Text style={styles.CakeName1}>Engkak  &nbsp; &nbsp; </Text>
                  <Text style={styles.KindOfCake1}>Kue Basah</Text>
                  <Text style={styles.Price1}><ReactNativeNumberFormat value={70000} /></Text>
                </View>
                <View style={{ flex: 4, alignItems: "center", justifyContent: "center" }}>
                  <TouchableOpacity style={styles.button1} onPress={() => props.navigation.navigate("")}>
                    <Text style={styles.buttonText}>See Product</Text>
                    </TouchableOpacity>
                    <Text style={styles.information1}>Out Of Stock</Text>
                </View>
            </View>
          </View>
        </View>
        </View>
      </ScrollView>
    );
}


const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
  },
  allProduct: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  product: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 10,
    paddingTop: 10,
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
    color: "#808080",
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

export default ListProduct;