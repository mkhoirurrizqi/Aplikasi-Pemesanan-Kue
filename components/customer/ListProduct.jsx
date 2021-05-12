import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View,RefreshControl, TextInput, ScrollView, TouchableOpacity, Image, StatusBar, ToastAndroid } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NumberFormat from "react-number-format";
import { useSelector } from "react-redux";
export function ReactNativeNumberFormat({ value }) {
  return <NumberFormat value={value} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} prefix={"Rp. "} renderText={(formattedValue) => <Text>{formattedValue}</Text>} />;
}
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const ListProduct = (props) => {
  const token = useSelector((data) => data.user.token);
  const [productArray, setProductArray] = useState("");
  const { storeId } = props.route.params;

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    list_product();
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    list_product();
  }, []);
  const list_product = () => {
    fetch("https://pamparampam.herokuapp.com/api/storeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: storeId,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then((responseJson) => {
        setProductArray([]);
        responseJson.forEach((element) => {
          setProductArray((productArray) => [
            ...productArray,
            {
              id: element.id,
              name: element.pd_name,
              jenis: element.pd_jenis,
              price: element.pd_harga,
              status: element.pd_status,
            },
          ]);
        });
        console.log(responseJson);
        console.log(storeId);
        // console.log(productArray);
      })
      .catch((error) => {
        console.error(error);
      });
    }
    const cekstatus = (status) => {
      return (status == "Ready Stock");
    }
  return (
    <ScrollView style={{ backgroundColor: "white" }}  refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    }>
      <View style={styles.container}>
        <View style={styles.allProduct}>
          {productArray
            ? productArray.map((product, i) => {
                return (
                  <View style={styles.product} key={i}>
                    <View style={styles.content}>
                      <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                        <MaterialCommunityIcons name="cake" size={30} color={(cekstatus(product.status)) ? "#F57373" : "#808080"} />
                      </View>
                      <View style={{ flex: 7, justifyContent: "center" }}>
                        <Text style={[(cekstatus(product.status)) ? styles.CakeName : styles.CakeName1 ]}>{product.name} </Text>
                        <Text style={[(cekstatus(product.status)) ? styles.KindOfCake : styles.KindOfCake1]}>{product.jenis}</Text>
                        <Text style={[(cekstatus(product.status)) ? styles.Price : styles.Price1]}>
                          <ReactNativeNumberFormat value={product.price} />
                        </Text>
                      </View>
                      <View style={{ flex: 4, alignItems: "center", justifyContent: "center" }}>
                        <TouchableOpacity style={[(cekstatus(product.status)) ? styles.button : styles.button1]} onPress={() => props.navigation.navigate("DetailProduct", {
                          pdId: product.id,
                        })
                      }>
                          <Text style={styles.buttonText}>See Product</Text>
                        </TouchableOpacity>
                        <Text style={styles.information}>{product.status}</Text>
                      </View>
                    </View>
                  </View>
                );
              })
            : useEffect}
          {}
          {/* <View style={styles.product}>
            <View style={styles.content}>
              <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                <MaterialCommunityIcons name="cake" size={30} color={"#F57373"} />
              </View>
              <View style={{ flex: 7, justifyContent: "center" }}>
                <Text style={styles.CakeName}>Nastar </Text>
                <Text style={styles.KindOfCake}>Kue Kering</Text>
                <Text style={styles.Price}>
                  <ReactNativeNumberFormat value={75000} />
                </Text>
              </View>
              <View style={{ flex: 4, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("DetailProduct")}>
                  <Text style={styles.buttonText}>See Product</Text>
                </TouchableOpacity>
                <Text style={styles.information}>Ready Stock</Text>
              </View>
            </View>
          </View>
          <View style={styles.product}>
            <View style={styles.content}>
              <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                <MaterialCommunityIcons name="cake" size={30} color={"#808080"} />
              </View>
              <View style={{ flex: 7, justifyContent: "center" }}>
                <Text style={styles.CakeName1}>Engkak &nbsp; &nbsp; </Text>
                <Text style={styles.KindOfCake1}>Kue Basah</Text>
                <Text style={styles.Price1}>
                  <ReactNativeNumberFormat value={70000} />
                </Text>
              </View>
              <View style={{ flex: 4, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity style={styles.button1} onPress={() => props.navigation.navigate("")}>
                  <Text style={styles.buttonText}>See Product</Text>
                </TouchableOpacity>
                <Text style={styles.information1}>Out Of Stock</Text>
              </View>
            </View>
          </View> */}
        </View>
      </View>
    </ScrollView>
  );
};

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
