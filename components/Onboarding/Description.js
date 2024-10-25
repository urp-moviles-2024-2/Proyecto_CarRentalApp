import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Description = ({children, style}) => {
  return (
    <View>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  )
}

export default Description

const styles = StyleSheet.create({
  text:{
    fontSize: 18,
    fontWeight: 'thin'
  }
})