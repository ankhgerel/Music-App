import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "../screens/Main";
import YouTube from "../screens/YouTube";
import Search from "../screens/Search";
import { Name } from "../utils/Constants";

const { Navigator, Screen } = createStackNavigator();

export default function Stack() {
  return (
    <Navigator>
      <Screen name={Name} component={Main} />
      <Screen name={Name} component={YouTube} />
      <Screen name={Name} component={Search} />
    </Navigator>
  );
}