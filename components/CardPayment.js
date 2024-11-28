import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const SavedCard = ({cardNumber, cardHolderName, onPress}) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.cardNumber}>{cardNumber}</Text>
        <Text style={styles.cardHolder}>{cardHolderName}</Text>
      </View>
      <FontAwesome5 name="cc-visa" size={50} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#c3e54b',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});

export default SavedCard;
