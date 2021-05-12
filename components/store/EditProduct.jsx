import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image, StatusBar, ToastAndroid } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useSelector } from "react-redux";

const EditProduct = (props) => {
  const token = useSelector((data) => data.user.token);
  const [status, setStatus] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [jenis, setJenis] = useState("");
  const [expired, setExpired] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const { productId } = props.route.params;

  useEffect(() => {
    fetch("https://pamparampam.herokuapp.com/api/productdetail", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: productId,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then((responseJson) => {
        console.log("laman edit");
        console.log(responseJson);
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

  const editProduct = () => {
    fetch("https://pamparampam.herokuapp.com/api/editproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: productId,
        pd_name: productName,
        pd_harga: price,
        pd_berat: weight,
        pd_jenis: jenis,
        pd_expired: expired,
        pd_desc: deskripsi,
        pd_status: status,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Product updated");
          return response.json();
        } else {
          console.log("Gagal update");
        }
      })
      .then((responseJson) => {
        console.log(responseJson);
        props.navigation.navigate("StoreProduct");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ flex: 1, alignItems: "center", paddingBottom: 50 }}>
        <View style={styles.textInputWrapper}>
          <TextInput style={styles.textInput} onChangeText={(productName) => setProductName(productName)} value={productName} placeholder="Product Name" placeholderTextColor="grey" />
          <TextInput keyboardType="numeric" style={styles.textInput} onChangeText={(price) => setPrice(price)} value={price} placeholder="Price" placeholderTextColor="grey" />
          <TextInput style={styles.textInput} onChangeText={(weight) => setWeight(weight)} value={weight} placeholder="Weight" placeholderTextColor="grey" />
          <TextInput style={styles.textInput} onChangeText={(jenis) => setJenis(jenis)} value={jenis} placeholder="Jenis" placeholderTextColor="grey" />
          <TextInput style={styles.textInput} onChangeText={(expired) => setExpired(expired)} value={expired} placeholder="Expired" placeholderTextColor="grey" />
          <TextInput style={styles.textareaInput} multiline={true} numberOfLines={6} onChangeText={(deskripsi) => setDeskripsi(deskripsi)} value={deskripsi} placeholder="Type the description here ..." placeholderTextColor="grey" />

          <View style={styles.dropdownWrapper}>
            <DropDownPicker
              placeholder="Status"
              items={[
                { label: "Ready Stock", value: "Ready Stock" },
                { label: "Out Of Stock", value: "Out Of Stock" },
              ]}
              containerStyle={{ height: 40 }}
              style={{ backgroundColor: "white" }}
              itemStyle={{
                justifyContent: "flex-start",
              }}
              dropDownStyle={{ backgroundColor: "white" }}
              onChangeItem={(item) => setStatus(item.value)}
            />
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={editProduct}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  dropdownWrapper: {
    width: 200,
    alignSelf: "flex-start",
    marginTop: 20,
  },

  textInputWrapper: {
    marginBottom: 10,
    width: 350,
  },
  textInput: {
    color: "#000000",
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  textareaInput: {
    color: "#000000",
    marginTop: 30,
    borderWidth: 1,
    paddingLeft: 5,
    paddingTop: 10,
    textAlignVertical: "top",
  },
  buttonWrapper: {
    width: 350,
    marginTop: 30,
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#F57373",
    elevation: 8,
    borderRadius: 30,
    height: 45,
    justifyContent: "center",
    width: 250,
    alignSelf: "center",
  },
  buttonText: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "#FFFFFF",
    fontSize: 18,
  },
  orText: {
    fontSize: 20,
    alignSelf: "center",
    color: "#808080",
    marginTop: 10,
    marginBottom: 10,
  },
});

export default EditProduct;
