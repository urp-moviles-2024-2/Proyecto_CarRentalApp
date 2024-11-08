import { StyleSheet, View, Dimensions, Text } from "react-native";
import React from "react";

const SubText = ({ children }) => {
  return (
    <View testID="subtext-container" style={styles.subtextContainer}>
      <Text>{children}</Text>
    </View>
  );
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
