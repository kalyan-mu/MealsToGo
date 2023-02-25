import React, { useContext, useState } from "react";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favorites.context";
import { SafeAreaView, View, FlatList, TouchableOpacity } from "react-native";
import { Search } from "../components/search.components";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import RestaurantInfo from "../components/restaurants-info.component";
import { styles } from "./restaurants.screen.styles";
import { FadeInView } from "../../../components/animations/fade.animation";

function RestaurantsScreen({ navigation }) {
  const { restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeAreaView style={styles.Main}>
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <View style={styles.Main2}>
                <FadeInView>
                  <RestaurantInfo restaurant={item} />
                </FadeInView>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
}
export default RestaurantsScreen;
