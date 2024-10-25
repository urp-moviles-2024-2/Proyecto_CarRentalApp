import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { useNavigation } from '@react-navigation/native';



const SearchAllScreen = () => {
  const navigation = useNavigation();
  const handleAllCarsScreen = () => {
    navigation.navigate('AllCarsScreen');
  };

  return (
    <View style={styles.container}>
      <Text>SearchAllScreen</Text>
      <PrimaryButton onPressButton={handleAllCarsScreen}>gO TO All Cars</PrimaryButton>
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

export default SearchAllScreen;