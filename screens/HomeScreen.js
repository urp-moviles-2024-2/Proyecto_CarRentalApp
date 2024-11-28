import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GLOBAL_STYLES } from '../constants/styles';
import useCars from '../components/Cars/useCars';
import CarItem from '../components/Cars/CarItem';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const { cars } = useCars();
  const highRatedCars = cars.filter(
    car =>car.starts > 4.5 &&
      (car.name.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery === '') //funcion para buscar carros
  );
  const brandsHandler = () => {navigation.navigate('SearchAllScreen');};
  const carsHandler = () => {navigation.navigate('AllCarsScreen');};
  const searchHandler = () => {navigation.navigate('SearchScreen');};
  const trendingBrands = [
    { id: 1, name: 'Tesla', logo: 'https://via.placeholder.com/40' },
    { id: 2, name: 'Mercedes', logo: 'https://via.placeholder.com/40' },
    { id: 3, name: 'Ferrari', logo: 'https://via.placeholder.com/40' },
    { id: 4, name: 'Bugatti', logo: 'https://via.placeholder.com/40' },
    { id: 5, name: 'BMW', logo: 'https://via.placeholder.com/40' },
  ];


  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <Image
          source={{ uri: 'https://via.placeholder.com/20' }}
          style={styles.locationIcon}
        />
        <Text style={styles.locationText}>Ahmedabad, INDIA</Text>
        <TouchableOpacity style={styles.dropdownIcon} onPress={searchHandler}>
          <Text>▼</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello Johnson 👋</Text>
        <Text style={styles.subtitle}>Let’s find your favourite car here</Text>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search cars"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Trending Brands</Text>
          <TouchableOpacity onPress={brandsHandler}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={trendingBrands}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.brandItem}>
              <Image source={{ uri: item.logo }} style={styles.brandLogo} />
              <Text style={styles.brandName}>{item.name}</Text>
            </View>
          )}
        />
      </View>
      <View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Cars</Text>
          <TouchableOpacity onPress={carsHandler}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={highRatedCars}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <CarItem car={item} />}
          scrollEnabled={false} // Evitar desplazamiento interno
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GLOBAL_STYLES.colors.colorblanco,
    paddingHorizontal: 20,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: '1%',
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  dropdownIcon: {
    paddingHorizontal: 10,
  },
  header: {
    marginVertical: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  searchInput: {
    backgroundColor: '#E9E9E9',
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 14,
    color: '#3CB371',
  },
  brandItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  brandLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  brandName: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default HomeScreen;
