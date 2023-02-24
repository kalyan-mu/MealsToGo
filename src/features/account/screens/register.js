import React, { useState, useContext } from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import image from "../../../../assets/home_bg.jpg";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error } = useContext(AuthenticationContext);
  return (
    <>
      <>
        <View style={styles.BG}>
          <ImageBackground style={styles.IMG1} source={image}>
            <Text style={styles.title}>Meals To Go</Text>
            <View style={styles.text}>
              <TextInput
                label="E-mail"
                value={email}
                textContentType="emailAddress"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(u) => setEmail(u)}
              />
              <View style={styles.margin}>
                <TextInput
                  label="Password"
                  value={password}
                  textContentType="password"
                  secureTextEntry
                  autoCapitalize="none"
                  onChangeText={(p) => setPassword(p)}
                />
              </View>
              <View style={styles.margin}>
                <TextInput
                  label="Repeat Password"
                  value={repeatedPassword}
                  textContentType="password"
                  secureTextEntry
                  autoCapitalize="none"
                  onChangeText={(p) => setRepeatedPassword(p)}
                />
              </View>
              {error && (
                <View>
                  <Text style={styles.error}>{error}</Text>
                </View>
              )}
              <View style={styles.margin}>
                <Button
                  icon="email"
                  buttonColor="blue"
                  mode="contained"
                  onPress={() => onRegister(email, password, repeatedPassword)}
                >
                  Register
                </Button>
              </View>
            </View>
            <View style={styles.margin}>
              <Button
                buttonColor="blue"
                mode="contained"
                onPress={() => navigation.goBack()}
              >
                Back
              </Button>
            </View>
          </ImageBackground>
        </View>
      </>
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
    padding: 20,
    width: 300,
  },
  margin: {
    marginTop: 15,
  },
  error: {
    color: "red",
  },
  title: {
    padding: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
});
