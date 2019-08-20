import React, { PureComponent } from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import Navigation from "./src/navigation/Navigation";
import { store } from "./src/store";
import { Provider } from "react-redux";

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator
          ref={(navigatorRef: any) => {
            Navigation.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}
