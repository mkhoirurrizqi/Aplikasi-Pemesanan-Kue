import React from "react";
import { StyleSheet, TouchableOpacity, Button, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/header/HeaderButton";
import Splash from "../splash/splash"
import EditProfile from "../components/all/EditProfile"
import Login from "../components/all/LoginPage";
import Register from "../components/all/RegisterPage";
import Profile from "../components/all/ProfilePage";
import HomeCustomer from "../components/customer/HomeCustomer";
import ListProduct from "../components/customer/ListProduct";
import StoreProduct from "../components/store/ProductDetails"
import AddProduct from "../components/store/AddProduct";
import EditProduct from "../components/store/EditProduct";
import OrderPage from "../components/customer/OrderPage";
import DetailProduct from "../components/customer/DetailProduct";

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={({ route, navigation }) => ({
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
          alignSelf: "center",
          color: "#F57373",
        },
        // headerTransparent: true,
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="back" iconName={"chevron-back"} onPress={() => navigation.goBack()} iconSize={40} />
          </HeaderButtons>
        ),
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="profile" iconName={"person-circle-outline"} onPress={() => navigation.navigate("Profile")} iconSize={30} />
          </HeaderButtons>
        ), 
      })}
    >
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ title: "", headerRight: false }} />
      <Stack.Screen name="HomeCustomer" component={HomeCustomer} options={{ title: "", headerLeft: false }} />
      <Stack.Screen name="Profile" component={Profile} options={{ title: "", headerRight: false }} />
      <Stack.Screen name="EditProfile" component={EditProfile} options={{ title: "", headerRight: false }} />
      <Stack.Screen name="ListProduct" component={ListProduct} options= {{ title: "List Product"}} />
      <Stack.Screen name="StoreProduct" component={StoreProduct} options= {{ title: "Toko Joko"}} />
      <Stack.Screen name="AddProduct" component={AddProduct} options= {{ title: "Add Product"}} />
      <Stack.Screen name="EditProduct" component={EditProduct} options= {{ title: "Edit Product"}} />
      <Stack.Screen name="OrderPage" component={OrderPage} options= {{ title: "Order Here"}} />
      <Stack.Screen name="DetailProduct" component={DetailProduct} options= {{ title: "Detail Product"}} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F57373",
    elevation: 8,
    borderRadius: 30,
    height: 45,
    justifyContent: "center",
    width: 250,
    alignSelf: "center",
  },
});
