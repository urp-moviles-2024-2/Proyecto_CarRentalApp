import { StyleSheet,Text,View,Pressable,Image } from "react-native";
import React from "react";

const SocialButton=({children, onPressButton,backgroundColor,logo})=>{
  return(
    <View style={StyleSheet.buttonContainer}>
      <Pressable onPress={onPressButton} style={({pressed})=>
      pressed ? [styles.buttonInnerContainer, styles.pressed, { backgroundColor }] : [styles.buttonInnerContainer, { backgroundColor }]}>
        <View style={styles.buttonContent}>
          {logo && <Image source={logo} style={styles.logo} />}
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default SocialButton;
const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
    width: "85%",
    borderRadius: 9,
    overflow: "hidden",
    
  },
  buttonInnerContainer: {
    paddingVertical: 15,
    alignItems: "center",
    elevation: 2,
    width: 150,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius:10,
    borderTopRightRadius:10,
  },
  buttonText: {
    color: "#000",
    textAlign: "center",
    fontSize: 15,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.5,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight:10,
  },
});