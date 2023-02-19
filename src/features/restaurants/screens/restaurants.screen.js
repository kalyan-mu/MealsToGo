import React from "react";
//import { Searchbar } from "react-native-paper";
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
} from "react-native";
import RestaurantInfo from "../components/restaurants-info.component";

export default function RestaurantScreen() {
  return (
    <SafeAreaView style={styles.Main}>
      <View style={styles.Main1}>
        <TextInput style={styles.input} placeholder="Searchbar" />
      </View>
      <View style={styles.Main2}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  Main1: {
    padding: 16,
    justifyContent: "top",
  },
  Main2: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
  input: {
    fontSize: 20,
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#141414",
  },
});
