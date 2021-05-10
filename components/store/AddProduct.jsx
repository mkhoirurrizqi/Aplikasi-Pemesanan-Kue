import React, { useState } from "react";
import { StyleSheet, Text, View, Alert,TextInput, ScrollView, TouchableOpacity, Image, StatusBar, ToastAndroid } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import {  useSelector } from 'react-redux';

const AddProduct = (props) => {
  const token = useSelector(data => data.user.token);
  const [status, setStatus] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [jenis, setJenis] = useState("");
  const [expired, setExpired] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [photo, setPhoto] = useState("");
  const addproductpost =() => {
  
    fetch('https://pamparampam.herokuapp.com/api/addproduct', {
        method: 'POST',
        headers: {
                  Accept: 'application/json',
                  'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
                },
        body: JSON.stringify({
          pd_img: photo,
          pd_name: productName,
          pd_harga: price,
          pd_berat: weight,
          pd_expired: expired,
          pd_jenis: jenis,
          pd_desc: deskripsi,
          pd_status: status
          })
        })
        .then((response) => {
          if (response.status === 201) {
            return response.json()
          } else {
            Alert.alert('AddProduct Gagal');
            throw new Error('Something went wrong on api server!');
          }
        })
        .then((responseJson) => {
          console.log(responseJson);
          props.navigation.navigate("StoreProduct")
        }).catch(error => {
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
          <TextInput style={styles.textInput} onChangeText={(photo) => setPhoto(photo)} value={photo} placeholder="Choose File " placeholderTextColor="grey" />

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
              onChangeItem={(item) => setStatus(...status, item.value)}
            />
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={addproductpost}>
            <Text style={styles.buttonText}>Add</Text>
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
    marginTop: 60,
    marginBottom: 30,
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

export default AddProduct;
