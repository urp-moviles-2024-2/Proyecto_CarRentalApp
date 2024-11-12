import { StyleSheet, View, Dimensions,Text } from "react-native";
import React from "react";

const SubText = ({ children }) => {
  return <View style={styles.subtextContainer} testID="subtext-container">{children}</View>;
};
export default SubText;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  subtextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: deviceWidth <= 360 ? 300 : 400,
    marginTop: 10,
  },
});