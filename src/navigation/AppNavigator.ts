import { createSwitchNavigator, createAppContainer } from "react-navigation";

import { MainStack, MainRoutes } from "./MainNavigation";

const AppStack = createSwitchNavigator(
  {
    Main: MainStack
  },
  { initialRouteName: "Main" }
);

export default createAppContainer(AppStack);

export type Routes = MainRoutes;
