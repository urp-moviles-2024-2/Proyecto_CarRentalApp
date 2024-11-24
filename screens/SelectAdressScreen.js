import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { useNavigation } from '@react-navigation/native';
import ReturnButton from '../components/Buttons/ReturnButton';


const SelectAdressScreen = () => {
  const navigation = useNavigation();
  const handleCarDetailsScreen = () => {
    navigation.navigate('CarDetailsScreen');
  };
  const handlePaymentMethodScreen = () => {
    navigation.navigate('PaymentMethodScreen');
  };
  return (
    <View style={styles.container}>
      <ReturnButton onPressButton={handleCarDetailsScreen} />
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