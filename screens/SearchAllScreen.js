import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const SearchAllScreen = () => {
  const navigation = useNavigation();
  const handleAllCarsScreen = () => {
    navigation.navigate('AllCarsScreen');
  };

  const cardsData = [
    {
      id: '1',
      name: 'Tesla',
      image: require('../assets/imgMarcas/tesla.jpg'),
    },
    {
      id: '2',
      name: 'Mercedes',
      image: require('../assets/imgMarcas/mercedes.png'),
    },
    {
      id: '3',
      name: 'Ferrari',
      image: require('../assets/imgMarcas/ferrari.png'),
    },
    {
      id: '4',
      name: 'Bugatti',
      image: require('../assets/imgMarcas/bugatti.png'),
    },
    {id: '5', name: 'BMW', image: require('../assets/imgMarcas/bmw.png')},
    {
      id: '6',
      name: 'Lamborghini',
      image: require('../assets/imgMarcas/lamborghini.png'),
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.headerText}>All Brands</Text>
      </View>

      {/* Search Bar */}
      <TextInput style={styles.searchInput} placeholder="Search" />

      {/* List Title */}
      <Text style={styles.listTitle}>All Brands</Text>

      {/* Brands List */}
      <FlatList
        data={cardsData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.brandItem}>
            <Image source={{uri: item.logo}} style={styles.logo} />
            <View style={styles.brandInfo}>
              <Text style={styles.brandName}>{item.name}</Text>
              <Text style={styles.carsAvailable}>{item.cars}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>
        )}
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  brandItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  brandInfo: {
    flex: 1,
  },
  brandName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  carsAvailable: {
    fontSize: 14,
    color: '#666',
  },
});

export default SearchAllScreen;
