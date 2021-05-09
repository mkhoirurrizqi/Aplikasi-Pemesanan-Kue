import React,{useState} from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Alert,Image, StatusBar, ToastAndroid } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
const Register  = (props) => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_pasword] = useState("");
  const registerpost =() => {
    if(password != confirm_password){
      Alert.alert('Password dan Re-password tidak sama');
    }else{
    fetch('https://pamparampam.herokuapp.com/api/register', {
        method: 'POST',
        headers: {
                  Accept: 'application/json',
                'Content-Type': 'application/json'
                },
        body: JSON.stringify({
          type : role,
          name : name,
          username : username,
          whatsapp : whatsapp,
          email : email,
          kecamatan : kecamatan,
          kelurahan : kelurahan,
          password : password,   
          })
        })
        .then((response) => {
          if (response.status === 201) {
            return response.json()
          } else {
            Alert.alert('Registrasi Gagal');
            throw new Error('Something went wrong on api server!');
          }
        })
        .then((responseJson) => {
          console.log(responseJson);
            props.navigation.navigate("Login")
        }).catch(error => {
        console.error(error);
      });
      
    }
  };
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
            onChangeItem={item => setRole(...role,item.value)}
            />
            </View>
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
          <TouchableOpacity style={styles.button} onPress={registerpost}>   
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    );
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
