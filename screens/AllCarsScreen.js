import React, { useContext, useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { CarsContext } from '../data/context/CarsContext';
import ReturnButton from '../components/Buttons/ReturnButton';
import CarList from '../components/Cars/CarList';
import FilterButton from '../components/Buttons/FilterButton';
import Icon from 'react-native-vector-icons/Ionicons';
import TitleScreen from '../components/TitleScreen';
import { GLOBAL_STYLES } from '../constants/styles';
import FiltersModal from '../components/Buttons/FilterModal';
import { useNavigation } from '@react-navigation/native';


const AllCarsScreen = () => {
  const { cars, filters, handleFilterChange, handleClearFilters, searchQuery, setSearchQuery } = useContext(CarsContext);
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const handleHomeScreen = () => {
    navigation.navigate('HomeScreen');
  };

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  const handleCarPress = (car) => {
    navigation.navigate('CarDetailScreen', { car }); // Navega con los datos del carro
  };



  
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <ReturnButton onPressButton={handleHomeScreen} />
        <TitleScreen>All Cars</TitleScreen>
      </View>
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
      <CarList cars={cars} onCarPress={handleCarPress} />
      <FiltersModal
        visible={modalVisible}
        onClose={handleCloseModal}
        filters={filters}
        onFilterChange={handleFilterChange}
        clearAllFilters={handleClearFilters}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: GLOBAL_STYLES.colors.colorblanco,
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
    justifyContent: 'space-between',
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
    top: 12,
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
});
export default AllCarsScreen;
