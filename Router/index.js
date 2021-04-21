import React from 'react'
import { StyleSheet,TouchableOpacity, Button,Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../components/all/LoginPage";


const Stack = createStackNavigator();

export default function Router() {
    return (
     
      <Stack.Navigator initialRouteName="login" screenOptions={({
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0
        },
      })}>
        <Stack.Screen name="login" component={Login} options={{headerShown: false}}/>
      </Stack.Navigator>
    )
}

const styles = StyleSheet.create({ button: {
    backgroundColor: "#F57373",
    elevation: 8,
    borderRadius: 30,
    height: 45,
    justifyContent: "center",
    width: 250,
    alignSelf: "center",
  },})
