import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import React from 'react'

const Button3 = ({ children, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button3

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end'
  },
  text:{
    color: '#000'
  },
  button:{
    backgroundColor: '#9acd32',
    padding: 12,
    paddingHorizontal: 15,
    borderRadius: 10
  }
})