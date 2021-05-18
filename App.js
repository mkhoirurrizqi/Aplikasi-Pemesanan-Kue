import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Router from "./Router/index"
import { Provider } from 'react-redux'
import storeState from './components/redux/store'

export default function App() {
  return (
<Provider store={storeState}>
    <NavigationContainer>
         <StatusBar style="auto" />
          <Router/>
    </NavigationContainer>
</Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
