import React from "react";
//import { Searchbar } from "react-native-paper";
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  FlatList,
} from "react-native";
import RestaurantInfo from "../components/restaurants-info.component";

export default function RestaurantScreen() {
  return (
    <SafeAreaView style={styles.Main}>
      <View style={styles.Main1}>
        <TextInput style={styles.input} placeholder="Searchbar" />
      </View>
      <FlatList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 12 },
          { name: 13 },
          { name: 14 },
        ]}
        renderItem={() => (
          <View style={styles.Main2}>
            <RestaurantInfo />
          </View>
        )}
        keyExtractor={(item) => item.name}
      />
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
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  input: {
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
    backgroundColor: "#fff",
    height: 45,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});
