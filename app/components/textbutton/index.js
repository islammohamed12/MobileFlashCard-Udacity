import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { white, purple, gray } from "../../utils/colors";

export const TextButton = ({
  children,
  onPress,
  disabled = false,
  style = {}
}) => {
  const buttonStyle =
    disabled === true
      ? [
          {
            opacity: 0.5
          },
          styles.container
        ]
      : [
          {
            opacity: 1
          },
          styles.container
        ];
  // background-color: rgb(229, 229, 229)
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} disabled={disabled}>
      <Text style={[styles.reset, style]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  reset: {
    textAlign: "center",
    color: white,
    backgroundColor: purple,
    padding: 20
  }
});
