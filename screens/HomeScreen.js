import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSearchAllScreen = () => {
    navigation.navigate('SearchAllScreen');
  };

  const handleViewAllCars = () => {
    navigation.navigate('AllCarsScreen');
  };

  const handleLocationScreen = () => {
    navigation.navigate('SearchScreen');
  };

  return (
    <View style={styles.container}>
      <PrimaryButton onPressButton={handleLocationScreen}>
        <Text>Location</Text>
      </PrimaryButton>

      <Text style={styles.screenTitle}>HomeScreen</Text>

      <View style={styles.headerContainer}>
        <Text style={styles.All} onPress={handleSearchAllScreen}>
          View All
        </Text>
        <Text style={styles.All} onPress={handleViewAllCars}>
          View All
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffff',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  headerContainer: {
    width: '100%', // Usa todo el ancho del contenedor
    alignItems: 'flex-end', // Alinea los elementos al lado derecho
    paddingHorizontal: 20, // Margen interno a los lados
    marginTop: 20,
  },
  All: {
    fontSize: 14,
    marginBottom: 60, // Espaciado entre los textos "View All" 
  },
});

export default HomeScreen;
