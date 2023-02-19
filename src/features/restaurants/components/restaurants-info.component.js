import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

function RestaurantInfo({ restaurant = {} }) {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <View style={styles.card}>
      <Image style={styles.img1} key={name} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
    height: 220,
  },
  img1: {
    width: "95%",
    aspectRatio: 16 / 7,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 8,
  },
  title: {
    padding: 16,
  },
});

export default RestaurantInfo;
