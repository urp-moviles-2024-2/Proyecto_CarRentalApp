import React, { useState } from 'react';
import { View } from 'react-native';
import InputField from '../InputField';

const FirebaseLoginForm = ({ setEmail, setPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View>
      <InputField
        placeholder="Email"
        value={setEmail}
        onChangeText={setEmail}
      />
      <InputField
        placeholder="Password"
        value={setPassword}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        toggleSecureTextEntry={() => setShowPassword(!showPassword)}
      />
    </View>
  );
};

export default FirebaseLoginForm;
