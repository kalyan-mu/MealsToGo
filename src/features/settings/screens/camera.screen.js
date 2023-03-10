import React, { useRef, useState, useEffect, useContext } from "react";
import { Camera } from "expo-camera";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.Main1}>
      <TouchableOpacity onPress={snap}>
        <Camera
          ref={(camera) => (cameraRef.current = camera)}
          type={Camera.Constants.Type.front}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Main: {
    width: "100%",
    height: "100%",
  },
  Main1: {
    width: "100%",
    height: "100%",
  },
});
