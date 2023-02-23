import React from "react";
import { Text, View, Image, StyleSheet, Platform } from "react-native";
import { WebView } from "react-native-webview";

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant }) => {
  const Img = isAndroid ? WebView : Image;
  return (
    <View>
      <Img style={styles.img2} source={{ uri: restaurant.photos[0] }} />
      <Text>{restaurant.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  img2: {
    height: 100,
    width: 120,
  },
});
