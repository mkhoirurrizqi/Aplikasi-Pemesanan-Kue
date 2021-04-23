import React from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image, StatusBar, ToastAndroid } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      role: "",
      productname: "",
      price: "",
      weight: "",
      jenis: "",
      expired: "",
      deskripsi: "",
      photo: "",
    };
  }
  render() {
    return (
      <ScrollView >
        <View style={{ flex: 1, alignItems: 'center' ,backgroundColor:"white"}}>
        <Text style={styles.header}>Add Product</Text>
        <View style={styles.textInputWrapper}>
          <TextInput style={styles.textInput} onChangeText={(productname) => this.setState({ productname })} value={this.state.productname} placeholder="Product Name" placeholderTextColor="grey" />
          <TextInput keyboardType="numeric" style={styles.textInput} onChangeText={(price) => this.setState({ price })} value={this.state.price} placeholder="Price" placeholderTextColor="grey" />
          <TextInput style={styles.textInput} onChangeText={(weight) => this.setState({ weight })} value={this.state.weight} placeholder="Weight" placeholderTextColor="grey" />
          <TextInput style={styles.textInput} onChangeText={(jenis) => this.setState({ jenis })} value={this.state.jenis} placeholder="Jenis" placeholderTextColor="grey" />
          <TextInput style={styles.textInput} onChangeText={(expired) => this.setState({ expired })} value={this.state.expired} placeholder="Expired" placeholderTextColor="grey" />
          <TextInput style={styles.textInput} onChangeText={(deskripsi) => this.setState({ deskripsi })} value={this.state.deskripsi} placeholder="Type the description here ..." placeholderTextColor="grey" />
          <TextInput style={styles.textInput} onChangeText={(photo) => this.setState({ photo })} value={this.state.photo} placeholder="Choose File " placeholderTextColor="grey" />
        </View>
        <View style={styles.dropdownWrapper}>
        <DropDownPicker 
            placeholder="Status"
            items={[
                {label: 'Ready Stock', value: 'Ready Stock'},
                {label: 'Out Of Stock', value: 'Out Of Stock'},
             ]}
            containerStyle={{height: 40}}
            style={{backgroundColor: "white"}}
            itemStyle={{
                 justifyContent: "flex-start"
            }}
            dropDownStyle={{backgroundColor: "white"}}
            onChangeItem={item => this.setState({
                role: item.value
            })}
            />
            </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Add')}>
            <Text style={styles.buttonText}>Add</Text>
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
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    alignSelf: "center",
    color: "#F57373",
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
    borderWidth: 1,
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

export default AddProduct;