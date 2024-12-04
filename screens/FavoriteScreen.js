import { View, Text, FlatList, StyleSheet} from 'react-native'
import React ,{useContext} from 'react'
import { useNavigation } from '@react-navigation/native';
import TitleScreen from '../components/TitleScreen';
import { FavoriteContext } from '../data/context/FavoriteContext';
import { GLOBAL_STYLES } from '../constants/styles';
import CarItem from '../components/Cars/CarItem';
import { listCars } from '../util/http';



const FavoriteScreen = () => {
  const { favoriteIds } = useContext(FavoriteContext);
  const [cars, setCars] = React.useState([]);

  React.useEffect(() => {
    const fetchCars = async () => {
      try {
        const allCars = await listCars();
        const favoriteCars = allCars.filter((car) => favoriteIds.includes(car.id));
        setCars(favoriteCars);
      } catch (error) {
        console.error('Error loading favorite cars:', error);
      }
    };
    fetchCars();
  }, [favoriteIds]);

  return (
    <View style={styles.container}>
      {cars.length > 0 ? (
        <FlatList
          data={cars}
          renderItem={({ item }) => <CarItem cars={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.emptyMessage}>No tienes autos favoritos.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 50,
    backgroundColor: GLOBAL_STYLES.colors.colorblanco,
  },
  emptyMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
    color: GLOBAL_STYLES.colorgrisletrasybordes,
  },
});

export default FavoriteScreen;