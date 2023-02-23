import React from "react";
import { StatusBar } from "expo-status-bar";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favorites.context";
import { Navigation } from "./src/infrastructure/navigation";

export default function App() {
  return (
    <>
      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
      <StatusBar style="auto" />
    </>
  );
}
