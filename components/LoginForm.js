import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import InputField from './InputField';

const SignUpForm = () => {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[showPassword, setShowPassword]=useState(false);
 
  return (
  <View style={styles.formContainer}>
      <InputField
      placeholder="Email"
      value={email}
      onChangeText={setEmail}
      />
      <InputField
      placeholder="Password"
      value={password}
      onChangeText={setPassword}
      secureTextEntry={!showPassword}
      toggleSecureTextEntry={()=> setShowPassword(!showPassword)}
      />
  </View>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
});