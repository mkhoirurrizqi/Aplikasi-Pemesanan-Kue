import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View,RefreshControl, TextInput, ScrollView, TouchableOpacity, Image, StatusBar, ToastAndroid } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const StoreProduct = (props) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    data();
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const token = useSelector((data) => data.user.token);
  const [productArray, setProductArray] = useState([]);
  const id = useSelector((data) => data.user.id);
  
  
  useEffect(() => {
    data();
  }, []);

  const data = () => {
    fetch("https://pamparampam.herokuapp.com/api/storeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: id,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then((responseJson) => {
        setProductArray([]);
        if(responseJson !={}){
        responseJson.forEach((element) => {
          setProductArray((productArray) => [
            ...productArray,
            {
              id: element.id,
              name: element.pd_name,
            },
          ]);
        });
      }
        console.log(responseJson);
        console.log(id);
        console.log(productArray);
      })
      .catch((error) => {
        console.error(error);
      });
    }

  const deleteProduct = (productId) => {
    fetch("https://pamparampam.herokuapp.com/api/deleteproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: productId,
      }),
    }).then((response) => {
      if (response.status === 200) {
        toastDeleteSucceed();
        return response.json();
      } else {
        toastDeleteFailed();
        console.log("gagal");
        console.log(response.status);
      }
    });
    console.log("coba");
    console.log(productId);
  };

  const toastDeleteFailed = () => {
    ToastAndroid.show("Data Gagal Dihapus", ToastAndroid.SHORT);
  };

  const toastDeleteSucceed = () => {
    ToastAndroid.show("Data Berhasil Dihapus", ToastAndroid.SHORT);
  };

  const refresh = () => {};

  return (
    <ScrollView style={{ backgroundColor: "white" }} refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    }>
      <View style={styles.container}>

        <View style={styles.allProduct}>
          <View style={styles.button2}>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("AddProduct")}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
          {productArray.map((product, i) => {
            return (
              <View style={styles.product} key={i}>
                <View style={styles.content}>
                  <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                    <MaterialCommunityIcons name="cake" size={30} color={"#F57373"} />
                  </View>
                  <View style={{ flex: 7, justifyContent: "center" }}>
                    <Text style={styles.CakeName}>{product.name}</Text>
                  </View>
                  <View style={{ flex: 7, alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() =>
                        props.navigation.navigate("EditProduct", {
                          productId: product.id,
                        })
                      }
                    >
                      <Text style={styles.buttonText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => deleteProduct(product.id)}>
                      <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

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
