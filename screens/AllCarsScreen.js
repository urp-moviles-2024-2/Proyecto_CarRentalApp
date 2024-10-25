import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

const AllCarsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  
  const navigation = useNavigation();
  const handleCarDetailsScreen = () => {
    navigation.navigate('CarDetailsScreen');
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <PrimaryButton onPressButton={handleOpenModal}>Filter</PrimaryButton>
      <PrimaryButton onPressButton={handleCarDetailsScreen}>Un Carro</PrimaryButton>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>

            <View style={styles.emptySpace} />
            <TouchableOpacity style={styles.applyButton} onPress={handleCloseModal}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  emptySpace: {
    height: 200,
  },
  applyButton: {
    backgroundColor: '#c0ffb3',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  applyButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default AllCarsScreen;
