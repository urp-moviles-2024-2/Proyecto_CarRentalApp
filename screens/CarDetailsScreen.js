import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const CarDetailScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Porches Panamera</Text>

      <Image
        source={require('../assets/porsche.jpg')} // Imagen de ejemplo
        style={styles.carImage}
      />


      {/* Specifications Section */}
      <View style={styles.specsContainer}>
        <View style={styles.card}>
          <Text style={styles.specTitle}>Engine</Text>
          <Text style={styles.specValue}>1600 hp</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.specTitle}>Transmission</Text>
          <Text style={styles.specValue}>Automatic</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.specTitle}>Fuel Type</Text>
          <Text style={styles.specValue}>Petrol</Text>
        </View>
      </View>

      {/* Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Descriptions</Text>
        <Text style={styles.descriptionText}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Text>
      </View>

      {/* Best Features */}
      <View style={styles.featuresContainer}>
        <Text style={styles.featuresTitle}>Best Features</Text>
        <View style={styles.featureItem}>
          <Text style={styles.featureName}>Bluetooth Connectivity</Text>
          <Text style={styles.featureValue}>Yes</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureName}>Automatic Climate Control</Text>
          <Text style={styles.featureValue}>Yes</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Text style={styles.totalPriceText}>Total Price</Text>
          <Text style={styles.totalPrice}>$90,000</Text>
        </View>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  card: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginHorizontal: 4,
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
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  carImage: {
    alignSelf: 'center', // Centra la imagen horizontalmente sin cambiar el tamaño
    marginBottom: 16, // Agrega espacio debajo de la imagen
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
  featuresContainer: {
    marginVertical: 16,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
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
  footer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  priceContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
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
  bookButton: {
    backgroundColor: '#9df900',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CarDetailScreen;
