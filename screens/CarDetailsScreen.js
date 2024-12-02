import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PrimaryButton from '../components/PrimaryButton';
import DateTime from '../components/DateAndTime/DateTime';
import ReturnButton from '../components/Buttons/ReturnButton';
import TitleScreen from '../components/TitleScreen';

const CarDetailScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const navigation = useNavigation();
  const handleOpenModalDate = () => {
    setModalVisible(true);
  };
  const handleCloseModalDate = () => {
    setModalVisible(false);
  };
  const handleConfirmDateTime = data => {
    setSelectedData(data); // Guardar fecha y hora seleccionada
  };
  const handlerHome = () => {
    navigation.navigate('HomeScreen');
  };

  const specsData = [
    { id: '1', title: 'Engine', value: '1600 hp' },
    { id: '2', title: 'Transmission', value: 'Automatic' },
    { id: '3', title: 'Fuel Type', value: 'Petrol' },
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
        <ReturnButton onPressButton={handlerHome} />
        <TitleScreen>Porsche Panemera</TitleScreen>
      </View>

      <View style={styles.container3}>
        <Image
          source={require('../assets/porsche.jpg')}
          style={styles.carImage}
        />
      </View>
      

      <View style={styles.specsContainer}>
        <FlatList
          data={specsData}
          keyExtractor={item => item.id}
          renderItem={renderItem} 
          horizontal={true} 
        />
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.titleSection}>Descriptions</Text>
        <Text style={styles.descriptionText}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Text>
      </View>

{/*
      <View style={styles.featuresContainer}>
        <Text style={styles.titleSection}>Best Features</Text>
        <View style={styles.featureItem}>
          <Text style={styles.featureName}>Bluetooth Connectivity</Text>
          <Text style={styles.featureValue}>Yes</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureName}>Automatic Climate Control</Text>
          <Text style={styles.featureValue}>Yes</Text>
        </View>
      </View>
*/}
      
      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Text style={styles.totalPriceText}>Total Price</Text>
          <Text style={styles.totalPrice}>$90,000</Text>
        </View>
        <View style={styles.fullButtonContainer}>
          <PrimaryButton onPressButton={handleOpenModalDate}>
            Book Now
          </PrimaryButton>
        </View>
        
        <DateTime
          visible={modalVisible}
          onClose={handleCloseModalDate}
          onConfirm={handleConfirmDateTime}
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
    backgroundColor: '#fff',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  container3: {
    marginTop: 10
  },
  fullButtonContainer: {
    width: '100%',
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#e0ffe0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4caf50',
  },
  specsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 20,
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
    width: '100%'
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
    color: '#4caf50',
  },
});

export default CarDetailScreen;


{/*
    featuresContainer: {
    marginVertical: 16,
  },
  featureItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  featureName: {
    fontSize: 14,
    color: '#666',
  },
  featureValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  */}