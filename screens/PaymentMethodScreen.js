import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { useNavigation } from '@react-navigation/native';



const PaymentMethodScreen = () => {
  const navigation = useNavigation();
  const handleHome = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text>PaymentMethodScreen</Text>
      <PrimaryButton onPressButton={handleHome}>Pay Now</PrimaryButton>
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

export default PaymentMethodScreen;