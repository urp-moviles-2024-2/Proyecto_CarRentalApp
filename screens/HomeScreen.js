import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchScreen = () => {
    navigation.navigate('SearchScreen');
  };


  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <PrimaryButton onPressButton={handleSearchScreen}>Click Me</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 20,
    width: '90%',
  },
});

export default HomeScreen;
