import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GLOBAL_STYLES } from "../constants/styles";

const Description = ({children, style}) => {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default Description

const styles = StyleSheet.create({
  text:{
    fontSize: 18,
    fontWeight: 'thin',
    color: GLOBAL_STYLES.colors.colorgrisletrasybordes,
    marginTop:'2%',
    marginBottom:'2%',
  }
})