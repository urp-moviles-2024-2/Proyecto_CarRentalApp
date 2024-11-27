import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { GLOBAL_STYLES } from '../constants/styles';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const brandsHandler = () => {
    navigation.navigate('SearchAllScreen');
  };

  const carsHandler = () => {
    navigation.navigate('AllCarsScreen');
  };

  const searchHandler = () => {
    navigation.navigate('SearchScreen');
  };

  const trendingBrands = [
    {id: 1, name: 'Tesla', logo: 'https://via.placeholder.com/40'},
    {id: 2, name: 'Mercedes', logo: 'https://via.placeholder.com/40'},
    {id: 3, name: 'Ferrari', logo: 'https://via.placeholder.com/40'},
    {id: 4, name: 'Bugatti', logo: 'https://via.placeholder.com/40'},
    {id: 5, name: 'BMW', logo: 'https://via.placeholder.com/40'},
  ];

  const popularCars = [
    {
      id: 1,
      name: 'Mercedes SLK Class',
      image: 'https://via.placeholder.com/150',
      price: '$85,000',
      hp: '1100 hp',
      transmission: 'Automatic',
      rating: 5.0,
    },
    {
      id: 2,
      name: 'Porsche Panamera',
      image: 'https://via.placeholder.com/150',
      price: '$90,000',
      hp: '1600 hp',
      transmission: 'Automatic',
      rating: 4.8,
    },
    {
      id: 3,
      name: 'BMW i8',
      image: 'https://via.placeholder.com/150',
      price: '$75,000',
      hp: '1200 hp',
      transmission: 'Automatic',
      rating: 4.9,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image
          source={{uri: 'https://via.placeholder.com/20'}} // Reemplaza con el icono de ubicación
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
        placeholder="Search"
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
          renderItem={({item}) => (
            <View style={styles.brandItem}>
              <Image source={{uri: item.logo}} style={styles.brandLogo} />
              <Text style={styles.brandName}>{item.name}</Text>
            </View>
          )}
        />
      </View>

      {/* Popular Cars */}
      <View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Cars</Text>
          <TouchableOpacity onPress={carsHandler}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={popularCars}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.carCard}>
              <Image source={{uri: item.image}} style={styles.carImage} />
              <View style={styles.carInfo}>
                <Text style={styles.carName}>{item.name}</Text>
                <Text style={styles.carDetails}>
                  {item.hp} • {item.transmission}
                </Text>
                <Text style={styles.carPrice}>{item.price}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
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
    marginTop: 20,
    marginBottom: 10,
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
  carCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  carImage: {
    width: 100,
    height: 60,
    borderRadius: 10,
  },
  carInfo: {
    marginLeft: 15,
    justifyContent: 'space-between',
  },
  carName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  carDetails: {
    fontSize: 14,
    color: '#666',
  },
  carPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3CB371',
  },
});

export default HomeScreen;
