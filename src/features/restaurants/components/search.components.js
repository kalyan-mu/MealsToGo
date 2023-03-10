import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { LocationContext } from "../../../services/location/location.context";
import { Searchbar } from "react-native-paper";

export const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyWord] = useState(keyword);
  useEffect(() => {
    setSearchKeyWord(keyword);
  }, [keyword]);

  return (
    <View style={styles.Main1}>
      <Searchbar
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
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
