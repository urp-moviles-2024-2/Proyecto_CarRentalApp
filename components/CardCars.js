import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { cardsData } from '../data/cardsData';

const CardCars = () => {
  const [isPressed, setIsPressed] = useState([]);

  const ButtonHandler = (index) => {
    if (isPressed.includes(index)) {
      setIsPressed(isPressed.filter(i => i !== index));
    } else {
      setIsPressed([...isPressed, index]);
    }
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={[styles.button, isPressed.includes(index) && styles.buttonPressed]}
      onPress={() => ButtonHandler(index)}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={[styles.text, isPressed.includes(index) && styles.textPressed]}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cardsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        scrollEnabled={false}
      />
    </View>
  )
}

export default CardCars

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#fff',
    marginVertical: 5,
    marginRight: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
    height: 160,
    width: 185
  },
  buttonPressed: {
    borderColor: '#9acd32',
  },
  image: {
    width: 100,
    height: 80,
    resizeMode: 'contain'
  },
  text: {
    color: '#000',
  },
  textPressed: {
    color: '#9acd32',
  }
});