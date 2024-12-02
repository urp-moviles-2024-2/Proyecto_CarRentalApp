import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import ReturnButton from '../components/Buttons/ReturnButton';
import TitleScreen from '../components/TitleScreen';
import { Icon } from 'react-native-paper';

const SearchScreen = () => {
  const categories = [
    {id: '1', name: 'Coffee', places: '150 places', color: '#a9d46f'},
    {id: '2', name: 'Cinema', places: '8 places', color: '#f45a5a'},
  ];

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
  
  const handlerHome = () => {
    navigation.navigate('HomeScreen');
  };

  const navigation = useNavigation();
  

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <ReturnButton onPressButton={handlerHome} />
        <TitleScreen>Search Location</TitleScreen>
      </View>

      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
          />
        </View>
      </View>

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
          <TouchableOpacity style={styles.favoriteItem}>
            <View style={styles.dot} />
            <View style={styles.favoriteText}>
              <Text style={styles.favoriteName}>{item.name}</Text>
              <Text style={styles.favoriteAddress}>{item.address}</Text>
            </View>
            <Text style={styles.favoriteDistance}>{item.distance}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 50
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    marginTop: 40
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
    borderRadius: 25,
    width: '100%',
    height: 50,
  },
  searchIcon: {
    position: 'absolute',
    marginLeft: 15,
  },
  searchInput: {
    backgroundColor: 'transparent',
    color: '#333',
    paddingLeft: 45,
    fontSize: 16,
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
