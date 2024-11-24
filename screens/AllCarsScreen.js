import { StyleSheet, Text, View, Modal, TouchableOpacity, FlatList, TextInput } from 'react-native';
import React, { useState } from 'react';
import ReturntButton from '../components/Buttons/ReturnButton';
import FilterButton from '../components/Buttons/FilterButton';
import CarItem from '../components/Cars/CarItem';
import { useNavigation } from '@react-navigation/native';
import { rentalCars } from '../data/rentalCars';
import Icon from 'react-native-vector-icons/Ionicons';
import TitleScreen from '../components/TitleScreen';
import FiltersModal from '../components/Buttons/FilterModal';

const AllCarsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    priceRange: [500, 2000],
    vehicleTypes: [
      { id: 'automatic', name: 'Automatic', selected: false },
      { id: 'manual', name: 'Manual', selected: false },
    ],
    characteristics: [
      { id: 'airConditioning', name: 'Air Conditioning', selected: false },
      { id: 'sunroof', name: 'Sunroof', selected: false },
    ],
  });

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

  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => {
      if (type === 'vehicleTypes') {
        return {
          ...prevFilters,
          vehicleTypes: prevFilters.vehicleTypes.map((item) =>
            item.id === value ? { ...item, selected: !item.selected } : item
          ),
        };
      }
      if (type === 'characteristics') {
        return {
          ...prevFilters,
          characteristics: prevFilters.characteristics.map((item) =>
            item.id === value ? { ...item, selected: !item.selected } : item
          ),
        };
      }
      return prevFilters;
    });
  };

  const clearAllFilters = () => {
    const resetFilters = {
      priceRange: [500, 2000],
      vehicleTypes: [
        { id: 'automatic', name: 'Automatic', selected: false },
        { id: 'manual', name: 'Manual', selected: false },
      ],
      characteristics: [
        { id: 'airConditioning', name: 'Air Conditioning', selected: false },
        { id: 'sunroof', name: 'Sunroof', selected: false },
      ],
    };
    setFilters(resetFilters); // Restablecer los filtros
  };

  const renderItem = ({ item }) => <CarItem car={item} />;

  const filteredCars = rentalCars.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    // Filtra por el tipo de vehículo
    (filters.vehicleTypes.some((vt) => vt.selected && car.type === vt.id) || filters.vehicleTypes.every((vt) => !vt.selected)) &&
    // Filtra por las características seleccionadas
    (filters.characteristics.some((ch) => ch.selected && car.char.includes(ch.id)) || filters.characteristics.every((ch) => !ch.selected))
  );

  return (
    <View style={styles.container}>
      <ReturntButton
        onPressButton={handleHomeScreen}
      />
      <TitleScreen>All Cars</TitleScreen>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <FilterButton onPressButton={handleOpenModal}>Filter</FilterButton>
      </View>
      <FlatList
        data={filteredCars}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.carList}
        contentInsetAdjustmentBehavior="automatic" // Mejora el comportamiento en iOS
        showsVerticalScrollIndicator={false} // Oculta barra de scroll
      />
      <FiltersModal
        visible={modalVisible}
        onClose={handleCloseModal}
        filters={filters}
        onFilterChange={handleFilterChange}
        clearAllFilters={clearAllFilters} // Pasar la función para limpiar filtros
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#f5f5f5',
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
    borderRadius: 25,
    flex: 1,
    height: 50,
    paddingLeft: 15,
    marginRight: 10,
    top:12,
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
  },
  searchInput: {
    height: 50,
    flex: 1,
    backgroundColor: 'transparent',
    color: '#333',
    paddingLeft: 35,
    paddingRight: 15,
    borderRadius: 25,
    fontSize: 16,
  },
  carList: {
    paddingTop: 10,
    paddingBottom: 20,
  },
});

export default AllCarsScreen;
