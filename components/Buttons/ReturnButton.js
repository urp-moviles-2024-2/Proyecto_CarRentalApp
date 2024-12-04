import { StyleSheet, Pressable } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons"; 

const ReturnButton = ({ onPressButton }) => {
  return (
    <Pressable
      onPress={onPressButton}
      style={({ pressed }) =>
        pressed
          ? [styles.buttonInnerContainer, styles.pressed]
          : styles.buttonInnerContainer
      }
    >
      <Icon name="chevron-back" size={24} color="#000" />
    </Pressable>
  );
};

export default ReturnButton;

const styles = StyleSheet.create({
  buttonInnerContainer: {
    position: 'absolute',
    top: '6%', 
    left: 10, 
    paddingVertical: 5,
    paddingHorizontal: 8,
    elevation: 2,
    backgroundColor: "#ffffff",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  pressed: {
    opacity: 0.5,
  },
});
