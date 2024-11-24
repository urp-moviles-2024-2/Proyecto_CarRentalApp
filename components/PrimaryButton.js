import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

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
    paddingHorizontal: 150,
    elevation: 2,
    marginTop: 20,
    backgroundColor: "#9acd32",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius:10,
    borderTopRightRadius:10,
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
