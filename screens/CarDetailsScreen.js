import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import ReturnButton from '../components/Buttons/ReturnButton';
import DateTime from '../components/DateAndTime/DateTime';
import { useNavigation } from '@react-navigation/native';
import TitleScreen from '../components/TitleScreen';

const CarDetailsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const navigation = useNavigation();
  const handleAllCars = () => {
    navigation.navigate('AllCarsScreen');
  };
  const handleSelectAddressScreen = () => {
    navigation.navigate('SelectAdressScreen');
  };
  const handleOpenModalDate = () => {
    setModalVisible(true);
  };
  const handleCloseModalDate = () => {
    setModalVisible(false);
  };
  const handleConfirmDateTime = (data) => {
    setSelectedData(data); // Guardar fecha y hora seleccionada
    console.log('Fecha y Hora Seleccionada:', data); // Muestra en consola (provisional)
  };
  return (
    <View style={styles.container}>
      <TitleScreen style={styles.title}>CarDetailsScreen</TitleScreen>
      <ReturnButton onPressButton={handleAllCars} />
      <PrimaryButton onPressButton={handleSelectAddressScreen}>
        Select Address
      </PrimaryButton>
      <PrimaryButton onPressButton={handleOpenModalDate}>
        Book Now
      </PrimaryButton>
      <DateTime
        visible={modalVisible}
        onClose={handleCloseModalDate}
        onConfirm={handleConfirmDateTime}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    position:'absolute',
    color: 'black', 
    marginTop: '5%', 
  },
});
export default CarDetailsScreen;
