import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "../screens/Main";

const { Screen, Navigator } = createBottomTabNavigator()

export default function Tab() {
  return (
    <Navigator>
      <Screen name="Main" component={Main}/>
    </Navigator>
  )
}