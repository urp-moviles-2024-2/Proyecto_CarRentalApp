import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';

const SearchScreen = () => {
  const categories = [
    {id: '1', name: 'Coffee', places: '150 places', color: '#a9d46f'},
    {id: '2', name: 'Cinema', places: '8 places', color: '#f45a5a'},
  ];

  const handlerHome = () => {
    navigation.navigate('HomeScreen');
  };

  const favorites = [
    {
      id: '1',
      name: 'Home',
      address: '1901 Thornridge Cir. Shiloh',
      distance: '5.1 KM',
    },
    {
      id: '2',
      name: 'Office',
      address: '6301 Elgin St. Celina, Delaware',
      distance: '2.5 KM',
    },
    {
      id: '3',
      name: 'Yoga Centre',
      address: '8502 Preston Rd. Inglewood',
      distance: '1.0 KM',
    },
  ];

  const navigation = useNavigation();
  const handleSearchScreen = () => {
    navigation.navigate('SearchAllScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="black"
          onPress={handlerHome}
        />
        <Text style={styles.headerText}>All Brands</Text>
      </View>

      <TextInput style={styles.searchInput} placeholder="Search" />

      {categories.map(category => (
        <TouchableOpacity
          key={category.id}
          style={[styles.categoryButton, {backgroundColor: category.color}]}
        >
          <Text style={styles.categoryText}>{category.name}</Text>
          <Text style={styles.placesText}>{category.places}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.sectionTitle}>Favorite</Text>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.favoriteItem}>
            <View style={styles.dot} />
            <View style={styles.favoriteText}>
              <Text style={styles.favoriteName}>{item.name}</Text>
              <Text style={styles.favoriteAddress}>{item.address}</Text>
            </View>
            <Text style={styles.favoriteDistance}>{item.distance}</Text>
          </View>
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
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  categoryButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  placesText: {
    fontSize: 14,
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  favoriteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#000',
    marginRight: 10,
  },
  favoriteText: {
    flex: 1,
  },
  favoriteName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  favoriteAddress: {
    fontSize: 14,
    color: '#666',
  },
  favoriteDistance: {
    fontSize: 14,
    color: '#666',
  },
});

export default SearchScreen;
