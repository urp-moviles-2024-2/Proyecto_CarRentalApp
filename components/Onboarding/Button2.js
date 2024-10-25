import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import React from 'react'

const Button2 = ({children, style}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, style]}>
        <Text>{children}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Button2

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start'
  },
  text:{
    color: '#000'
  },
  button:{
    backgroundColor: '#9acd32',
    padding: 25,
    borderRadius: 10
  }
})