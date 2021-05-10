import React, { useState,useEffect } from "react";
import { StyleSheet, Text, View, Alert,TextInput, ScrollView, TouchableOpacity, Image, StatusBar, ToastAndroid } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {  useSelector,useDispatch } from 'react-redux';
import { tokeniduser} from '../redux/action';

const Profile  = (props) => {
  const dispatch = useDispatch();
  const token = useSelector(data => data.user.token);
  const id = useSelector(data => data.user.id);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
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
      console.log(id); 
      setName(responseJson.name);
      setUsername(responseJson.username);
      setWhatsapp(responseJson.whatsapp);
      setEmail(responseJson.email);
    }).catch(error => {
      console.error(error);
    });
},[]);

const logoutpost =() => {
  fetch('https://pamparampam.herokuapp.com/api/logout', {
      method: 'POST',
      headers: {
                Accept: 'application/json',
                'Authorization': 'Bearer ' + token,
              'Content-Type': 'application/json'
              },
      body: JSON.stringify({
          token: token
        })
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(tokeniduser("",""))
          props.navigation.navigate("Login")
          return response.json()
        } else {
          Alert.alert('Logout Gagal');
          throw new Error('Something went wrong on api server!');
        }
      })
    
};
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <View style={styles.personIcon}>
            <Ionicons name="md-person-circle-outline" size={240} color="#F57373" />
          </View>
          <View style={styles.nameWrapper}>
            <Text style={styles.name}>{name}</Text>
            <Feather name="edit" size={15} color="#F57373" onPress={() => props.navigation.navigate("EditProfile")} />
          </View>
          <View style={styles.allRow}>
            <View style={styles.row}>
              <View style={styles.content}>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <MaterialCommunityIcons name="email-outline" size={25} color={"#F57373"} />
                </View>
                <View style={{ paddingLeft: 10, justifyContent: "center" }}>
                  <Text style={styles.teks}>{email}</Text>
                </View>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.content}>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Ionicons name="md-person" size={25} color="#F57373" />
                </View>
                <View style={{ paddingLeft: 10, justifyContent: "center" }}>
                  <Text style={styles.teks}>{username}</Text>
                </View>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.content}>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <FontAwesome name="whatsapp" size={25} color="#F57373" />
                </View>
                <View style={{ paddingLeft: 13, justifyContent: "center" }}>
                  <Text style={styles.teks}>{whatsapp}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.button} onPress={logoutpost}>
              <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
  },
  personIcon: {
    marginTop: 30,
    alignSelf: "center",
  },
  nameWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  name: {
    color: "#F57373",
    fontWeight: "bold",
    fontSize: 40,
  },
  allRow: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  row: {
    paddingBottom: 3,
    paddingTop: 3,
    marginRight: 25,
    marginLeft: 25,
    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    marginLeft: 40,
    marginRight: 40,
  },
  teks: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
  storeAddress: {
    color: "#F57373",
    fontSize: 12,
    fontWeight: "bold",
  },
  storeWazap: {
    color: "#F57373",
    fontSize: 13,
    fontWeight: "bold",
  },
  buttonWrapper: {
    width: 350,
    marginTop: 60,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#F57373",
    elevation: 8,
    borderRadius: 30,
    height: 40,
    justifyContent: "center",
    width: 200,
    alignSelf: "center",
  },
  buttonText: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "#FFFFFF",
    fontSize: 18,
  },
});
export default Profile;
