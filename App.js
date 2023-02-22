import React from "react";
import { StatusBar } from "expo-status-bar";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation/index";

export default function App() {
  return (
    <>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Navigation />
        </RestaurantsContextProvider>
      </LocationContextProvider>
      <StatusBar style="auto" />
    </>
  );
}
