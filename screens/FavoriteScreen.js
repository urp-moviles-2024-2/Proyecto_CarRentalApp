import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { useNavigation } from '@react-navigation/native';



const FavoriteScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Favorite SCREEN</Text>
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

export default FavoriteScreen;