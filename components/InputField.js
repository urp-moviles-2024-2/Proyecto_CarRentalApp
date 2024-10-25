import React, {useState} from 'react';
import { StyleSheet,TextInput,View,TouchableOpacity,Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InputField=({placeholder,value,onChangeText,secureTextEntry,toggleSecureTextEntry})=>{
    return(
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor='#888'
        />
        {toggleSecureTextEntry && (
        <TouchableOpacity onPress={toggleSecureTextEntry}>
          <Ionicons
          name={secureTextEntry ? 'eye-off' : 'eye' }
          size={24}
          color='#888'
          />
        </TouchableOpacity>
      )}
      </View>
    );
};

export default InputField;

const styles =StyleSheet.create({
  inputContainer: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  toggleText: {
    color: '#1e90ff',
    fontSize: 16,
  },
});