import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <View style={styles.Bar}>
      <Text style={styles.Bar2}>Favourites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <View key={key} style={styles.Bar1}>
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Bar: {
    padding: 10,
  },
  Bar1: {
    marginRight: 10,
    width: 125,
  },
  Bar2: {
    fontWeight: "bold",
    paddingBottom: 10,
  },
});
