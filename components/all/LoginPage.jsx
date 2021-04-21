import React from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image, StatusBar, ToastAndroid } from "react-native";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      username: "",
      password: "",
    };
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' ,backgroundColor:"white"}}>
        <Text style={styles.header}>Welcome</Text>
        <View style={styles.textInputWrapper}>
          <TextInput style={styles.textInput} onChangeText={(username) => this.setState({ username })} value={this.state.username} placeholder="Username" placeholderTextColor="grey" />
          <TextInput secureTextEntry={true} style={styles.textInput} onChangeText={(password) => this.setState({ password })} value={this.state.password} placeholder="Password" placeholderTextColor="grey" />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.orText}>or</Text>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
