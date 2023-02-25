import React, { useContext } from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { FavouritesContext } from "../../../services/favourites/favorites.context";
import { RestaurantInfo } from "../../restaurants/components/restaurants-info.component";

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return favourites.length ? (
    <SafeAreaView style={styles.Main1}>
      <FlatList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <View style={styles.Main2}>
                <RestaurantInfo restaurant={item} />
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  ) : (
    <SafeAreaView style={styles.Main}>
      <Text>No favoutites Yet</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  Main1: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  Main2: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
