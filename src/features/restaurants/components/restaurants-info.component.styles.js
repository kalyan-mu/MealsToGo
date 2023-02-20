import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
    backgroundColor: "#fff",
    height: 240,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  img1: {
    width: "95%",
    aspectRatio: 16 / 7,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 8,
  },
  title: {
    padding: 1,
    paddingHorizontal: 8,
  },
  address: {
    paddingHorizontal: 8,
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: -1,
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingTop: 3,
    paddingBottom: 3,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  sectionEnd: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 10,
  },
  OpenClose: {
    paddingLeft: 5,
  },
  Img2: {
    width: 15,
    height: 15,
  },
  Closed: {
    color: "red",
    letterSpacing: -1.5,
    fontWeight: "bold",
  },
});

export default styles;
