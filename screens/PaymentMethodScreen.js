import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import EditCard from '../components/Payment';

const PaymentMethods = ({navigation}) => {
  const [savedCards, setSavedCards] = useState([
    {
      id: '1',
      number: '2541 0039 8567 9850',
      type: 'Mastercard',
      holder: 'Dirghayu Joshi',
    },
    {
      id: '2',
      number: '8968 7052 9366 4001',
      type: 'Visa',
      holder: 'Dirghayu Joshi',
    },
  ]);

  const [newCard, setNewCard] = useState({
    number: '',
    holder: '',
    expiry: '',
    cvv: '',
  });

  const handleCardPress = card => {
    navigation.navigate('Payment', {card, savedCards, setSavedCards});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Method</Text>

      {/* Lista de tarjetas guardadas */}
      <FlatList
        data={savedCards}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleCardPress(item)}
          >
            <Text style={styles.cardNumber}>{item.number}</Text>
            <Text style={styles.cardHolder}>{item.holder}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />

      {/* Formulario para agregar nueva tarjeta */}
      <View style={styles.addCardContainer}>
        <TextInput
          placeholder="Card Number"
          style={styles.input}
          value={newCard.number}
          onChangeText={text => setNewCard({...newCard, number: text})}
        />
        <TextInput
          placeholder="Card Holder Name"
          style={styles.input}
          value={newCard.holder}
          onChangeText={text => setNewCard({...newCard, holder: text})}
        />
        <TextInput
          placeholder="Expiry Date"
          style={styles.input}
          value={newCard.expiry}
          onChangeText={text => setNewCard({...newCard, expiry: text})}
        />
        <TextInput
          placeholder="CVV"
          style={styles.input}
          value={newCard.cvv}
          onChangeText={text => setNewCard({...newCard, cvv: text})}
        />
        <TouchableOpacity style={styles.payNowButton}>
          <Text style={styles.payNowText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: '#f5f5f5'},
  title: {fontSize: 20, fontWeight: 'bold', marginBottom: 20},
  card: {
    padding: 15,
    backgroundColor: '#c3e54b',
    marginBottom: 10,
    borderRadius: 8,
  },
  cardNumber: {fontSize: 16, fontWeight: 'bold'},
  cardHolder: {fontSize: 14, color: '#555'},
  addCardContainer: {marginTop: 20},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  payNowButton: {backgroundColor: '#c3e54b', padding: 15, borderRadius: 8},
  payNowText: {textAlign: 'center', color: '#fff', fontWeight: 'bold'},
});

export default PaymentMethods;
