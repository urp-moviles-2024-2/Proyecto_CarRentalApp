import React from 'react';
import {StyleSheet, View} from 'react-native';
import InputField from '../InputField';

const FirebaseLoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  showPassword,
  setShowPassword,
}) => {
  return (
    <View style={styles.formContainer}>
      <InputField placeholder="Email" value={email} onChangeText={setEmail} />
      <InputField
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        toggleSecureTextEntry={() => setShowPassword(!showPassword)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
});

export default FirebaseLoginForm;
