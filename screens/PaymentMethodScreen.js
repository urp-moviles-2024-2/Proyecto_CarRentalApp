import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import SavedCard from '../components/CardPayment';

const PaymentMethodScreen = () => {
  const [newCard, setNewCard] = useState({
    cardNumber: '',
    cardHolderName: '',
    expiryDate: '',
    cvv: '',
  });

  const savedCards = [
    {
      id: '1',
      cardNumber: '2541 0039 8567 9850',
      cardHolderName: 'Dirghayu Joshi',
      cardType: 'Mastercard',
    },
    {
      id: '2',
      cardNumber: '8968 7052 9366 4001',
      cardHolderName: 'Dirghayu Joshi',
      cardType: 'Visa',
    },
  ];

  const handleInputChange = (field, value) => {
    setNewCard({...newCard, [field]: value});
  };

  const renderSavedCard = ({item}) => (
    <SavedCard
      cardNumber={item.cardNumber}
      cardHolderName={item.cardHolderName}
      cardType={item.cardType}
      onPress={() => console.log(`Selected card: ${item.cardNumber}`)}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Payment Method</Text>
        <TouchableOpacity
          style={styles.changeButton}
          onPress={() => console.log('Change button pressed')}
        >
          <Text style={styles.changeText}>Change</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={savedCards}
        renderItem={renderSavedCard}
        keyExtractor={item => item.id}
        style={styles.savedCardsList}
      />
      <View style={styles.addCardSection}>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          value={newCard.cardNumber}
          onChangeText={value => handleInputChange('cardNumber', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Card Holder Name"
          value={newCard.cardHolderName}
          onChangeText={value => handleInputChange('cardHolderName', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Expiry Date"
          value={newCard.expiryDate}
          onChangeText={value => handleInputChange('expiryDate', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="CVV"
          value={newCard.cvv}
          onChangeText={value => handleInputChange('cvv', value)}
        />
        <TouchableOpacity style={styles.payNowButton}>
          <Text style={styles.payNowText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  changeButton: {
    backgroundColor: 'transparent',
    padding: 10,
  },
  changeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#68c400',
  },
  savedCardsList: {
    marginBottom: 20,
  },
  addCardSection: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  payNowButton: {
    backgroundColor: '#c3e54b',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  payNowText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default PaymentMethodScreen;
