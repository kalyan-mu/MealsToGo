import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { LocationContext } from "../../../services/location/location.context";
import { Searchbar } from "react-native-paper";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyWord] = useState(keyword);
  useEffect(() => {
    setSearchKeyWord(keyword);
  }, [keyword]);

  return (
    <View style={styles.Map1}>
      <Searchbar
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
  Map1: {
    padding: 16,
    position: "absolute",
    zIndex: 999,
    top: 40,
    width: "100%",
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
