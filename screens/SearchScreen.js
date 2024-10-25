import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { useNavigation } from '@react-navigation/native';


const SearchScreen = () => {
  const navigation = useNavigation();
  const handleSearchScreen = () => {
    navigation.navigate('SearchAllScreen');
  };
  return (
    <View style={styles.container}>
      <Text>SearchScreen</Text>
      <PrimaryButton onPressButton={handleSearchScreen}>Click Me</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchScreen;