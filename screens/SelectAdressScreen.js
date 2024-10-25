import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { useNavigation } from '@react-navigation/native';


const SelectAdressScreen = () => {
  const navigation = useNavigation();

  const handlePaymentMethodScreen = () => {
    navigation.navigate('PaymentMethodScreen');
  };

  return (
    <View style={styles.container}>
      <Text>SelectAdressScreen</Text>
      <PrimaryButton onPressButton={handlePaymentMethodScreen}>Click Me</PrimaryButton>
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

export default SelectAdressScreen;