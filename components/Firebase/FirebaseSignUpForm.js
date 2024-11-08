import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const FirebaseSignUpForm = ({ onEmailChange, onPasswordChange, onNameChange, onConfirmPasswordChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const handleEmailChange = (text) => {
    setEmail(text);
    onEmailChange(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
    onPasswordChange(text);
  };
  const handleNameChange = (text) => {
    setName(text);
    onNameChange(text);
  };
  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    onConfirmPasswordChange(text);
  };
  return (
    <View style={styles.formContainer}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={handleNameChange}  //  manejador de eventos
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}  //  manejador de eventos
        style={styles.input}
        keyboardType="email-address"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={handlePasswordChange}  // manejador de eventos
          style={styles.inputPassword}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          <Ionicons name={isPasswordVisible ?  "eye": "eye-off"} size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}  // manejador de eventos
          style={styles.inputPassword}
          secureTextEntry={!isConfirmPasswordVisible}
        />
        <TouchableOpacity onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}>
          <Ionicons name={isConfirmPasswordVisible ?   "eye":"eye-off"} size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  inputPassword: {
    flex: 1,
    height: 50,
  },
});

export default FirebaseSignUpForm;
