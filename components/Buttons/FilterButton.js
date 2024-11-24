import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons"; // Importamos el ícono

const FilterButton = ({ children, onPressButton }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPressButton}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : [styles.buttonInnerContainer]
        }
      >
        <Icon name="options" size={20} color="#000" style={styles.icon} />
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default FilterButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom:10,
    margin: 1,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    elevation: 2,
    marginTop: "50%",
    backgroundColor: "#9acd32",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "row", // Para alinear el ícono y el texto en una fila
    justifyContent: "center",
    alignItems: "center", // Centra tanto el ícono como el texto
  },
  icon: {
    marginRight: 5, // Espacio entre el ícono y el texto
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
