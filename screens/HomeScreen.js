import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList,Image,TouchableOpacity,} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { GLOBAL_STYLES } from '../constants/styles';
import { CarsContext } from '../data/context/CarsContext';
import CarItem from '../components/Cars/CarItem';
import { cardsData } from '../data/cardsData';
import Description from '../components/Description';

const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { cars, searchQuery, setSearchQuery } = useContext(CarsContext);

  // Verifica si hay un mensaje de éxito
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    if (route.params?.successMessage) {
      setSuccessMessage(route.params.successMessage);
      // Limpia el parámetro después de mostrar el mensaje
      navigation.setParams({ successMessage: null });
    }
  }, [route.params?.successMessage]);

  const highRatedCars = cars.filter(
    (car) =>
      car.starts > 4.5 &&
      (car.name.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery === '')
  );

  const brandsHandler = () => navigation.navigate('SearchAllScreen');
  const carsHandler = () => navigation.navigate('AllCarsScreen');
  const searchHandler = () => navigation.navigate('SearchScreen');

  const renderItem = ({ item }) => (
    <View style={styles.brandItem}>
      <Image source={item.image} style={styles.brandLogo} />
      <Text style={styles.brandName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Muestra el mensaje de éxito si existe */}
      {successMessage && (
        <View style={styles.successMessageContainer}>
          <Text style={styles.successMessageText}>{successMessage}</Text>
        </View>
      )}
      <View style={styles.topBar}>
        <Text style={styles.locationText}>Ahmedabad, INDIA</Text>
        <TouchableOpacity style={styles.dropdownIcon} onPress={searchHandler}>
          <Text>▼</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello Johnson 👋</Text>
        <Description style={styles.subtitle}>
          Let’s find your favourite car here
        </Description>
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
          data={cardsData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          scrollEnabled={false}
        />
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Cars</Text>
        <TouchableOpacity onPress={carsHandler}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={highRatedCars}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CarItem cars={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GLOBAL_STYLES.colors.colorblanco,
    paddingHorizontal: 20,
    scrollEnabled: true,
    paddingTop: 50,
  },
  successMessageContainer: {
    backgroundColor: '#D4EDDA',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  successMessageText: {
    color: '#155724',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '1%',
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
  searchInput: {
    backgroundColor: '#E9E9E9',
    borderRadius: 10,
    padding: 10,
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
