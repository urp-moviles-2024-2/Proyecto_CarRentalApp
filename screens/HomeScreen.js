import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSearchScreen = () => {
    navigation.navigate('SearchScreen');
  };
  const handleMessageScreen = () => {
    navigation.navigate('MessageScreen');
  };
  const handleMyProfileScreen = () => {
    navigation.navigate('MyProfileScreen');
  };


  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <PrimaryButton onPressButton={handleSearchScreen}>Click Me</PrimaryButton>
      <PrimaryButton onPressButton={handleMessageScreen}>Message</PrimaryButton>
      <PrimaryButton onPressButton={handleMyProfileScreen}>My Profile</PrimaryButton>
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

export default HomeScreen;