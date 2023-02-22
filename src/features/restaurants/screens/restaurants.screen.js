import React, { useContext } from "react";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
//import { Searchbar } from "react-native-paper";
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import { Search } from "../components/search.components";
import RestaurantInfo from "../components/restaurants-info.component";

export default function RestaurantsScreen() {
  const { restaurants } = useContext(RestaurantsContext);
  return (
    <SafeAreaView style={styles.Main}>
      <Search />
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <View style={styles.Main2}>
              <RestaurantInfo restaurant={item} />
            </View>
          );
        }}
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
    elevation: 5,
  },
});
