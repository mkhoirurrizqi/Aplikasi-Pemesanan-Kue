import React from "react";
import { StyleSheet, TouchableOpacity, Button, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/header/HeaderButton";
import Login from "../components/all/LoginPage";
import Register from "../components/all/RegisterPage";
import HomeCustomer from "../components/customer/HomeCustomer";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={({ route, navigation }) => ({
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
        // headerTransparent: true,
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="back" iconName={"chevron-back"} onPress={() => navigation.goBack()} iconSize={40} />
          </HeaderButtons>
        ),
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="profile" iconName={"person-circle-outline"} onPress={() => navigation.goBack()} iconSize={30} />
          </HeaderButtons>
        ),
      })}
    >
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ title: "", headerRight: false }} />
      <Stack.Screen name="HomeCustomer" component={HomeCustomer} options={{ title: "", headerLeft: false }} />
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
