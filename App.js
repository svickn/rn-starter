import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import screens from "./src/data/Screens";

const navigator = createStackNavigator(
  screens,
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
