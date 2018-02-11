import React from "react";
import { View, Platform } from "react-native";
import { Provider } from "react-redux";
import { purple, white } from "./utils/colors";
import Navigator from "./config/routes";
import store from "./config/store";
import UdaciStatusBar from "./components/statusbar";
import { setLocalNotification } from "./utils/helpers";

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <Navigator />
        </View>
      </Provider>
    );
  }
}
