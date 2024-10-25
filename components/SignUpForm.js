import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import InputField from './InputField';

const SignUpForm = () => {
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[confirmPassword,setConfirmPassword]=useState('');
  const[showPassword, setShowPassword]=useState(false);
  const[showConfirmPassword,setShowConfrimPassword]=useState(false);

  return (
  <View style={styles.formContainer}>
    <InputField
      placeholder='Name'
      value={name}
      onChangeText={setName}
      />
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
      <InputField
      placeholder="Confirm Password"
      value={confirmPassword}
      onChangeText={setConfirmPassword}
      secureTextEntry={!showConfirmPassword}
      toggleSecureTextEntry={()=> setShowConfrimPassword(!showConfirmPassword)}
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