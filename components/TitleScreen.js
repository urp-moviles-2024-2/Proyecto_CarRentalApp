import { StyleSheet, Text, Dimensions,Platform} from "react-native";
import React from "react";

const TitleScreen = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default TitleScreen;

const deviceWidth = Dimensions.get("window").width;

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