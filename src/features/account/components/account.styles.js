import React from "react";
import image from "../../../../assets/home_bg.jpg";
import { StyleSheet, ImageBackground, View, Text } from "react-native";

export const AccountBackground = () => {
  return (
    <>
      <View style={styles.BG}>
        <ImageBackground style={styles.IMG1} source={image} />
      </View>
    </>
  );
};
export const AccountCover = () => {
  return (
    <View style={styles.BG}>
      <Text style={styles.text}>hi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  IMG1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  BG: {
    flex: 1,
    backgroundColor: "#E1E1E1",
    opacity: 0.3,
  },
  text: {
    fontSize: 42,
    backgroundColor: "white",
    padding: 30,
    opacity: 2,
  },
});
