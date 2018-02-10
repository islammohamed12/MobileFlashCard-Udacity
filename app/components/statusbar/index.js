import React from "react";
import { View, Platform, StatusBar } from "react-native";
import { Constants } from "expo";

export default function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}
