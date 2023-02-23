import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RestaurantsScreen from "../../features/restaurants/screens/RestaurantsScreen";

const RestaurantStack = createStackNavigator();

function RestaurantsNavigator() {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
        options={{ headerShown: false }}
      />
    </RestaurantStack.Navigator>
  );
}
export default RestaurantsNavigator;
