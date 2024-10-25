import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Txt2 = ({children, style}) => {
  return (
    <View>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  )
}

export default Txt2

const styles = StyleSheet.create({
  text:{
    fontSize: 40,
    fontWeight: 'bold'
  }
})