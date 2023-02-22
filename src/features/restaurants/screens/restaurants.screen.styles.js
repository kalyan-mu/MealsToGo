import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
