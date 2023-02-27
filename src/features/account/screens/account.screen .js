import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import { Button } from "react-native-paper";
import image from "../../../../assets/home_bg.jpg";
//import LottieView from "lottie-react-native";

export const AccountScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.BG}>
        <ImageBackground style={styles.IMG1} source={image}>
          {/* <View style={styles.ani}>
            <LottieView
              key="animation"
              autoPlay
              loop
              resizeMode="cover"
              source={require("../../../../assets/watermelon")}
            />
          </View> */}
          <Text style={styles.title}>Meals To Go</Text>
          <View style={styles.text}>
            <Button
              icon="lock-open-outline"
              buttonColor="blue"
              mode="contained"
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </Button>
            <View style={styles.margin}>
              <Button
                icon="email"
                buttonColor="blue"
                mode="contained"
                onPress={() => navigation.navigate("Register")}
              >
                Register
              </Button>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
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
    opacity: 0.7,
  },
  text: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 30,
  },
  btn: {
    color: "blue",
  },
  margin: {
    marginTop: 15,
  },
  title: {
    padding: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
  ani: {
    width: "100%",
    height: "40%",
    position: "absolute",
    top: 30,
    padding: 8,
  },
});
