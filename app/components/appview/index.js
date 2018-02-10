import React from "react";
import { View, StyleSheet } from "react-native";
import { white } from "../../utils/colors";

export const AppView = ({ children, style = {} }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    padding: 15,
    flex: 1
  }
});
