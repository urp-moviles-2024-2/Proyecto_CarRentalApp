import { StyleSheet, View, FlatList, TextInput } from 'react-native';
import React, { useState } from 'react';
import ReturntButton from '../components/Buttons/ReturnButton';
import FilterButton from '../components/Buttons/FilterButton';
import CarItem from '../components/Cars/CarItem';
import Icon from 'react-native-vector-icons/Ionicons';
import TitleScreen from '../components/TitleScreen';
import FiltersModal from '../components/Buttons/FilterModal';
import useCars from '../components/Cars/useCars';
import { useNavigation } from '@react-navigation/native';
//import CarContext from '../store/context/CarContext';

const AllCarsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const { cars, filters,searchQuery,setSearchQuery,handleFilterChange, handleClearFilters,} = useCars();
  const handleOpenModal = () => {setModalVisible(true); };
  const handleCloseModal = () => {setModalVisible(false);};

  const handleHomeScreen = () => {
    navigation.navigate('HomeScreen'); 
  };

  //const carsCtx = useContext(CarContext);

  return (
    <View style={styles.container}>
      <ReturntButton onPressButton={handleHomeScreen} />
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
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.carList}
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      />
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
  carList: {
    paddingTop: 10,
    paddingBottom: 20,
  },
});

export default AllCarsScreen;
