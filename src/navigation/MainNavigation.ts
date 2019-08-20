import { createStackNavigator } from "react-navigation";
import { Home, SearchCocktail } from "../screens";

const noHeader = { header: null };

const stack = {
  Home: {
    screen: Home,
    navigationOptions: noHeader
  },
  SearchCocktail: {
    screen: SearchCocktail,
    navigationOptions: noHeader
  }
};

export const MainStack = createStackNavigator(stack);
export type MainRoutes = keyof typeof stack;
