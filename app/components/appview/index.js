import React from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { white } from "../../utils/colors";

export const AppView = ({ children, style = {}, isFormView }) => {
  if (isFormView)
    return (
      <KeyboardAvoidingView style={[styles.container, style]}>
        {children}
      </KeyboardAvoidingView>
    );

  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    padding: 15,
    flex: 1
  }
});
