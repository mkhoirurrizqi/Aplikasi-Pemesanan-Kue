import React, { useState,useEffect } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Alert, Image, StatusBar, ToastAndroid } from "react-native";
import {  useSelector } from 'react-redux';

const EditProfile = (props) => {
  const token = useSelector(data => data.user.token);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_pasword] = useState("");

  useEffect(() => {
      fetch('https://pamparampam.herokuapp.com/api/user',{
        method:'GET',
        headers: {
          Accept: 'application/json',
          'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
        },
      })  
      .then(function(response) {
        return response.json()
      }).then((responseJson) => {
        console.log(responseJson); 
        setId(responseJson.id);
        setName(responseJson.name);
        setUsername(responseJson.username);
        setWhatsapp(responseJson.whatsapp);
        setEmail(responseJson.email);
        setKecamatan(responseJson.kecamatan);
        setKelurahan(responseJson.kelurahan);
      }).catch(error => {
        console.error(error);
      });
  },[]);
  const edituserpost =() => {
    if(password != confirm_password){
      Alert.alert('Password dan Re-password tidak sama');
    }else{
    fetch('https://pamparampam.herokuapp.com/api/edituser', {
        method: 'POST',
        headers: {
                  Accept: 'application/json',
                  'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
                },
        body: JSON.stringify({
          id: id,
          name : name,
          username :username,
          whatsapp :whatsapp,
          email :email,
          kecamatan :kecamatan,
          kelurahan :kelurahan,
          password :password
          })
        })
        .then((response) => {
          if (response.status === 200) {
            Alert.alert('Edit Profile Berhasil');
            return response.json()
          } else {
            Alert.alert('Edit Profile Gagal');
            throw new Error('Something went wrong on api server!');
          }
        })
        .then((responseJson) => {
          console.log(responseJson);
          props.navigation.navigate("Profile")
        }).catch(error => {
        console.error(error);
      });
      
    }
  };
  return (
      <ScrollView>
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
        <Text style={styles.header}>Edit Profile</Text>
        <View style={styles.textInputWrapper}>
        <TextInput style={styles.textInput} onChangeText={(name) => setName( name )} value={name} placeholder="Name" placeholderTextColor="grey" />
          <TextInput style={styles.textInput} onChangeText={(username) => setUsername( username )} value={username} placeholder="Username" placeholderTextColor="grey" />
          <TextInput keyboardType="numeric" style={styles.textInput} onChangeText={(whatsapp) => setWhatsapp( whatsapp )} value={whatsapp} placeholder="Whatsapp" placeholderTextColor="grey" />
          <TextInput style={styles.textInput} onChangeText={(Email) => setEmail( Email )} value={email} placeholder="Email" placeholderTextColor="grey" />
          <TextInput style={styles.textInput} onChangeText={(Kecamatan) => setKecamatan( Kecamatan )} value={kecamatan} placeholder="Kecamatan" placeholderTextColor="grey" />
          <TextInput style={styles.textInput} onChangeText={(kelurahan) => setKelurahan( kelurahan )} value={kelurahan} placeholder="Kelurahan" placeholderTextColor="grey" />
          <TextInput secureTextEntry={true} style={styles.textInput} onChangeText={(password) => setPassword( password )} value={password} placeholder="Password" placeholderTextColor="grey" />
          <TextInput secureTextEntry={true} style={styles.textInput} onChangeText={(Confirm_password) => setConfirm_pasword( Confirm_password )} value={confirm_password} placeholder="Confirmation Password" placeholderTextColor="grey" />
       </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={edituserpost}>
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
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
  },
  textInputWrapper: {
    marginTop: 40,
    marginBottom: 10,
    width: 350,
  },
  textInput: {
    color: "#000000",
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: "black",
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

export default EditProfile;
