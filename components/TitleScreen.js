import { StyleSheet, Text, Dimensions,Platform} from "react-native";
import React from "react";

const TitleScreen = ({ children,style }) => {
  return <Text style={[styles.title,style]}>{children}</Text>; // esto ahce que se combine con el estilo base que recibe
};

export default TitleScreen;


const styles = StyleSheet.create({
  title: {
    position:'relative',
    top:40,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: 'center',
    width: 200,
    marginBottom:2,
  },
});