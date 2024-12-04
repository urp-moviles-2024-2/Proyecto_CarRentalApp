import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const SavedCard = ({ cardNumber, cardHolderName, onPress, onPressDelete }) => {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.textContainer} onPress={onPress}>
        <Text style={styles.cardNumber}>{cardNumber}</Text>
        <Text style={styles.cardHolder}>{cardHolderName}</Text>
      </TouchableOpacity>
      <FontAwesome5 name="cc-visa" size={50} color="black" />
      <TouchableOpacity onPress={onPressDelete} style={styles.deleteButton}>
        <FontAwesome5 name="trash" size={20} color="#ff4444" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#c3e54b',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginTop:20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardHolder: {
    fontSize: 14,
    color: '#555',
  },
  textContainer: {
    flex: 1,
  },
  deleteButton: {
    marginLeft: 15,
    padding: 5,
  },
});

export default SavedCard;
