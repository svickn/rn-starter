import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import screens from "./src/data/Screens";
import HomeScreen from "./src/screens/HomeScreen";

const navigator = createStackNavigator(
  {...screens,
    Home: HomeScreen},
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
