import React, { useState, useEffect } from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,FlatList,Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SavedCard from '../components/CardPayment';
import PrimaryButton from '../components/PrimaryButton';
import ReturnButton from '../components/Buttons/ReturnButton';
import TitleScreen from '../components/TitleScreen';
import { useNavigation , useRoute} from '@react-navigation/native';
import { listCards, storeCard, updateCard, deleteCard } from '../util/http';
import { GLOBAL_STYLES } from '../constants/styles';

const PaymentMethodScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const car = route.params.car;
  const [newCard, setNewCard] = useState({
    cardNumber: '',
    cardHolderName: '',
    expiryDate: '',
    cvv: '',
  });
  const [savedCards, setCards] = useState([]);
  const [editingCard, setEditingCard] = useState(null); // Estado para edición
  const [loading, setLoading] = useState(true);
  const handleAddress = () => {
    navigation.navigate('SelectAdressScreen', { car });
  };
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        if (!userId) {
          Alert.alert('Error', 'User ID not found.');
          return;
        }
        const userCards = await listCards(userId);
        setCards(userCards);
      } catch (error) {
        console.error('Error fetching cards:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCards();
  }, []);
  const handleInputChange = (field, value) => {
    setNewCard({ ...newCard, [field]: value });
  };
  const handleAddCard = async () => {
    if (!newCard.cardNumber || !newCard.cardHolderName || !newCard.expiryDate || !newCard.cvv) {
      Alert.alert('Error', 'Por favor llena todos los campos antes de añadir la tarjeta.');
      return;
    }
    try {
      const userId = await AsyncStorage.getItem('userId');
      if (!userId) {
        Alert.alert('Error', 'User ID not found.');
        return;
      }
      const id = await storeCard({ userId, ...newCard });
      setCards((prev) => [...prev, { id, ...newCard }]);
      setNewCard({ cardNumber: '', cardHolderName: '', expiryDate: '', cvv: '' });
    } catch (error) {
      console.error('Error adding card:', error.message);
      Alert.alert('Error', 'No se pudo agregar la tarjeta.');
    }
  };
  const handleEditCard = (card) => {
    setEditingCard(card);
    setNewCard({
      cardNumber: card.cardNumber,
      cardHolderName: card.cardHolderName,
      expiryDate: card.expiryDate,
      cvv: card.cvv,
    });
  };
  const handleSaveEdit = async () => {
    if (!newCard.cardNumber || !newCard.cardHolderName || !newCard.expiryDate || !newCard.cvv) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }

    try {
      const userId = await AsyncStorage.getItem('userId');
      if (!userId || !editingCard) {
        Alert.alert('Error', 'User ID o tarjeta no encontrados.');
        return;
      }

      await updateCard(editingCard.id, userId, newCard);
      setCards((prev) =>
        prev.map((card) => (card.id === editingCard.id ? { ...card, ...newCard } : card))
      );

      setNewCard({ cardNumber: '', cardHolderName: '', expiryDate: '', cvv: '' });
      setEditingCard(null);
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
      Alert.alert('Error', 'No se pudo guardar la tarjeta.');
    }
  };
  const handleCancelEdit = () => {
    setEditingCard(null);
    setNewCard({ cardNumber: '', cardHolderName: '', expiryDate: '', cvv: '' });
  };
  const handleDeleteCard = async (cardId) => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      if (!userId) {
        Alert.alert('Error', 'User ID not found.');
        return;
      }
      await deleteCard(cardId, userId);
      setCards((prev) => prev.filter((card) => card.id !== cardId));
    } catch (error) {
      console.error('Error deleting card:', error);
      Alert.alert('Error', 'No se pudo eliminar la tarjeta.');
    }
  };
  const handlePayNow = () => {
    Alert.alert('Pago', 'El pago se ha realizado con éxito.');
    navigation.navigate('HomeScreen')
  };

  const renderSavedCard = ({ item }) => (
    <SavedCard
      cardNumber={item.cardNumber}
      cardHolderName={item.cardHolderName}
      onPress={() => handleEditCard(item)}
      onPressDelete={() => handleDeleteCard(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
      <ReturnButton onPressButton={handleAddress} />
        <TitleScreen>Payment Method</TitleScreen>
      </View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={savedCards}
          renderItem={renderSavedCard}
          keyExtractor={(item) => item.id}
          style={styles.savedCardsList}
        />
      )}

      <View style={styles.addCardSection}>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          value={newCard.cardNumber}
          onChangeText={(value) => handleInputChange('cardNumber', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Card Holder Name"
          value={newCard.cardHolderName}
          onChangeText={(value) => handleInputChange('cardHolderName', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Expiry Date"
          value={newCard.expiryDate}
          onChangeText={(value) => handleInputChange('expiryDate', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="CVV"
          value={newCard.cvv}
          onChangeText={(value) => handleInputChange('cvv', value)}
        />
        {editingCard ? (
          <>
            <PrimaryButton onPressButton={handleSaveEdit}>Save Changes</PrimaryButton>
            <PrimaryButton onPressButton={handleCancelEdit}>Cancel Edit</PrimaryButton>
          </>
        ) : (
          <PrimaryButton onPressButton={handleAddCard}>Add Card</PrimaryButton>
        )}
      </View>

      {savedCards.length > 0 && (
        <View style={styles.payNowSection}>
          <PrimaryButton onPressButton={handlePayNow}>Pay Now</PrimaryButton>
        </View>
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
    paddingBottom: 40,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
  payNowSection: {
    marginTop: 20,
  },
});

export default PaymentMethodScreen;
