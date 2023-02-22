import React, { useContext, useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { LocationContext } from "../../../services/location/location.context";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyWord] = useState(keyword);

  return (
    <View style={styles.Main1}>
      <TextInput
        style={styles.input}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyWord(text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Main1: {
    padding: 16,
    justifyContent: "top",
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
