import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import PrimaryButton from '../components/PrimaryButton';
import DateTime from '../components/DateAndTime/DateTime';
import ReturnButton from '../components/Buttons/ReturnButton';
import { GLOBAL_STYLES } from '../constants/styles';
import TitleScreen from '../components/TitleScreen';

const CarDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { car } = route.params; // Datos del auto seleccionado desde la BD
  const [modalVisible, setModalVisible] = useState(false);
  const handleOpenModalDate = () => setModalVisible(true);
  const handleCloseModalDate = () => setModalVisible(false);

  const specsData = [
    { id: '1', title: 'Horsepower', value: `${car.hpower} hp` },
    { id: '2', title: 'Transmission', value: car.type },
    { id: '3', title: 'Features', value: car.char },
  ];
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.specTitle}>{item.title}</Text>
      <Text style={styles.specValue}>{item.value}</Text>
    </View>
  );



  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <ReturnButton onPressButton={() => navigation.navigate('HomeScreen')} />
        <TitleScreen>{car.name}</TitleScreen>
      </View>

      <View style={styles.container3}>
        <Image source={{ uri: car.image }} style={styles.carImage} />
      </View>

      <View style={styles.specsContainer}>
        <FlatList
          data={specsData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          horizontal={true}
          scrollEnabled={false}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.titleSection}>Description</Text>
        <Text style={styles.descriptionText}>{car.description}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Text style={styles.totalPriceText}>Total Price</Text>
          <Text style={styles.totalPrice}>{car.price}</Text>
        </View>
        <View style={styles.fullButtonContainer}>
          <PrimaryButton onPressButton={handleOpenModalDate}>Book Now</PrimaryButton>
        </View>
        <DateTime
          visible={modalVisible}
          onClose={handleCloseModalDate}
          onConfirm={(data) => console.log('Date selected:', data)}
          car={car}
        />
      </View>
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
  container2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginRight: 20,
  },
  container3: {
    marginTop: 10,
  },
  fullButtonContainer: {
    width: '100%',
  },
  specsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  card: {
    backgroundColor:GLOBAL_STYLES.colors.colorgristransparente,
    padding: 18,
    marginHorizontal: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  specTitle: {
    fontSize: 14,
    color: '#666',
  },
  specValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  descriptionContainer: {
    marginVertical: 16,
  },
  titleSection: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  carImage: {
    alignSelf: 'center',
    marginBottom: 15,
    marginTop: 15,
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 50,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
  footer: {
    marginTop: 15,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  priceContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  totalPriceText: {
    fontSize: 16,
    color: '#666',
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: GLOBAL_STYLES.colors.colorverdeprincipal,
  },
});
export default CarDetailScreen;
