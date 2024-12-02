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
import PrimaryButton from '../components/PrimaryButton';
import ReturnButton from '../components/Buttons/ReturnButton';
import TitleScreen from '../components/TitleScreen';
import { useNavigation } from '@react-navigation/native';


const PaymentMethodScreen = () => {
  const navigation = useNavigation();
  
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

  const handleHome = () => {
    navigation.navigate('HomeScreen');
  };

  const renderSavedCard = ({item}) => (
    <SavedCard
      cardNumber={item.cardNumber}
      cardHolderName={item.cardHolderName}
      cardType={item.cardType}
      onPress={() => console.log(`Selected card: ${item.cardNumber}`)}
    />
  );

  const handleAddress = () => {
    navigation.navigate('SelectAdressScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <ReturnButton onPressButton={handleAddress} />
        <TitleScreen>Address</TitleScreen>
      </View>

      <View style={styles.header}>
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
        <PrimaryButton onPressButton={handleHome}>Pay Now</PrimaryButton>
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
    paddingBottom:40
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
    marginTop: 20
  },
  changeButton: {
    backgroundColor: 'transparent',
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
  }
});

export default PaymentMethodScreen;
