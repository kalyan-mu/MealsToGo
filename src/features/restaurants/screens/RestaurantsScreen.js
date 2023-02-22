import React, { useContext } from "react";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { SafeAreaView, View, FlatList } from "react-native";
import { Search } from "../components/search.components";
import RestaurantInfo from "../components/restaurants-info.component";
import { styles } from "./restaurants.screen.styles";

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
