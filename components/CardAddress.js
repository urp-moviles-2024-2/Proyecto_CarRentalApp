import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { RadioButton } from "react-native-paper";

const AddressCard = ({ title, address, selected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.card, selected && styles.selectedCard]}
      onPress={onPress}
    >
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/maps.png')} // Imagen de ejemplo
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
      <RadioButton
        value={title}
        status={selected ? "checked" : "unchecked"}
        onPress={onPress}
        color="#b6e142" // Color del botón seleccionado
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#eaeaea",
  },
  selectedCard: {
    borderColor: "#b6e142",
    backgroundColor: "#f1f9e7",
  },
  imageContainer: {
    marginRight: 12,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: "#555",
  },
});

export default AddressCard;
