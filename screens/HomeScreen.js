import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList,Image,TouchableOpacity,} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { GLOBAL_STYLES } from '../constants/styles';
import { CarsContext } from '../data/context/CarsContext';
import CarItem from '../components/Cars/CarItem';
import { cardsData } from '../data/cardsData';
import Description from '../components/Description';
import Icon from 'react-native-vector-icons/Ionicons';
import { useUser } from '../data/context/UserContext';


const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { cars, searchQuery, setSearchQuery } = useContext(CarsContext);
  const { user } = useUser();
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
        <Text style={styles.greeting}>Hello {user?.name || "Guest"} 👋</Text>
        <Description style={styles.subtitle}>
          Let’s find your favourite car here
        </Description>
      </View>

      <View style={styles.header2}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

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
    color: GLOBAL_STYLES.colors.colorverdeprincipal,
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
  header2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: GLOBAL_STYLES.colors.colorgristransparente,
    borderRadius: 25,
    width: '100%',
    height: 50,
    borderColor: GLOBAL_STYLES.colors.colorgrisletrasybordes,
    borderWidth: 0.5
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
    color: GLOBAL_STYLES.colors.colorverdeprincipal,
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
