import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { GLOBAL_STYLES } from "../constants/styles";

const PrimaryButton = ({ children, onPressButton }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPressButton}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : [styles.buttonInnerContainer]
        }
        testID="primary-button" // para la prueba unitaria
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingVertical: 15,
    width:'100%',
    marginTop: 20,
    backgroundColor: GLOBAL_STYLES.colors.colorverdeprincipal,
    borderRadius: 10
  },
  buttonText: {
    color: "#000",
    textAlign: "center",
    fontSize: 15,
  },
  pressed: {
    opacity: 0.5,
  },
});
