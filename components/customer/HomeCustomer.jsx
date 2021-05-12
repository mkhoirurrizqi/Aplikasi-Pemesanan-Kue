import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View,RefreshControl, TextInput, ScrollView, TouchableOpacity, Image, StatusBar, ToastAndroid } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const HomeCustomer = (props) => {
  const token = useSelector((data) => data.user.token);
  const [storeArray, setStoreArray] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    listtoko();
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  useEffect(() => {
    listtoko();
  }, []);
  const listtoko = () => {
  fetch("https://pamparampam.herokuapp.com/api/alluser", {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type: "toko",
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then((responseJson) => {
      setStoreArray([]);
      responseJson.forEach((element) => {
        setStoreArray((storeArray) => [
          ...storeArray,
          {
            id: element.id,
            name: element.name,
            kelurahan: element.kelurahan,
            kecamatan: element.kecamatan,
          },
        ]);
      });
      console.log(responseJson);
      console.log(storeArray);
    })
    .catch((error) => {
      console.error(error);
    });
  }
  return (
    <ScrollView style={{ backgroundColor: "white" }} refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    }>
      <View style={styles.container}>
        <Text style={styles.header}>Toko Parampam</Text>
        <View style={styles.allStore}>
          {storeArray.map((store, i) => {
            return (
              <View style={styles.store} key={i}>
                <View style={styles.content}>
                  <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                    <MaterialCommunityIcons name="storefront" size={40} color={"#F57373"} />
                  </View>
                  <View style={{ flex: 10, justifyContent: "center" }}>
                    <Text style={styles.storeName}>{store.name}</Text>
                    <Text style={styles.storeAddress}>
                      {store.kelurahan}, {store.kecamatan}
                    </Text>
                  </View>
                  <View style={{ flex: 4, alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() =>
                        props.navigation.navigate("ListProduct", {
                          storeId: store.id,
                        })
                      }
                    >
                      <Text style={styles.buttonText}>See Store</Text>
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
