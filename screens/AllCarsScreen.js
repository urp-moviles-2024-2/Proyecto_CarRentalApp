import { StyleSheet, Text, View, Modal, TouchableOpacity, FlatList, TextInput } from 'react-native';
import React, { useState } from 'react';
import ReturntButton from '../components/Buttons/ReturnButton';
import FilterButton from '../components/Buttons/FilterButton';
import CarItem from '../components/Cars/CarItem';
import { useNavigation } from '@react-navigation/native';
import { rentalCars } from '../data/rentalCars';
import Icon from 'react-native-vector-icons/Ionicons';
import TitleScreen from '../components/TitleScreen';

const AllCarsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  const handleHomeScreen = () => {
    navigation.navigate('HomeScreen');
  };
  const handleOpenModal = () => {
    setModalVisible(true);
  };
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const handleCarDetailsScreen = () => {
    navigation.navigate('CarDetailsScreen');
  };
  const renderItem = ({ item }) => (
    <CarItem car={item} /> // Pasamos los datos del coche al componente CarItem
  );

  return (
    <View style={styles.container}>
      <ReturntButton onPressButton={handleHomeScreen} imageUrl="https://img.icons8.com/?size=100&id=60636&format=png&color=000000" />
      <TitleScreen>All Cars</TitleScreen>
      <View style={styles.header}>
        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <FilterButton onPressButton={handleOpenModal}>Filter</FilterButton>
      </View>
      {/* Filtra los coches por el nombre usando el searchQuery */}
      <FlatList
        data={rentalCars.filter(car => car.name.toLowerCase().includes(searchQuery.toLowerCase()))}
        renderItem={renderItem} // Renderiza cada coche usando el componente CarItem
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.carList}
      />
      {/* Modal de filtro */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 30, 
  },
  searchInput: {
    flex: 1,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#d3d3d3',
    paddingLeft: 40, // Espacio para la lupa
    marginRight: 10,
    marginTop: 30, 
  },
  searchIcon: {
    position: 'absolute',
    left: 22, // Posiciona la lupa dentro del TextInput
    bottom: 15,
    zIndex: 1, 
  },
  carList: {
    paddingTop: 10,
    paddingBottom: 40,
    width: '100%',
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
