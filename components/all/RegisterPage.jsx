import React from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image, StatusBar, ToastAndroid } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      role: "",
      name: "",
      username: "",
      whatsapp: "",
      Email: "",
      Kecamatan: "",
      kelurahan: "",
      password: "",
      Confirm_password: "",
      
    };
  }
  render() {
    return (
      <ScrollView >
        <View style={{ flex: 1, alignItems: 'center' ,backgroundColor:"white"}}>
        <Text style={styles.header}>Register</Text>
        <View style={styles.textInputWrapper}>
        <View style={styles.dropdownWrapper}>
        <DropDownPicker 
            placeholder="Account type"
            items={[
                {label: 'Store', value: 'Store'},
                {label: 'Costumer', value: 'Costumer'},
             ]}
            containerStyle={{height: 40}}
            style={{backgroundColor: "white"}}
            itemStyle={{
                 justifyContent: 'flex-start'
            }}
            dropDownStyle={{backgroundColor: "white"}}
            onChangeItem={item => this.setState({
                role: item.value
            })}
            />
            </View>
          <TextInput style={styles.textInput} onChangeText={(name) => this.setState({ name })} value={this.state.name} placeholder="Name" placeholderTextColor="grey" />
          <TextInput style={styles.textInput} onChangeText={(username) => this.setState({ username })} value={this.state.username} placeholder="Username" placeholderTextColor="grey" />
          <TextInput keyboardType="numeric" style={styles.textInput} onChangeText={(whatsapp) => this.setState({ whatsapp })} value={this.state.whatsapp} placeholder="Whatsapp" placeholderTextColor="grey" />
          <TextInput style={styles.textInput} onChangeText={(Email) => this.setState({ Email })} value={this.state.Email} placeholder="Email" placeholderTextColor="grey" />
          <TextInput style={styles.textInput} onChangeText={(Kecamatan) => this.setState({ Kecamatan })} value={this.state.Kecamatan} placeholder="Kecamatan" placeholderTextColor="grey" />
          <TextInput style={styles.textInput} onChangeText={(kelurahan) => this.setState({ kelurahan })} value={this.state.kelurahan} placeholder="Kelurahan" placeholderTextColor="grey" />
          <TextInput secureTextEntry={true} style={styles.textInput} onChangeText={(password) => this.setState({ password })} value={this.state.password} placeholder="Password" placeholderTextColor="grey" />
          <TextInput secureTextEntry={true} style={styles.textInput} onChangeText={(Confirm_password) => this.setState({ Confirm_password })} value={this.state.Confirm_password} placeholder="Confirmation Password" placeholderTextColor="grey" />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
dropdownWrapper:{
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

export default Register;
