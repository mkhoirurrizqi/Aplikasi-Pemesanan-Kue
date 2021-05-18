import React,{useState} from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity,Alert, Image, StatusBar, ToastAndroid } from "react-native";
import { tokeniduser} from '../redux/action';
import { useDispatch} from 'react-redux';
const Login  = (props) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const loginpost =() => {
    fetch('https://pamparampam.herokuapp.com/api/login', {
        method: 'POST',
        headers: {
                  Accept: 'application/json',
                'Content-Type': 'application/json'
                },
        body: JSON.stringify({
            username: username,
            password: password,
            device_name:'mobile'
          })
        })
        .then((response) => {
          if (response.status === 201) {
            return response.json()
          } else {
            Alert.alert('Login Gagal');
            throw new Error('Something went wrong on api server!');
          }
        })
        .then((responseJson) => {
          console.log(responseJson.token);
          setToken(responseJson.token);
          dispatch(tokeniduser(responseJson.token,responseJson.user.id))
          if(responseJson.type == 'toko'){
            props.navigation.navigate('StoreProduct')
          }else{
            props.navigation.navigate("HomeCustomer")
          }
        }).catch(error => {
        console.error(error);
      });
      
  };
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <Text style={styles.header}>Welcome</Text>
          <View style={styles.textInputWrapper}>
            <TextInput style={styles.textInput} onChangeText={(username) => setUsername( username )} value={username} placeholder="Username" placeholderTextColor="grey" />
            <TextInput secureTextEntry={true} style={styles.textInput} onChangeText={(password) => setPassword( password )} value={password} placeholder="Password" placeholderTextColor="grey" />
          </View>
          <View style={styles.buttonWrapper}>
            {/* <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("HomeCustomer")}> */}
            <TouchableOpacity style={styles.button} onPress={loginpost}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>or</Text>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Register")}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingBottom: 50,
  },
  header: {
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 100,
    alignSelf: "center",
  },
  textInputWrapper: {
    marginTop: 40,
    marginBottom: 20,
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

export default Login;
