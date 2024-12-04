import React,{useContext} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { FavoriteContext } from '../../data/context/FavoriteContext';

const CarItem = ({ cars }) => {
  const navigation = useNavigation();
  const { addFavorite, deleteFavorite, isFavorite } = useContext(FavoriteContext);

  const handleCarDetailsScreen = () => {
    navigation.navigate('CarDetailsScreen', { car: cars });
  };

  const toggleFavorite = () => {
    if (isFavorite(cars.id)) {
      deleteFavorite(cars.id);
    } else {
      addFavorite(cars.id);
    }
  };

  return (
    <View style={styles.carContainer}>
      <TouchableOpacity onPress={handleCarDetailsScreen}>
        <Image source={{ uri: cars.image }} style={styles.carImage} />
      </TouchableOpacity>
      <View style={styles.carNameContainer}>
        <Text style={styles.carName}>{cars.name}</Text>
        <TouchableOpacity style={styles.favoriteIcon} onPress={toggleFavorite}>
          <Icon
            name={isFavorite(cars.id) ? 'heart' : 'heart-outline'}
            size={24}
            color={isFavorite(cars.id) ? 'red' : 'black'}
          />
        </TouchableOpacity>
        <View style={styles.ratingContainer}>
          <Text style={styles.carRating}>{cars.starts}</Text>
          <Icon name="star" size={16} color="#FFD700" style={styles.starIcon} />
        </View>
      </View>
      <View style={styles.carDetails}>
        <View style={styles.carInfo}>
          <Icon name="speedometer" size={16} color="#d3d3d3" style={styles.speedIcon} />
          <Text>{cars.hpower} hp</Text>
          <Icon name="car" size={16} color="#d3d3d3" style={styles.speedIcon} />
          <Text>{cars.type}</Text>
          <Text style={styles.carPrice}>{cars.price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carContainer: {
    flexDirection: 'column',
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    width: '100%',
    alignSelf: 'center',
  },
  favoriteIcon:{
    position:'absolute',
    bottom: 170,
    left:'98%',
    backgroundColor:'rgba(250,250,250,0.6)',
    borderRadius:10,
    padding:6,
    elevation:5,
  },
  carImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
  },
  carNameContainer: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 40,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starIcon: {
    marginLeft: 5,
  },
  carRating: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#f39c12',
  },
  carDetails: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  carInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
    width: '90%',
    justifyContent: 'space-between',
  },
  speedIcon: {
    marginLeft: 15,
    top: 2,
  },
  carPrice: {
    fontSize: 16,
    marginLeft: 15,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default CarItem;
