import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image, StatusBar, ToastAndroid } from "react-native";

const EditProfile = (props) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_pasword] = useState("");
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
      <ScrollView>
        <Text style={styles.header}>Edit Profile</Text>
        <View style={styles.textInputWrapper}>
          <TextInput style={styles.textInput} onChangeText={(name) => setName(name)} value={name} placeholder="Name" placeholderTextColor="grey" />
          <TextInput style={styles.textInput} onChangeText={(username) => setUsername(username)} value={username} placeholder="Username" placeholderTextColor="grey" />
          <TextInput keyboardType="numeric" style={styles.textInput} onChangeText={(whatsapp) => setWhatsapp(whatsapp)} value={whatsapp} placeholder="Whatsapp" placeholderTextColor="grey" />
          <TextInput style={styles.textInput} onChangeText={(Email) => setEmail(Email)} value={email} placeholder="Email" placeholderTextColor="grey" />
          <TextInput secureTextEntry={true} style={styles.textInput} onChangeText={(password) => setPassword(password)} value={password} placeholder="Password" placeholderTextColor="grey" />
          <TextInput secureTextEntry={true} style={styles.textInput} onChangeText={(Confirm_password) => setConfirm_pasword(Confirm_password)} value={confirm_password} placeholder="Confirmation Password" placeholderTextColor="grey" />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Profile")}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
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
